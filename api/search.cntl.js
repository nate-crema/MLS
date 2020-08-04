const express = require('express');
const { melon, ytMusic } = require("../modules_Base");
const searchYT = ytMusic.search.searchYt;
const searchMelon = melon.search.title;
const getKTOP100MELON = require("../modules_Base/getTopChart").getKTOP100MELON;
const util = require('../util');
const sqlFnc = require('../modules_Base/mysqlFnc');
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const async = require('async');
const cheerio = require('cheerio');



const searchOptions = ["singer", "title", "lyrics"];


// melon

const searchMelonRes = function (searchKey) {
    return new Promise((resolve, reject) => {
        axios.get("https://www.melon.com/search/song/index.htm?q=" + encodeURI(searchKey))
        .then(({ data }) => {
            const $ = cheerio.load(data);
            const songInfos = $("tr td.t_left");
            console.log("start filtering... : melon");
            console.log(`Searched song: ${Math.floor(songInfos.length / 4)}`);
            console.log(songInfos.length / 4);
            let newSongs = []; // need to be saved in database
            let searchPriorityArr = []; // search align priority based on searchkey
            let result = []; // all results include already saved in database
            let ignCnt = 0;
            if (songInfos.length == 0) resolve({
                newSongs,
                searchPriorityArr,
                result
            });
            for (var i = 0; i < songInfos.length; i += 4) {
                const searchPriority = Math.floor(i / 4) + 1;
                console.log("Status: " + i/4);
                if (songInfos[i].children[0].children[1].children[1].attribs.disabled == undefined) {
                    let songTitle, menuId, songId;
                    let isTitle = false;
                    let isHot = false;
                    let isAdultOnly = false;

                    if (songInfos[i].children[0].children[1].children[7].name == "a") {
                        try {
                            songTitle = songInfos[i].children[0].children[1].children[7].attribs.title;
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[7].attribs);
                            throw new Error(`ERR: Get SongTitle of '${Math.floor(i / 4) + 1}'th song`);
                        }
                        try {
                            menuId = songInfos[i].children[0].children[1].children[7].attribs.href.split("playSong")[1].split(",")[0].replace("(\'", "").replace("\'", "");
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[7].attribs);
                            throw new Error(`ERR: Get menuId of '${Math.floor(i / 4) + 1}'th song`);
                        }
                        try {
                            songId = songInfos[i].children[0].children[1].children[7].attribs.href.split("playSong")[1].split(",")[1].replace(");", "");
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[7].attribs);
                            throw new Error(`ERR: Get songId of '${Math.floor(i / 4) + 1}'th song`);
                        }
                    } else if (songInfos[i].children[0].children[1].children.length >= 9 && songInfos[i].children[0].children[1].children[9].name == "a") {
                        // console.log(songInfos[i].children[0].children[1].children[7].children[0]);
                        if (songInfos[i].children[0].children[1].children[7].children[0].data == "title") isTitle == true;
                        if (songInfos[i].children[0].children[1].children[7].children[0].data == "hot") isHot == true;
                        if (songInfos[i].children[0].children[1].children[7].children[0].data == "19금") isAdultOnly == true;
                        try {
                            songTitle = songInfos[i].children[0].children[1].children[9].attribs.title;
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[9].attribs);
                            throw new Error(`ERR: Get SongTitle of '${Math.floor(i / 4) + 1}'th song (Title or Hot or Under 19 Ban)`);
                        }
                        try {
                            menuId = songInfos[i].children[0].children[1].children[9].attribs.href.split("playSong")[1].split(",")[0].replace("(\'", "").replace("\'", "");
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[9].attribs);
                            throw new Error(`ERR: Get menuId of '${Math.floor(i / 4) + 1}'th song (Title or Hot or Under 19 Ban)`);
                        }
                        try {
                            songId = songInfos[i].children[0].children[1].children[9].attribs.href.split("playSong")[1].split(",")[1].replace(");", "");
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[9].attribs);
                            throw new Error(`ERR: Get songId of '${Math.floor(i / 4) + 1}'th song (Title or Hot or Under 19 Ban)`);
                        }
                    } else if (songInfos[i].children[0].children[1].children.length >= 11 && songInfos[i].children[0].children[1].children[11].name == "a") {
                        // console.log(songInfos[i].children[0].children[1].children[7].children[0]);
                        if (songInfos[i].children[0].children[1].children[9].children[0].data == "title") isTitle == true;
                        if (songInfos[i].children[0].children[1].children[9].children[0].data == "hot") isHot == true;
                        if (songInfos[i].children[0].children[1].children[9].children[0].data == "19금") isAdultOnly == true;
                        try {
                            songTitle = songInfos[i].children[0].children[1].children[11].attribs.title;
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[11].attribs);
                            throw new Error(`ERR: Get SongTitle of '${Math.floor(i / 4) + 1}'th song (Title or Hot or Under 19 Ban (more than 2))`);
                        }
                        try {
                            menuId = songInfos[i].children[0].children[1].children[11].attribs.href.split("playSong")[1].split(",")[0].replace("(\'", "").replace("\'", "");
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[11].attribs);
                            throw new Error(`ERR: Get menuId of '${Math.floor(i / 4) + 1}'th song (Title or Hot or Under 19 Ban (more than 2))`);
                        }
                        try {
                            songId = songInfos[i].children[0].children[1].children[11].attribs.href.split("playSong")[1].split(",")[1].replace(");", "");
                        } catch (e) {
                            console.log(songInfos[i].children[0].children[1].children[11].attribs);
                            throw new Error(`ERR: Get songId of '${Math.floor(i / 4) + 1}'th song (Title or Hot or Under 19 Ban (more than 2))`);
                        }
                    }

                    // console.log("first callback");
                    const searchId = "40303" + util.getUid(10, true);
                    searchPriorityArr.push({
                        searchKey,
                        searchPriority,
                        songIdM: songId,
                        searchId
                    })

                    // check isAlreadySaved
                    isAlreadySaved(songId, i, searchPriority)
                        .then(({isSaved, bi, bSearchPriority}) => {
                            if (isSaved) {
                                console.log(`${Math.floor(bi/4)} || Song Already Saved: ${songId}`);
                                result.push(isSaved);
                                isEnd(bi, newSongs, result, searchPriorityArr)
                            } else {
                                console.log(`${Math.floor(bi/4)} || New song: ${songId}`);
                                let artistId = "";
                                if (songInfos[bi + 1].children[0].children[1].children[1].attribs.href == undefined) {
                                    // console.log(songInfos[bi + 1].children[0].children[1].children[1]);
                                    // throw new Error("TEST");
                                } else {
                                    let checkbody = songInfos[bi + 1].children[0].children[1].children[1].attribs.href.replace("javascript:melon.link.goArtistDetail('", "").split("");
                                    const possibility = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                                    for (var z = 0; z < checkbody.length; z++) {
                                        if (possibility.includes(checkbody[z])) artistId += checkbody[z];
                                        else break;
                                    }
                                }
                                let artistName = songInfos[bi + 1].children[0].children[1].children[1].attribs.title == undefined ? null : songInfos[bi + 1].children[0].children[1].children[1].attribs.title.replace(" - 페이지 이동", "");
                                if (artistName == null) artistName = "Various Artist";
                                const albumId = songInfos[bi + 2].children[0].children[1].children[1].attribs.href.split("melon.link.goAlbumDetail('")[1].replace("');", "");
                                let albumTitle;
                                if (songInfos[bi + 2].children[0].children[1].children[1].children[0].data == undefined) {
                                    try {
                                        albumTitle = songInfos[bi + 2].children[0].children[1].children[1].children[0].children[0].data;
                                    } catch (e) {
                                        console.log(songInfos[bi].children[0].children[1].children[7].attribs);
                                        throw new Error(`ERR: Get albumTitle of '${Math.floor(bi / 4) + 1}'th song`);
                                    }
                                } else {
                                    try {
                                        albumTitle = songInfos[bi + 2].children[0].children[1].children[1].children[0].data;
                                    } catch (e) {
                                        console.log(songInfos[bi].children[0].children[1].children[7].attribs);
                                        throw new Error(`ERR: Get albumTitle of '${Math.floor(bi / 4) + 1}'th song`);
                                    }
                                }
                                const melonSearchId = "40303" + util.getUid(10, true);
                                let pusher = {
                                    isAdultOnly,
                                    isTitle,
                                    isHot,
                                    songTitle,
                                    artistIdM: artistId,
                                    artist: artistName,
                                    menuIdM: menuId,
                                    songIdM: songId,
                                    albumIdM: albumId,
                                    albumTitle,
                                    searchId,
                                    melonRes: melonSearchId,
                                    melonResNum: melonSearchId + 0,
                                    numOfRes: bSearchPriority*1
                                };
                                // console.log(pusher);
                                newSongs.push(pusher);
                                result.push(pusher);
                                console.log(result.length);
                                isEnd(bi, newSongs, result, searchPriorityArr)
                            }
                        })
                        .catch((e) => console.error(`ERR: check isAlreadySaved at for${Math.floor(i/4)}: ${e}`))
                } else {
                    console.log(`Disabled Song: ${Math.floor(i / 4) + 1}`);
                    // console.log(endCounter.a);
                    ignCnt++;
                    console.log(Math.floor(songInfos.length/4));
                    // if (result.length >= songInfos.length / 4) {
                    //     console.log(`Searching Complete (Page 1)`);
                    //     resolve(song);
                    // };
                    isEnd(i, newSongs, result, searchPriorityArr)

                }
                    function isEnd(a, newSongsI, resultI, searchPriorityArrI) { 
                        // if for isEnd
                        console.log(`${a} -> ${a + 4} || ${songInfos.length}`);
                        if (a + 4 >= songInfos.length) {
                        // if (result.length >= songInfos.length / 4) {
                            console.log(`${Math.floor(i / 4)}: resolve`);
                            let isPushing = false;
                            sqlFnc.InsertManyEdit("searchPriorityM", searchPriorityArrI, function (err, result) {
                                if (err) throw err;
                            })
                            if (newSongsI.length > 0) {
                                isPushing = true;
                                console.log(`Background working start`)
                                newSongRegister(newSongsI)
                                .then((result) => {
                                    if (result.successCnt == newSongsI.length) {
                                        isPushing = !isPushing;
                                        console.log(`Background working complete: ${isPushing}`);
                                    }
                                })
                            }
                            // let searchPriorityArrSort = sortArr(searchPriorityArrI);
                            // console.log(`searchPriorityArrSort: ${searchPriorityArrSort.length}`)
                            resolve({
                                newSongs: newSongsI,
                                searchPriorityArr: searchPriorityArrI,
                                result: resultI
                            });
                            console.log(`Resolved Request. Background working: ${isPushing}`)
                            
                        }
                    }
            }
        })
        .catch((e) => {
            console.error(e);
            reject(e);
        })
    })
}

