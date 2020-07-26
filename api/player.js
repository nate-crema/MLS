import express from 'express';
import {ytMusic} from "../modules_Base";
const searchYT = ytMusic.search.searchYt;
import fs, { access } from "fs";
import path, { resolve } from "path";
import https from 'https';
import ytdl from 'ytdl-core';
import sqlFnc from '../modules_Base/mysqlFnc';

const app = express.Router();

// song play Information get

const getSongDetail = function (req, res, next) {
    const songId = req.body.songId;
    // console.log(songId);
    if (!songId) return res.status(400).end("ERR: Bad Request");
    if (!req.session.userInfo.cusId) return res.status(401).end("Unauthorized");

    // check validation
    if (songId.substr(0, 4) != "Base") return res.status(400).end("ERR: Bad Request");
    sqlFnc.Read("melonRes", "*", { songIdB: songId })
        .then((data) => {
        // console.log(data);
        let songDetailData = data[0];
        songDetailData.melonRes = null;
        songDetailData.melonResNum = null;

        // download songCover
        if (songDetailData.songImg) {
            const imageFile = path.join(__dirname, "../static/Cache/image/", `${songDetailData.songIdB}.jpg`);
            const urlImageFile = path.join("/Cache/image/", `${songDetailData.songIdB}.jpg`);
            const file = fs.createWriteStream(imageFile);
            const request = https.get(songDetailData.songImg, function(response) {
            response.pipe(file);
            songDetailData.songImg = urlImageFile;
            });
        }

        // get lyrics

        if (songDetailData.lyricsId) {
            getLyrics(songDetailData.lyricsId)
            .then((lyricsObj) => {
                songDetailData.lyrics = lyricsObj;
                // res.json(songDetailData);
                req.songDetailData = songDetailData;
                next();
            })
        } else {
            // res.json(songDetailData);
            req.songDetailData = songDetailData;
            next();
        }
    })
}

function getLyrics(lyricsId) {
return new Promise((resolve, reject) => {
    sqlFnc.Read("lyrics", "*", { lyricsId })
    .then((data) => {
        const lyrics = data[0];
        let lyricsObj = [];
        lyrics.lyrics.split("| & |").forEach((value, index) => {
        lyricsObj.push({
            time: index == 0 ? lyrics.timestamps.split("| & |")[index] : lyrics.timestamps.split("| & |")[index].substr(1),
            text: index == 0 ? value : value.substr(1)
        })
        if (index == lyrics.lyrics.split("| & |").length - 1) {
            // lyricsObj.sort((a, b) => a - b);
            setTimeout(() => {
            // console.log(lyricsObj);
            resolve(lyricsObj);
            }, 200);
        }
        })
        // lyricsObj.sort({ time: -1 })
    })
})
}

