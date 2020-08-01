import express from 'express';
import { melon, ytMusic, mediaSearch } from "../modules_Base";
const searchMelon = melon.search.title;
const getKTOP100MELON = require("../modules_Base/getTopChart").getKTOP100MELON;
import util from '../util';
import sqlFnc from '../modules_Base/mysqlFnc';



// Create express router
const app = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()

app.use((req, res, next) => {
  Object.setPrototypeOf(req, express().request)
  Object.setPrototypeOf(res, express().response)
  req.res = res
  res.req = req
  next();
})

const searchOptions = ["singer", "title", "lyrics"];

app.post("/searchQuery", searchQuery);


function searchQuery (req, res) {
    console.log("---searchQuery API---");
    // search option check
    const option = req.body.searchOption.replace(/(\s*)/g,"");
    const query = req.body.searchQuery;
    const cusId = req.body.cusId;
    if (!option || !query || !cusId) {
        res.status(400);
        return res.end("Bad Request");
    }

    const searchId = util.getUid(15);
    console.log(`SearchId: '${searchId}'`);
    console.log(`SearchKey: '${query}'`);

    sqlFnc.Read('searchtb', "", { searchKey: query })
    .then((data) => {
        console.log(`prev searchData: ${data}`);
        if (data.length == 0) {
            console.log("no prev search data found");
            searchNew(searchId, cusId, query, req.ip, option)
            .then(({ stCode, json }) => {
                res.status(stCode).json(json);
            })
            .catch((e) => {
                console.error(e);
                res.status(500).end("Internal Server Error");
            });
        } else {
            console.log(JSON.stringify(data));
            console.log(`${data.length} previous result found in db`);
            getPrevRes(data, query, {req, res})
            .then((prevData) => {
                console.log(prevData);
                res.status(200).json(prevData);
            })
        }
    })
    .catch((e) => {
        console.error(e);
    })

}