const isAlreadySaved = function(songId, bi, bSearchPriority) {
    return new Promise((resolve, reject) => {
        sqlFnc.Read("melonRes", "*", {
            songIdM: songId
        })
            .then((result) => {
                console.log(result);
                if (result.length > 0) resolve({isSaved: result[0], bi});
                else resolve({isSaved: false, bi, bSearchPriority});
            })
            .catch(e => reject(e));
    })
}

const getSongImgM = function(songId) { 
    return new Promise((resolve, reject) => {
        axios.get(`https://www.melon.com/song/detail.htm?songId=${songId}`)
            .then(({ data }) => {
                const imgEXTR = cheerio.load(data);
                const songImg = imgEXTR("div.section_info .wrap_info .thumb a img")[0].attribs.src;
                // console.log("second callback");
                resolve(songImg);
            })
            .catch((e) => {
                console.log("MELON_API_ERROR[songDetail]: " + e);
                // console.log("MELON_API_ERROR[songDetail]: requestRoute: " + `https://www.melon.com/song/detail.htm?songId=${songId}`);
                // callback(e);
                reject(e);
            })
    });
}

const getAlbumImgM = function(albumId) { 
    return new Promise((resolve, reject) => {
        axios.get(`https://www.melon.com/album/detail.htm?albumId=${albumId}`)
            .then(({ data }) => {
                const imgEXTR = cheerio.load(data);
                const albumImg = imgEXTR("div.section_info .wrap_info .thumb a img")[0].attribs.src;
                // console.log("trird callback");
                resolve(albumImg);
            })
            .catch((e) => {
                console.log("MELON_API_ERROR[albumInfo]: " + e);
                // callback(e);
                reject(e);
            })
    });
}

