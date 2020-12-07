import express from 'express';
import sqlFnc from '../modules_Base/mysqlFnc';
import getKTOP100MELON from '../modules_Base/getTopChart/index';

const app = express.Router();

// playlist Information get

const getSongInfo = function (songIdB) {
    return new Promise((resolve, reject) => {
        sqlFnc.Read("melonRes", "*", { songIdB })
        .then((searchRes) => {
            let resobj = searchRes;
            if (searchRes.lyricsId != null) {
            getLyrics(lyricsId)
                .then((data) => {
                resobj.lyrics = data;
                });
            }
            resolve(searchRes);
        })
        .catch((e) => {
            reject(e);
        })
    })
}

app.post('/detail', (req, res) => {
    const { plistId, cusId } = req.body;
    if (!plistId || !cusId) return res.status(400).end("Bad Request");

    if (plistId == "ytRecommend") {
        // not ready
    } else if (plistId == "top100") {
        getKTOP100MELON.getKTOP100MELON()
        .then((data) => {
            res.status(200).json({
            title: `TOP100 차트 (업데이트: ${new Date().getHours()}시)`,
            contentsData: data
            });
        })
    } else {
        sqlFnc.Read("playlist", "*", { plistId })
        .then((searchRes) => {
            if (searchRes.length == 0) return res.status(404).end("Not Found");
            let playlist = searchRes[0];
            playlist.contentsData = [];
            playlist.plistCont.forEach((val, ind) => {
            getSongInfo(val)
                .then((data) => {
                playlist.contentsData.push(data);
                if (ind == playlist.plistCont.lenght - 1) {
                    res.status(200).json(playlist);
                }
                })
                .catch((e) => {
                console.error(e);
                res.status(500).end("Internal Server Error");
                })
            })
        })
        .catch((e) => {
            console.error(e);
            return res.status(500).end("Internal Server Error");
        })
    } 
})

app.post('/add', (req, res) => {
    let availableList = ["melon", "youtube"];
    const { playlist, cusId, service, type, baseURL } = req.body;
    const { userInfo } = req.session;
    if (!cusId || !userInfo) return res.status(401).end("Unauthorized");
    if (!playlist || !service || !type) return res.status(400).end("Bad Request");
    if (!baseURL && !(service == "Base" && type == "new" && !baseURL)) return res.status(400).end("Bad Request");
    if (!availableList.includes(service)) return res.status(400).end(`Unsupport Service: ${service}`);
    if (typeof playlist != "object") return res.status(400).end("Bad Request");
    
    
    
})

module.exports = app;