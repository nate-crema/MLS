import express from 'express';
const { searchMelonRes, isAlreadySaved, getSongImgM, getAlbumImgM, getArtistImgM, getLyrics, getLyricsMulti, getSongImgY, getAlbumImgY, getArtistImgY, getLyricsN } = require("./search.cntl");
const getKTOP100MELON = require("../modules_Base/getTopChart").getKTOP100MELON;
import util from '../util';
import sqlFnc from '../modules_Base/mysqlFnc';
import async from 'async';



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

app.post("/searchQuery", (req, res) => {
    searchMelonRes(req.body.searchQuery)
        .then((data) => {
            let resData = [];
            let lyricsId = [];
            let lyrics = [];
            async.waterfall([
                (callback) => {
                    let cbd = {};
                    data.result.forEach((value, index) => {
                        console.log(`lyrics: ${index} || ${value.lyricsId}`);
                        if (value.lyricsId != "") {
                            getLyrics(value.songIdM)
                            .then((dataL) => {
                                // console.log(data);
                                cbd[value.lyricsId] = dataL.data;
                                if (index == data.result.length - 1) {
                                    console.log(`callback: ${index}`);
                                    callback(null, cbd);
                                }
                            })
                            .catch((e) => {
                                    console.error(e);
                                // callback(e);
                            })
                        }
                    })
                },
            ], (err, result) => {
                console.log(result);
                if (err) res.status(500).end("Internal Server Error");
                else {
                    data.result.forEach((value, index) => {
                        console.log(`dataPusher: ${index}`);
                        let searchPriorityObj = data.searchPriorityArr.filter((val, ind) => {
                            return val.songIdM == value.songIdM;
                        })
                        resData.push({
                            album: {
                                albumId: value.albumIdM,
                                albumImg: value.albumImg == "" ? undefined : value.albumImg,
                                albumTitle: value.albumTitle,
                                linkConvert: `https://www.melon.com/album/detail.htm?albumId=${value.albumIdM}`,
                            },
                            artist: {
                                artistId: value.artistIdM == "" ? undefined : value.artistIdM,
                                artistImg: value.artistImg == "" ? undefined : value.artistImg,
                                artistName: value.artist
                            },
                            song: {
                                isAdultOnly: value.isAdultOnly,
                                isHot: value.isHot,
                                isTitle: value.isTitle,
                                linkConvert: `https://www.melon.com/song/detail.htm?songId=${value.songIdM}`,
                                lyricsId: value.lyricsId,
                                lyrics: result[""+value.lyricsId],
                                menuId: value.menuIdM,
                                songId: value.songIdM,
                                songImg: value.songImg,
                                songTitle: value.songTitle
                            },
                            searchPriority: !value.numOfRes ? searchPriorityObj.searchPriority : value.numOfRes,
                            songIdB: value.songIdB
                        })
                        if (index == data.result.length - 1) {
                            res.status(200).json({ melon: {data: resData}})
                        }
                    })
                }
            })
    })
});

app.post("/lyrics", (req, res) => {
    let resArr = [];
    const baseData = req.body.data;
    for (var i = 0; i < baseData.length; i++) {
        getLyricsN(baseData[i], i)
            .then((data) => {
                resArr.push({
                    lyricsId: baseData[data.i],
                    lyrics: data.lylics
                });
            // res.json({data});
            })
            .catch((e) => {
                console.error(e);
            })
        if (i == baseData.length - 1) res.status(200).json({
            data: resArr
        });
    }
})

app.post("/img", (req, res) => {
    let resArr = [];
    const baseData = req.body.data;
    for (var i = 0; i < baseData.length; i++) {
        getSongImgM(baseData[i], i)
            .then((data) => {
                resArr.push({
                    songIdM: baseData[data.i],
                    lyrics: data.lylics
                });
            // res.json({data});
            })
            .catch((e) => {
                console.error(e);
            })
        if (i == baseData.length - 1) res.status(200).json({
            data: resArr
        });
    }
})



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