const getArtistImgM = function(artistId) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.melon.com/artist/timeline.htm?artistId=${artistId}`)
            .then(({ data }) => {
                const imgEXTR = cheerio.load(data);
                // console.log(imgEXTR("div.wrap_dtl_atist .wrap_thumb .thumb_frame")[0]);
                const artistImg = imgEXTR("div.wrap_dtl_atist .wrap_thumb #artistImgArea img")[0].attribs.src;
                // console.log("4th callback");
                resolve(artistImg);
            })
            .catch((e) => {
                console.log("MELON_API_ERROR[artistInfo]: " + e);
                // callback(e);
                reject(e);
            })
    });
}

const getLyrics = function(songIdM) {
    return new Promise((resolve, reject) => {
        sqlFnc.Read("lyrics", "*", { songIdM })
            .then((data) => {
                if (data.length > 0) {
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
                                resolve({
                                    songIdM,
                                    songIdB: data.songidB,
                                    data: lyricsObj
                                });
                            }, 200);
                        }
                    })
                } else {
                    axios.get(`https://www.melon.com/webplayer/getLyrics.json?songId=${songIdM}`)
                    .then(({ data }) => {
                            // console.log("5th callback");
                        resolve({
                            songIdM,
                            songIdB: undefined,
                            data: data.lylics
                        });
                    })
                    .catch((e) => {
                        console.log("MELON_API_ERROR[lyricsInfo]: " + e);
                        // callback(e);
                        reject(e);
                    })
                }
            // lyricsObj.sort({ time: -1 })
        })
    })
}

