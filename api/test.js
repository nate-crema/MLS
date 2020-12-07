import express from 'express';
import fs, { access } from "fs";
import path, { resolve } from "path";


const { searchMelonRes, isAlreadySaved, getSongImgM, getAlbumImgM, getArtistImgM, getLyrics, getLyricsN, getSongImgY, getAlbumImgY, getArtistImgY } = require("./search.cntl");
const app = express.Router();

app.post('/searcnMNewB', (req, res) => {
    searchMelonRes(req.body.searchKey)
        .then((data) => {
            res.json({ data });
    })
})


app.post('/searchMNew', (req, res) => {
    searchMelonRes(req.body.searchKey)
    .then((result) => {
        res.json(result);
        // let respData = result;
        // let okCnt = 0;
        // for (var i = 0; i < result.length; i++) {
        //     getSongImgM(result[i].songId)
        //     .then((data) => {
        //         respData[i].songImg = data;
        //         okCnt++;
        //     })
        //     .catch((e) => {
        //         respData[i].songimg = null;
        //         okCnt++;
        //     })
        //     getAlbumImgM(result[i].albumId)
        //     .then((data) => {
        //         respData[i].albumImg = data;
        //         okCnt++;
        //     })
        //     .catch((e) => {
        //         respData[i].albumImg = null;
        //         okCnt++;
        //     })
        //     getArtistImgM(result[i].artistId)
        //     .then((data) => {
        //         respData[i].artistImg = data;
        //         okCnt++;
        //     })
        //     .catch((e) => {
        //         respData[i].artistImg = null;
        //         okCnt++;
        //     })
        //     getLyrics(result[i].songId)
        //     .then((data) => {
        //         respData[i].lyrics = data;
        //         okCnt++;
        //     })
        //     .catch((e) => {
        //         respData[i].lyrics = null;
        //         okCnt++;
        //     })
        //     isEnd();
        // }

        function isEnd() {
            if (okCnt == result.length) res.status(200).json({newSongs, searchPriorityArr, result: respData});
        }
    })
    .catch((e) => {
        console.error(e);
        res.status(500).end();
    })
})

app.post("/lyrics", (req, res) => {
    // for (var i = 0; i < 100; i++) {
        getLyricsN("3811406")
            .then((data) => {
            res.json({data});
        })
    // }
})



module.exports = app;