app.post('/getSongInfo', getSongDetail, (req, res) => {
    const searchedObj = req.songDetailData;
    // console.log(req.songDetailData);

    const { songTitle, artist, ytSyncId, songImg } = searchedObj;

    let searchSTDArtist = "";
    let isparantheseOpenA = false;
    artist.split("").forEach((val, idx) => {
        if (val == "(") {
        isparantheseOpenA = true;
        } else if (val == ")") {
        isparantheseOpenA = false;
        } else if (!isparantheseOpenA) searchSTDArtist += val;
    })

    let searchSTDTitle = "";
    let isparantheseOpenB = false;
    songTitle.split("").forEach((val, idx) => {
        if (val == "(") {
        isparantheseOpenB = true;
        } else if (val == ")") {
        isparantheseOpenB = false;
        } else if (!isparantheseOpenB) searchSTDTitle += val;
    })
    console.log(`search: "${searchSTDTitle}" ${searchSTDArtist}`);
    searchYT(`"${searchSTDTitle}" ${searchSTDArtist}`)
    .then((ytResult) => {
        console.log(`Search Requested: YTM`);
        // console.log(ytResult);
        if (ytResult.songObjs.length > 0) {
        // console.log(ytResult.songObjs);
        let searchedSong;
        let resJson = searchedObj;
        if (ytSyncId == null) {
            console.log(`correspond ytMusic musics: ${ytResult.songObjs.length}`);
            // find same song from yt music api
            fs.appendFileSync("fuckPS.json", JSON.stringify(ytResult));
            searchedSong = ytResult.songObjs.find(songobjIndiv => {
            // instrumental distinguition
            let indivTitle = songobjIndiv.song.title.replace(/\s/gi, "");
            let isparantheseOpen = false;
            indivTitle.split("").forEach((val, idx) => {

                if (val == "(") {
                let feat = indivTitle[idx + 1] + indivTitle[idx + 2] + indivTitle[idx + 3] + indivTitle[idx + 4];
                if (feat.toLowerCase != "feat") isparantheseOpen = idx;
                } else if (val == ")") {
                if (isparantheseOpen) {
                    let eraseSTR = indivTitle.substr(isparantheseOpen, idx - isparantheseOpen + 1);
                    indivTitle.split(eraseSTR, "");
                }
                }
            })
            const stdTitle = songTitle.replace(/\s/gi, "");
            console.log(`songTitle: ${indivTitle}`);
            if (indivTitle.includes(stdTitle)) {
                if (
                (
                    stdTitle.includes("inst") ||
                    stdTitle.includes("Inst") ||
                    stdTitle.includes("Inst.") ||
                    stdTitle.includes("inst.") ||
                    stdTitle.includes("instrumental")
                ) && (
                    stdTitle.includes("inst") ||
                    stdTitle.includes("Inst") ||
                    stdTitle.includes("inst.") ||
                    stdTitle.includes("Inst") ||
                    stdTitle.includes("instrumental")
                )
                ) {
                return indivTitle.includes(stdTitle);
                } else if (
                !(
                    stdTitle.includes("inst") ||
                    stdTitle.includes("Inst") ||
                    stdTitle.includes("Inst.") ||
                    stdTitle.includes("inst.") ||
                    stdTitle.includes("instrumental")
                ) && !(
                    stdTitle.includes("inst") ||
                    stdTitle.includes("Inst") ||
                    stdTitle.includes("inst.") ||
                    stdTitle.includes("Inst") ||
                    stdTitle.includes("instrumental")
                )
                ) return indivTitle.includes(stdTitle);
                else {
                console.log("ERR: Both are not included");
                }
            }
            })
            if (searchedSong == undefined) {
            console.log("No match Found: Replace alternatives");
            searchedSong = ytResult.songObjs[0];
            }
            // console.log(searchedSong);
            resJson.serviceSearchKey = `"${searchSTDTitle}" ${searchSTDArtist}`;
            resJson.ytInfo = searchedSong;
        } else {
            resJson.ytInfo = {};
        }
        ytdl(ytSyncId != null ? ytSyncId : searchedSong.song.videoId)
        .on('info', (info, format) => {
            if (ytSyncId == null) sqlFnc.Update("melonRes", { songIdB: searchedObj.songIdB }, { ytSyncId: searchedSong.song.videoId });
            console.log(format);
            resJson.ytInfo.setData = format;
            console.log(resJson);


            // song play logging
            console.log("logging songPlay");
            sqlFnc.Insert("playLog", {
            cusId: req.session.userInfo.cusId,
            location: undefined,
            playArch: req.body.reqService,
            ip: req.ip,
            songId: req.body.songId,
            songTitle,
            artist,
            ytSyncId: ytSyncId != null ? ytSyncId : searchedSong.song.videoId,
            songImg
            }, (err, result) => {
                if (err) {
                console.error(err);
                return res.status(500).end("Internal Server ERROR");
                }
                // console.log(result);
                res.status(200).json(resJson);
            })
        })
        .pipe(fs.createWriteStream(path.join(__dirname, `../static/Cache/music/${req.songDetailData.songIdB}.mp4`)));
        } else return res.status(404).end("Not Ready");
        // searchComplete("yt", ytResult, primaryKeyYT, null);
    })
    .catch((e) => {
        console.log(`Error Occured: ytm`);
        console.error(e);
        // searchComplete("yt", null, null, e);
    })
})


module.exports = app;