const getLyricsN = function(songIdM) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.melon.com/webplayer/getLyrics.json?songId=${songIdM}`)
        .then(({ data }) => {
                // console.log("5th callback");
            resolve(data);
        })
        .catch((e) => {
            console.log("MELON_API_ERROR[lyricsInfo]: " + e);
            // callback(e);
            reject(e);
        })
    })
}

const getLyricsMulti = function(lyricsId) {
    return new Promise((resolve, reject) => {
        let resArr = {};
        let command = `SELECT * FROM lyrics WHERE `;
        console.log(`getLyricsMulti: ${lyricsId.length}`)
        lyricsId.forEach((val, ind) => {
            command += `lyricsId=${val}`;
            if (ind != lyricsId.length - 1) command += " OR ";
        });
        console.log(command);
        sqlFnc.Direct(command)
            .then((result) => {
                result.forEach((val, ind) => {
                    let lobj = [];
                    let splitter = val.lyrics.split("| & |");
                    splitter.forEach((value, index) => {
                        lobj.push({
                            time: index == 0 ? val.timestamps.split("| & |")[index] : val.timestamps.split("| & |")[index].substr(1),
                            text: index == 0 ? value : value.substr(1)
                        })
                        if (index == splitter.length - 1) {
                            resArr[result.lyricsId] = lobj;
                        }
                    })
                    if (ind == result.length - 1) {
                        resolve(resArr);
                    }
                })
            })
            .catch((e) => {
                reject(e);
        })
    })
}

const newSongRegister = function (songArr) { 
    return new Promise((resolve, reject) => {
        let pushObj = [];
        let isPossiblePush = new Array(songArr.length);
        isPossiblePush.fill(true);
        songArr.forEach((songObj, indexsO) => {
            console.log(`progress: ${indexsO+1}/${songArr.length}`)
            let songObjU = songObj;
            let songImgS = false;
            let albumImgS = false;
            let artistImgS = false;
            let getLyricsS = false;
            const songIdB = "Base" + util.getUid(6);
            songObjU.songIdB = songIdB;
            getSongImgM(songObj.songIdM)
                .then((data) => {
                    console.log(`${indexsO} / ${songArr.length} || songImgM`);
                    songObjU.songImg = data;
                    songImgS = true;
                    console.log(`Collect Information Complete(getSongImgM): ${songObj.songId} `);
                    isPushable(songImgS, albumImgS, artistImgS, getLyricsS, songObjU, indexsO);
                })
                .catch((e) => {
                    console.log(`getSongImgM faile: || ${indexsO} || ${songObj.songId} ==> replace youtube data`);
                    // console.log(songObj);
                    getSongImgY(songObj)
                    .then((ytdata) => {
                        songObjU.songImg = ytdata;
                        isPossiblePush[indexsO] = true;
                    })
                    .catch((eY) => {
                        console.error(`ERR: BackgroundRegister(getSongImgM && getSongImgY) || ${indexsO} || ${songObj.songId} ==> ${eY}`);
                    })
            })
            getAlbumImgM(songObj.albumIdM)
                .then((data) => {
                    console.log(`${indexsO} / ${songArr.length} || albumImg`);
                    songObjU.AlbumImg = data;
                    albumImgS = true;
                    console.log(`Collect Information Complete(getAlbumImgM): ${songObj.songId} `);
                    isPushable(songImgS, albumImgS, artistImgS, getLyricsS, songObjU, indexsO);
                })
                .catch((e) => {
                    console.log(`getAlbumImgM faile: || ${indexsO} || ${songObj.songId} ==> replace youtube data`);
                    getAlbumImgY(songObj)
                    .then((ytdata) => {
                        songObjU.AlbumImg = ytdata;
                        isPossiblePush[indexsO] = true;
                    })
                    .catch((eY) => {
                        console.error(`ERR: BackgroundRegister(getAlbumImgM && getAlbumImgY) || ${indexsO} || ${songObj.songId} ==> ${eY}`);
                    })
                })
            if (songObj.artistIdM != "") {
                getArtistImgM(songObj.artistIdM)
                    .then((data) => {
                        // console.log(`${indexsO} / ${songArr.length} || artistImg`);
                        songObjU.artistImg = data;
                        artistImgS = true;
                        console.log(`Collect Information Complete(getArtistImgM): ${songObj.songId} `);
                        isPushable(songImgS, albumImgS, artistImgS, getLyricsS, songObjU, indexsO);
                    })
                    .catch((e) => {
                        console.log(`getArtistImgM faile: || ${indexsO} || ${songObj.songId} ==> replace youtube data`);
                        if (songObj.artist == "Various Artist") {
                            getArtistImgY(songObj)
                            .then((ytdata) => {
                                songObjU.artistImg = ytdata;
                                isPossiblePush[indexsO] = true;
                            })
                            .catch((eY) => {
                                console.error(`ERR: BackgroundRegister(getArtistImgM && getArtistImgY) || ${indexsO} || ${songObj.songId} ==> ${eY}`);
                            })
                        } else {
                            isPossiblePush[indexsO] = true;
                            songObjU.artistImg = "";
                            console.log(`Artist Image search automatically stopped: (artistname: ${songObj.artist})`)
                        }
                })
            } else {
                isPossiblePush[indexsO] = true;
                artistImgS = true;
                songObjU.artistImg = "";
                console.log(`Artist Image search automatically stopped: (artistname: ${songObj.artist})`)
            }
            // console.log(songObj.songId);
            getLyricsN(songObj.songIdM)
                .then((data) => {
                    console.log(`${indexsO} / ${songArr.length} / ${data != ""} || lylics`);
                    if (data != "") {
                        if (data.RMSG != "FAIL") {
                            const lyricsId = util.getUid(15, true);
                            songObjU.lyricsId = lyricsId;
                            let timestamps = [];
                            let lylics = [];
                            data.lylics.forEach((value, index) => {
                                timestamps.push(value.time + "| & |");
                                lylics.push(value.text + "| & |");
                            })
                            sqlFnc.Insert('lyrics', {
                                songIdM: songObj.songIdM,
                                songIdB,
                                lyricsId,
                                addService: "melon",
                                timestamps: timestamps.toString(),
                                lyrics: lylics.toString()
                            }, function (err, result) {
                                if (err) throw err;
                            });
                            isPossiblePush[indexsO] = true;
                        } else {
                            console.log(`Unidentified Error Occured: getLyricsN request: ${songObj.songIdM}`);
                            isPossiblePush[indexsO] = true;
                        }
                        // songObjU.lyrics = data.lylics;
                    }
                    getLyricsS = true;
                    isPushable(songImgS, albumImgS, artistImgS, getLyricsS, songObjU, indexsO);
                })
                .catch((e) => {
                    console.error(`ERR: BackgroundRegister(lyricsN) || ${indexsO} ==> ${e}`);
                })
            
            function isPushable(checkerA, checkerB, checkerC, checkerD, objs, index) {
                let isEndCnt = 0;
                checkerA ? isEndCnt++ : "";
                checkerB ? isEndCnt++ : "";
                checkerC ? isEndCnt++ : "";
                checkerD ? isEndCnt++ : "";
                console.log(`isEnd?: ${checkerA}|${checkerB}|${checkerC}|${checkerD}|${index}`);
                if (checkerA && checkerB && checkerC && checkerD) {
                    console.log(`pushed to queue: (${index})`);
                    pushObj.push(objs);
                    let pusher = objs;
                    // pusher.melonRes = "40303" + util.getUid(10, true);
                    // pusher.melonResNum = pusher.melonRes + index;
                    // pusher.numOfRes = 0;
                    pusher.searchId = util.getUid(15);
                    sqlFnc.Insert("melonRes", pusher, function (err, result) {
                        if (err) reject(err);
                        else {
                            console.log(`Background working complete`);

                            resolve({
                                successCnt: pushObj.length,
                                cont: pushObj
                            });
                        }
                    })
                }
                // if (pushObj.length == songArr.length) {
                //     sqlFnc.InsertManyEdit("melonRes", pushObj, function (err, result) {
                //         if (err) reject(err);
                //         else {
                //             console.log(`Background working complete`);
                //             resolve({
                //                 successCnt: pushObj.length,
                //                 cont: pushObj
                //             });
                //         }
                //     })
                // }
            }
        })

    })
}

// youtube

const getSongImgY = function (songObj) {
    console.log(`songId: ${songObj.songId}`);
    return new Promise((resolve, reject) => {
        const searchSTDArtist = songObj.artist;
        const searchSTDTitle = songObj.songTitle;
        searchYT(`"${searchSTDTitle}" ${searchSTDArtist}`)
            .then((dataYT) => {
                // console.log(dataYT);
                if (Object.keys(dataYT.topResultObj).length > 0) {
                    resolve({
                        songImg: dataYT.topResultObj.thumbnail
                    });
                } else {
                    console.log(dataYT.songObjs[0].song);
                    // resolve({
                    //     songImg: dataYT.songObjs[0].song
                    // });
                }
            })
            .catch((e) => {
                reject(e);
    })
    })
}

const getAlbumImgY = function(songObj) {
    return new Promise((resolve, reject) => {
        const searchSTDArtist= songObj.artist;
        const searchSTDTitle= songObj.songTitle;
        searchYT(`"${searchSTDTitle}" ${searchSTDArtist}`)
        .then((dataYT) => {
            console.log(dataYT);
        })
    })
}

const getArtistImgY = function(songObj) {
    return new Promise((resolve, reject) => {
        const searchSTDArtist= songObj.artist;
        const searchSTDTitle= songObj.songTitle;
        searchYT(`"${searchSTDTitle}" ${searchSTDArtist}`)
        .then((dataYT) => {
            console.log(dataYT);
        })
    })
}




module.exports.searchMelonRes = searchMelonRes;
module.exports.isAlreadySaved = isAlreadySaved;
module.exports.getSongImgM = getSongImgM;
module.exports.getAlbumImgM = getAlbumImgM;
module.exports.getArtistImgM = getArtistImgM;
module.exports.getLyrics = getLyrics;
module.exports.getLyricsN = getLyricsN;
module.exports.getLyricsMulti = getLyricsMulti;
module.exports.getSongImgY = getSongImgY;
module.exports.getAlbumImgY = getAlbumImgY;
module.exports.getArtistImgY = getArtistImgY;
    


function sortArr(object) {
    object.sort(function(a, b){
        return a.searchPriority - b.searchPriority ;
    }) ;
}