const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const async = require("async");



/* ---------|  test area  |--------- */



// const testWord = "비와이";
// const testWord = "상상 더하기";
// // const testWord = "살아가는 거야";
// searchMelonSong(testWord)
//     .then((result) => {
//         console.log(result);
//         fs.appendFileSync(testWord + ".json", JSON.stringify({result}), {encoding: "UTF-8"})
//     });



/* ---------|  test area  |--------- */

function searchMelonSong(searchKey) {

    console.log("prepare for searching... : melon");

    let endCounter = {
        aInternal: 0,
        aListener: function(val) {},
        set a(val) {
          this.aInternal = val;
          this.aListener(val);
        },
        get a() {
          return this.aInternal;
        },
        registerListener: function(listener) {
          this.aListener = listener;
        }
    };
    let songIgnCounter = {
        aInternal: 0,
        aListener: function(val) {},
        set a(val) {
          this.aInternal = val;
          this.aListener(val);
        },
        get a() {
          return this.aInternal;
        },
        registerListener: function(listener) {
          this.aListener = listener;
        }
      };

    return new Promise((resolve, reject) => {
        let song = [];
        axios.get("https://www.melon.com/search/song/index.htm?q=" + encodeURI(searchKey))
        .then(({ data }) => {
            fs.writeFileSync(path.join(__dirname, "test.html"), data, {encoding: "UTF-8"});
            const $ = cheerio.load(data);
            const songInfos = $("tr td.t_left");
            var counter = 0;
            // console.log(songInfos.length);
            console.log("start filtering... : melon");
            for (var i = 0; i < songInfos.length; i += 4) {
                // console.log(songInfos[i].children[0].children[1].children[1].attribs.disabled);
                if (songInfos[i].children[0].children[1].children[1].attribs.disabled == undefined) {
                    async.waterfall([
                        (callback) => {
                            // console.log(songInfos[i + 1].children[0].children[1].children[1].attribs.href);
                            // console.log();
                            // console.log(songInfos[i].children[0].children[1].children[9].attribs.href.split("playSong")[1].split(",")[0].replace("(\'", "").replace("\'", ""));
                            // let songTitle;
                            // if (songInfos[i].children[0].children[1].children[5].children[0].children[0].data != undefined) songTitle = songInfos[i].children[0].children[1].children[5].children[0].children[0].data.replace(" 상세정보 페이지 이동", "")
                            // else {
                            //     console.log(songInfos[i].children[0].children[1].children[5].children[0].children[0].children[0].data);
                            //     songTitle = songInfos[i].children[0].children[1].children[5].children[0].children[0].children[0].data;
                            // }
                            let songTitle, menuId, songId;
                            let isTitle = false;
                            let isHot = false;
                            let isAdultOnly = false;
                            // if (songInfos[i].children[0].children[1].children[7].name == "span") {
                            // } else {
                                
                            // }

                            if (songInfos[i].children[0].children[1].children[7].name == "a") {
                                try {
                                    songTitle = songInfos[i].children[0].children[1].children[7].attribs.title;
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[7].attribs);
                                    throw new Error(`ERR: Get SongTitle of '${Math.floor(i/4)+1}'th song`);
                                }
                                try {
                                    menuId = songInfos[i].children[0].children[1].children[7].attribs.href.split("playSong")[1].split(",")[0].replace("(\'", "").replace("\'", "");
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[7].attribs);
                                    throw new Error(`ERR: Get menuId of '${Math.floor(i/4)+1}'th song`);
                                }
                                try {
                                    songId = songInfos[i].children[0].children[1].children[7].attribs.href.split("playSong")[1].split(",")[1].replace(");", "");
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[7].attribs);
                                    throw new Error(`ERR: Get songId of '${Math.floor(i/4)+1}'th song`);
                                }
                            } else if (songInfos[i].children[0].children[1].children.length >= 9 && songInfos[i].children[0].children[1].children[9].name == "a") {
                                // console.log(songInfos[i].children[0].children[1].children[7].children[0]);
                                if (songInfos[i].children[0].children[1].children[7].children[0].data == "title") isTitle == true;
                                if (songInfos[i].children[0].children[1].children[7].children[0].data == "hot") isHot == true;
                                if (songInfos[i].children[0].children[1].children[7].children[0].data == "19금") isAdultOnly == true;
                                try {
                                    songTitle = songInfos[i].children[0].children[1].children[9].attribs.title;
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[9].attribs);
                                    throw new Error(`ERR: Get SongTitle of '${Math.floor(i/4)+1}'th song (Title or Hot or Under 19 Ban)`);
                                }
                                try {
                                    menuId = songInfos[i].children[0].children[1].children[9].attribs.href.split("playSong")[1].split(",")[0].replace("(\'", "").replace("\'", "");
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[9].attribs);
                                    throw new Error(`ERR: Get menuId of '${Math.floor(i/4)+1}'th song (Title or Hot or Under 19 Ban)`);
                                }
                                try {
                                    songId = songInfos[i].children[0].children[1].children[9].attribs.href.split("playSong")[1].split(",")[1].replace(");", "");
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[9].attribs);
                                    throw new Error(`ERR: Get songId of '${Math.floor(i/4)+1}'th song (Title or Hot or Under 19 Ban)`);
                                }
                            } else if (songInfos[i].children[0].children[1].children.length >= 11 && songInfos[i].children[0].children[1].children[11].name == "a") {
                                // console.log(songInfos[i].children[0].children[1].children[7].children[0]);
                                if (songInfos[i].children[0].children[1].children[9].children[0].data == "title") isTitle == true;
                                if (songInfos[i].children[0].children[1].children[9].children[0].data == "hot") isHot == true;
                                if (songInfos[i].children[0].children[1].children[9].children[0].data == "19금") isAdultOnly == true;
                                try {
                                    songTitle = songInfos[i].children[0].children[1].children[11].attribs.title;
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[11].attribs);
                                    throw new Error(`ERR: Get SongTitle of '${Math.floor(i/4)+1}'th song (Title or Hot or Under 19 Ban (more than 2))`);
                                }
                                try {
                                    menuId = songInfos[i].children[0].children[1].children[11].attribs.href.split("playSong")[1].split(",")[0].replace("(\'", "").replace("\'", "");
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[11].attribs);
                                    throw new Error(`ERR: Get menuId of '${Math.floor(i/4)+1}'th song (Title or Hot or Under 19 Ban (more than 2))`);
                                }
                                try {
                                    songId = songInfos[i].children[0].children[1].children[11].attribs.href.split("playSong")[1].split(",")[1].replace(");", "");
                                } catch(e) {
                                    console.log(songInfos[i].children[0].children[1].children[11].attribs);
                                    throw new Error(`ERR: Get songId of '${Math.floor(i/4)+1}'th song (Title or Hot or Under 19 Ban (more than 2))`);
                                }
                            }
                            // console.log(songTitle);
                            let artistId = "";
                            if (songInfos[i + 1].children[0].children[1].children[1].attribs.href == undefined) {
                                // console.log(songInfos[i + 1].children[0].children[1].children[1]);
                                // throw new Error("TEST");
                            } else {
                                let checkbody = songInfos[i + 1].children[0].children[1].children[1].attribs.href.replace("javascript:melon.link.goArtistDetail('", "").split("");
                                const possibility = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                                for (var z = 0; z < checkbody.length; z++) {
                                    if (possibility.includes(checkbody[z])) artistId += checkbody[z];
                                    else break;
                                }
                            }
                            // console.log(`artistId: ${artistId}`);
                            let artistName = songInfos[i + 1].children[0].children[1].children[1].attribs.title == undefined ? null : songInfos[i + 1].children[0].children[1].children[1].attribs.title.replace(" - 페이지 이동", "");
                            if (artistName == null) artistName = "Various Artist";
                            // const menuId = songInfos[i].children[0].children[1].children[1].attribs.onclick.split("melon.play.playSong('")[1].split("',")[0].replace(");", "");
                            // const menuId = songInfos[i].children[0].children[1].children[9].attribs.href.split("playSong")[1].split(",")[0].replace("(\'", "").replace("\'", "");
                            // const songId = songInfos[i].children[0].children[1].children[1].attribs.onclick.split("melon.play.playSong('")[1].split("',")[1].replace(");", "");
                            // const songId = songInfos[i].children[0].children[1].children[9].attribs.href.split("playSong")[1].split(",")[1].replace(");", "");
                            // const songId = songInfos[i].children[0].children[1].children[5].children[0].attribs.href.split("playSong")
                            // console.log(`songId: ${songId}`);
                            // console.log(`songTitle: ${songTitle}`);
                            const albumId = songInfos[i + 2].children[0].children[1].children[1].attribs.href.split("melon.link.goAlbumDetail('")[1].replace("');", "");
                            let albumTitle;
                            if (songInfos[i + 2].children[0].children[1].children[1].children[0].data == undefined) {
                                try {
                                    albumTitle = songInfos[i + 2].children[0].children[1].children[1].children[0].children[0].data;
                                } catch (e) {
                                    console.log(songInfos[i].children[0].children[1].children[7].attribs);
                                    throw new Error(`ERR: Get albumTitle of '${Math.floor(i/4)+1}'th song`);
                                }
                            } else {
                                try {
                                    albumTitle = songInfos[i + 2].children[0].children[1].children[1].children[0].data;
                                } catch (e) {
                                    console.log(songInfos[i].children[0].children[1].children[7].attribs);
                                    throw new Error(`ERR: Get albumTitle of '${Math.floor(i/4)+1}'th song`);
                                }
                            }
                            const searchPriority = Math.floor(i / 4) + 1;
                            callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle);
                        },
                        (isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, callback) => {
                            axios.get(`https://www.melon.com/song/detail.htm?songId=${songId}`)
                            .then(({ data }) => {
                                const imgEXTR = cheerio.load(data);
                                const songImg = imgEXTR("div.section_info .wrap_info .thumb a img")[0].attribs.src;
                                callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg);
                            })
                            .catch((e) => {
                                console.log("MELON_API_ERROR[songDetail]: " + e);
                                // console.log("MELON_API_ERROR[songDetail]: requestRoute: " + `https://www.melon.com/song/detail.htm?songId=${songId}`);
                                // callback(e);
                                callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, null);
                            })
                        },
                        (isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, callback) => {
                            axios.get(`https://www.melon.com/album/detail.htm?albumId=${albumId}`)
                            .then(({ data }) => {
                                const imgEXTR = cheerio.load(data);
                                const albumImg = imgEXTR("div.section_info .wrap_info .thumb a img")[0].attribs.src;
                                callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg);
                            })
                            .catch((e) => {
                                console.log("MELON_API_ERROR[albumInfo]: " + e);
                                // callback(e);
                                callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, null);
                            })
                        },
                        (isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, callback) => {
                            if (artistId == "") callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, null);
                            else {
                                axios.get(`https://www.melon.com/artist/timeline.htm?artistId=${artistId}`)
                                .then(({ data }) => {
                                    const imgEXTR = cheerio.load(data);
                                    // console.log(imgEXTR("div.wrap_dtl_atist .wrap_thumb .thumb_frame")[0]);
                                    const artistImg = imgEXTR("div.wrap_dtl_atist .wrap_thumb #artistImgArea img")[0].attribs.src;
                                    callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, artistImg);
                                })
                                .catch((e) => {
                                    console.log("MELON_API_ERROR[artistInfo]: " + e);
                                    // callback(e);
                                    callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, null);
                                })
                            }
                        },
                        (isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, artistImg, callback) => {
                            axios.get(`https://www.melon.com/webplayer/getLyrics.json?songId=${songId}`)
                            .then(({ data }) => {
                                callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, artistImg, data)                            
                            })
                            .catch((e) => {
                                console.log("MELON_API_ERROR[lyricsInfo]: " + e);
                                // callback(e);
                                callback(null, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, artistImg, null);
                            })
                        }
                    ], (err, isAdultOnly, searchPriority, isTitle, isHot, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, artistImg, lyrics) => {
                            if (err) {
                                // console.error(err);
                            } else {
                                song.push({
                                    searchPriority,
                                    artist: {
                                        artistId,
                                        artistName,
                                        artistImg
                                    },
                                    album: {
                                        albumId,
                                        albumTitle,
                                        albumImg,
                                        linkConvert: "https://www.melon.com/album/detail.htm?albumId=" + albumId
                                    },
                                    song: {
                                        songTitle,
                                        menuId,
                                        songId,
                                        songImg,
                                        lyrics,
                                        linkConvert: "https://www.melon.com/song/detail.htm?songId=" + songId,
                                        isTitle,
                                        isHot,
                                        isAdultOnly
                                    }
                                })
                                endCounter.a++;
                            }
                            // end check
                            
                            try { 
                                endCounter.registerListener(function (val) {
                                    // console.log(`push complete: ${val} || total: ${songInfos.length/4}`);
                                    console.log(`Complete Percentage: ${Math.floor(val/(songInfos.length/4)*100)}%`);
                                    if (val >= ((songInfos.length / 4) - songIgnCounter.a)) {
                                        console.log(`Searching Complete (Page 1)`);
                                        sortArr(song);
                                        resolve(song);
                                    };
                                });
                            } catch (e) {
                                console.error(e)
                            }
    
                    })
                } else {
                    console.log(`Disabled Song: ${Math.floor(i / 4) + 1}`);
                    console.log(endCounter.a);
                    songIgnCounter.a++;
                    console.log(Math.floor(songInfos.length/4));
                    if (endCounter.a.length >= songInfos.length / 4) {
                        console.log(`Searching Complete (Page 1)`);
                        sortArr(song);
                        resolve(song);
                    };
                }
            }
        })
        .catch((e) => {
            reject(e);
        })
    }) 
}


function sortArr(object) {
    object.sort(function(a, b){
        return a.searchPriority - b.searchPriority ;
    }) ;
}




/* -----|  module export  |------ */

export default {
    searchMelonSong
}

/* -----|  module export  |------ */