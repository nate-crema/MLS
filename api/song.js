import express from 'express';
import {ytMusic} from "../modules_Base";
import fs, { access } from "fs";
import path, { resolve } from "path";
import https from 'https';
import nodeCache from 'node-cache';
import sqlFnc from '../modules_Base/mysqlFnc';

const app = express.Router();


/*
* Naver Cloud Platform API Information
*/

const NCP_API = JSON.parse(fs.readFileSync(path.join(__dirname, "/../security/NCPAuth.json"), { encoding: "UTF-8" }));
// console.log(typeof NCP_API);

/*
* Naver Cloud Platform API Information
*/



// song Information get

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

app.post('/detail', getSongDetail, (req, res) => {
    return res.json(req.songDetailData);
});

app.post('/record', (req, res) => {
    const { cusId } = req.body;
    if (!cusId) return res.status(400).end("Bad Request");
    let resData = [];
    sqlFnc.Read("playLog", "*", {cusId: req.session.userInfo.cusId})
        .then((data) => {
        res.status(200).json({data});
        })
        .catch((e) => {
        console.error(e);
        res.status(500).end("Internal Server Error");
    })
})

// save music -> disabled (not ready)

const serviceCache = new nodeCache({
  stdTTL: 0,
  checkperiod: 600
});

function saveSongBrowser(req, res, next) {
  const { songIds } = req.body;
  serviceCache.get('song', (err, value) => {
    if (err) return res.status(404).end();
    if (value.length > 100) res.status(403).end("ERR: Too many musics already saved");
    songIds.forEach((songId, index) => {
      sqlFnc.Read("melonRes", { songIdB: songId })
        .then((data) => {
          if (!data) 
          serviceCache.set('song', )
      })
    })
  })
}

app.post('/save/songData', saveSongBrowser, (req, res) => {

})

module.exports = app;