function getPrevRes(data, searchKeyword, nodeControl) {
    return new Promise((resolve, reject) => {
        // let returnObjCounter = 0;
        let returnObjCounter = {
            rocInternal: 0,
            rocListener: function(val) {},
            set roc(val) {
              this.rocInternal = val;
              this.rocListener(val);
            },
            get roc() {
              return this.rocInternal;
            },
            registerListener: function(listener) {
              this.rocListener = listener;
            }
        }
        returnObjCounter.registerListener(function (val) {
            console.log(`returnObjCounter: ${val}`);
            if (val == 1) resolve(returnData);
        })
        
        let returnData = {
            "med": {},
            "yt": {},
            "melon": {}
        }
        data.forEach((searchData, index) => {
            console.log(index);
            // definition
            const { searchKey, melonRes, ytRes, medRes, addDate } = searchData;
    
            // isLyricsget total end
            let isLyricsEndTotal = {
                boolInternal: false,
                boolListener: function(val) {},
                set bool(val) {
                    this.boolInternal = val;
                    this.boolListener(val);
                },
                get bool() {
                    return this.boolInternal;
                },
                registerListener: function(listener) {
                    this.boolListener = listener;
                }
            }
        
            // search: melonRes
            sqlFnc.Read('melonRes', "", { melonRes })
                .then((prevMelonRes) => {
                if (prevMelonRes.length == 0) {
                    // error when registering
                    // delete previous result
                    sqlFnc.Delete("searchtb", { columns: "searchKey", values: searchKeyword }, function (err, res) {
                        if (err) reject(err);
                        else searchQuery(nodeControl.req, nodeControl.res);
                    })
                }
                // console.log(JSON.stringify(prevMelonRes));
                let melonDatas = [];
                console.log(`${prevMelonRes.length} previous melon result found (timestamp: ${addDate})`);
    
                // let lyricsObj;
                let lyricsObj = {};
                prevMelonRes.forEach((prevMelonResIndiv, indexMR) => {
                    let pushData;
                    // console.log(prevMelonResIndiv.lyricsId);
                    if (prevMelonResIndiv.lyricsId) {
                        sqlFnc.Read('lyrics', "", { lyricsId: prevMelonResIndiv.lyricsId, addService: "melon" })
                        .then((lylicsPDataArr) => {
                            // console.log(lylicsPDataArr);    
                            // console.log(`${prevMelonResIndiv.songTitle} lyrics found (song-save timestamp: ${addDate})`);
                            let lylicsTextArr = lylicsPDataArr[0].lyrics.split("| & |,");
                            let lylicsTimeArr = lylicsPDataArr[0].timestamps.split("| & |,");
                            console.log(lyricsObj);
                            if (!lyricsObj.lylics) {
                                lyricsObj.lylics = [];
                                lyricsObj.lylicsNum = lylicsTextArr.length;
                            }
                            for (var i = 0; i < lylicsTextArr.length; i++) {
                                lyricsObj.lylics.push({
                                    text: lylicsTextArr[i],
                                    time: lylicsTimeArr[i]
                                });
                                if (lylicsTextArr.length - 1 == i) {
                                    pushData = {
                                        album: {
                                            albumId: prevMelonResIndiv.albumIdM,
                                            albumImg: prevMelonResIndiv.albumImg,
                                            albumTitle: prevMelonResIndiv.albumTitle,
                                            linkConvert: `https://www.melon.com/album/detail.htm?albumId=${prevMelonResIndiv.albumIdM}`
                                        },
                                        artist: {
                                            artistId: prevMelonResIndiv.artistIdM ? prevMelonResIndiv.artistIdM : "Various Artist",
                                            artistImg: prevMelonResIndiv.artistImg,
                                            artistName: prevMelonResIndiv.artist ? prevMelonResIndiv.artist : "Various Artist"
                                        },
                                        song: {
                                            linkConvert: `https://www.melon.com/song/detail.htm?songId=${prevMelonResIndiv.songIdM}`,
                                            menuId: prevMelonResIndiv.menuId,
                                            songId: prevMelonResIndiv.songIdM,
                                            songImg: prevMelonResIndiv.songImg,
                                            songTitle: prevMelonResIndiv.songTitle,
                                            lyrics: lyricsObj
                                        },
                                        numOfRes: prevMelonResIndiv.numOfRes*1,
                                        songIdB: prevMelonResIndiv.songIdB
                                    }
                                    melonDatas.push(pushData);
                                    console.log(`pushed! (searchResult recovery completion status: ${melonDatas.length} / ${prevMelonRes.length})`);
                                    if (melonDatas.length == prevMelonRes.length) isLyricsEndTotal.bool = true;
                                }
                            }
                        })
                    } else {
                        pushData = {
                            album: {
                                albumId: prevMelonResIndiv.albumIdM,
                                albumImg: prevMelonResIndiv.albumImg,
                                albumTitle: prevMelonResIndiv.albumTitle,
                                linkConvert: `https://www.melon.com/album/detail.htm?albumId=${prevMelonResIndiv.albumIdM}`
                            },
                            artist: {
                                artistId: prevMelonResIndiv.artistIdM ? prevMelonResIndiv.artistIdM : "Various Artist",
                                artistImg: prevMelonResIndiv.artistImg,
                                artistName: prevMelonResIndiv.artist ? prevMelonResIndiv.artist : "Various Artist"
                            },
                            song: {
                                linkConvert: `https://www.melon.com/song/detail.htm?songId=${prevMelonResIndiv.songIdM}`,
                                menuId: prevMelonResIndiv.menuId,
                                songId: prevMelonResIndiv.songIdM,
                                songImg: prevMelonResIndiv.songImg,
                                songTitle: prevMelonResIndiv.songTitle,
                                lyrics: null
                            },
                            songIdB: prevMelonResIndiv.songIdB,
                            numOfRes: prevMelonResIndiv.numOfRes*1,
                        }
                        melonDatas.push(pushData);
                    }


                    // lyricsObj.registerListener(function (val) {
                    //     console.log("registerListener: lylicsObj");
                    // });
                })

                isLyricsEndTotal.registerListener(isEnd)

                function isEnd() {
                    console.log("isEndFunc");
                    if (index == data.length - 1) {
                        returnData.melon.data = melonDatas;
                        console.log("complete: melon");
                        returnObjCounter.roc++;
                    } else {
                        setTimeout(() => {
                            isEnd();
                        }, 500);
                    }
                }

                
            })
        })
    })
}

