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


app.post("/searchQuery", searchQuery);


function searchQuery(req, res) {
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

    // search
    
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
                        const songIdM = lyricsId == null ? resultobj.song.songId : resultobj.song.lyrics.songInfo.SONGID;
                        sqlFnc.Read("melonRes", "*", { songIdM })
                            .then((data) => {
                                if (data.length <= 0) {
                                    
                                }
                            })
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
}