function searchNew(searchId, cusId, query, ip, option) {
    return new Promise((resolve, reject) => {

        let MdbObj = {
            searchId,
            // cusId: "gda56GkzsGKixwFRhzgv", // change after activate session login
            cusId,
            searchKey: query,
            ip
        }
        
        let tried_counter = 0;
        
        let stCode = 200;
    
        let searchResult = {
            "med": {},
            "yt": {},
            "melon": {}
        };
    
        // searchMedia(query)
        // .then((mediaResult) => {
        //     console.log(`Search Requested: Media`);
        //     const primaryKeyMedia = "40302" + util.getUid(10, true);
        //     searchComplete("med", mediaResult, primaryKeyMedia, null);
        // })
        // .catch((e) => {
        //     console.log(`Error Occured: media`);
        //     console.error(e);
        //     searchComplete("med", null, null, e);
        // })
    
        console.log(`Search Requested: Melon`);
        searchMelon(query)
        .then((melonResult) => {
            console.log(`Search Complete: Melon`);
            const primaryKeyMelon = "40303" + util.getUid(10, true);
            searchComplete("melon", melonResult, primaryKeyMelon, null);
        })
        .catch((e) => {
            console.log(`Error Occured: melon`);
            console.error(e);
            searchComplete("melon", null, null, e);
        })
    
    
        function searchComplete(type, data, primaryKey, err) {
            if (err) { 
                stCode = 500;
                searchResult[type].err = err;
            }
            console.log(`${type} completes || total finish: ${++tried_counter}`);
            if (data) {
    
                console.log(typeof data);
                
                let SdbObj = {
                    searchKey: query,
                    searchResArr: JSON.stringify(data)
                };
                
                // save search result in db
                
                var columnName = type + "Res";
                var tableName = type + "res";
                MdbObj[columnName] = primaryKey;
                SdbObj[columnName] = primaryKey;
    
                searchResult[type].data = [];
                
                // resultobj.song.lyrics.lylics ? JSON.stringify(resultobj.song.lyrics.lylics) : resultobj.song.lyrics.lylics,
    
    
                try {
                    if (type == "melon") {
                        let z = 0;
                        SdbObj = [];
                        for (var resultobj of data) {
                            let lyricsId;
                            let timestamps = [];
                            let lylics = [];
                            let dataEdit = resultobj;
                            const songIdB = "Base" + util.getUid(6);
                            dataEdit.songIdB = songIdB;
                            if (resultobj.song.lyrics.lylics) {
                                lyricsId = util.getUid(15, true);
                                resultobj.song.lyrics.lylics.forEach((value, index) => {
                                    timestamps.push(value.time + "| & |");
                                    lylics.push(value.text + "| & |");
                                })
                                sqlFnc.Insert('lyrics', {
                                    lyricsId,
                                    addService: "melon",
                                    timestamps: timestamps.toString(),
                                    lyrics: lylics.toString()
                                }, function (err, result) {
                                    if (err) throw err;
                                });
                            }
                            else lyricsId = null;

                            console.log(resultobj.song.songId);

                            SdbObj.push({
                                searchId,
                                melonRes: primaryKey,
                                melonResNum: primaryKey + z,
                                numOfRes: z++,
                                songIdM: lyricsId == null ? resultobj.song.songId : resultobj.song.lyrics.songInfo.SONGID,
                                songIdB,
                                menuIdM: resultobj.song.menuId,
                                songImg: resultobj.song.songImg,
                                songTitle: resultobj.song.songTitle,
                                lyricsId,
                                artist: resultobj.artist.artistName,
                                artistImg: resultobj.artist.artistImg,
                                artistIdM: resultobj.artist.artistId,
                                albumTitle: lyricsId == null ? resultobj.album.albumTitle : resultobj.song.lyrics.songInfo.ALBUMNAME,
                                albumIdM: lyricsId == null ? resultobj.album.albumId : resultobj.song.lyrics.songInfo.ALBUMID,
                                albumImg: resultobj.album.albumImg
                            });

                            searchResult[type].data.push(dataEdit);
                        }
                        // sqlFnc.InsertMany(tableName, SdbObj, function (err, result) {
                        //     if (err) throw err;
                        // })
                        sqlFnc.InsertManyEdit(tableName, SdbObj, function (err, result) {
                            if (err) throw err;
                        })
                    } else {
                        sqlFnc.Insert(tableName, SdbObj, function (err, result) {
                            if (err) throw err;
                        });
                    }
                } catch (e) {
                    console.error(e);
                }
            }
            if (tried_counter == 1) {
    
                // save search result in db
    
                if (!MdbObj.ytRes) {
                    MdbObj.ytRes = "44444";
                }
                if (!MdbObj.melonRes) {
                    MdbObj.melonRes = "44444";
                }
                if (!MdbObj.medRes) {
                    MdbObj.medRes = "44444";
                }
    
                setTimeout(() => {
                    try { 
                        console.log(MdbObj);
                        sqlFnc.Insert("searchtb", MdbObj, function (err, result) {
                            if (err) throw err;
                        });
                    } catch (e) {
                        console.error(e);
                    }
                }, 100);
    
    
    
    
                const searchAllianced = searchAlliance(searchResult);
                searchFiltering(searchAllianced, option.split(","), "*")
                .then((filterData) => {
                    resolve({
                        stCode,
                        json: filterData
                    })
                })
                .catch((e) => {
                    console.error(e);
                    // res.status(stCode).json({});
                    resolve({
                        stCode,
                        json: {}
                    })
                })
            }
        }
    })
}

function searchAlliance(searchResult) {
    let resData = [];
    if (!searchResult.melon) return new Array(0);
    return searchResult;
}

function searchFiltering(searchResult, filter) {

    // filter not ready

    return new Promise((resolve, reject) => {
        if (filter.includes("*")) {
            resolve(searchResult);
        } else if (filter.includes("_")) {
            resolve({});
        } else switch (filter) {
            case "title":

                
            
            // resolve();
            // break;

            case "lyrics":

            // resolve();
            // break;

            case "singer":

            // resolve();
            // break;

            default:
                // resolve(searchResult);
                break;
        }
    })
}



// K-TOP100 songs Taking


app.post("/top100", top100Get);

function top100Get(req, res) { 
    getKTOP100MELON()
        .then((data) => {
            res.json({data});
    })
}

// 1. MELON

// 정각마다 동기화 -> 요청시마다 조회로 변경 => 비활성화
// try {
//     const crawlerRegisterRes = util.fncRegular("specific", 0, {
//         optionSetter: "MM",
//         optionValue: 00
//     }, getKTOP100MELON());
//     console.log(crawlerRegisterRes);
// } catch (e) {
//     console.error("err: register K-TOP100 crawler [MELON]");
// }

module.exports = app;