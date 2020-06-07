const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const async = require("async");



/* ---------|  test area  |--------- */



// const testWord = "PSY";
// searchMelonSong(testWord)
//     .then((result) => {
//         console.log(result);
//         fs.appendFileSync(testWord + ".json", JSON.stringify({result}), {encoding: "UTF-8"})
//     });



/* ---------|  test area  |--------- */

function searchMelonSong(searchKey) {

    console.log("prepare for searching...");

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

    return new Promise((resolve, reject) => {
        let song = [];
        axios.get("https://www.melon.com/search/song/index.htm?q=" + encodeURI(searchKey))
        .then(({data}) => {
            // fs.writeFileSync(path.join(__dirname, "test.html"), data, {encoding: "UTF-8"});
            const $ = cheerio.load(data);
            const songInfos = $("tr td.t_left");
            var counter = 0;
            // console.log(songInfos.length);

            for (var i = 0; i < songInfos.length; i += 4) {

                async.waterfall([
                    (callback) => {
                        const songTitle = songInfos[i].children[0].children[1].children[5].children[0].children[0].data.replace(" 상세정보 페이지 이동", "");
                        let artistId = "";
                        let checkbody = songInfos[i + 1].children[0].children[1].children[1].attribs.href.replace("javascript:melon.link.goArtistDetail('", "").split("");
                        const possibility = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                        for (var z = 0; z < checkbody.length; z++) {
                            if (possibility.includes(checkbody[z])) artistId += checkbody[z];
                            else break;
                        }
                        const artistName = songInfos[i + 1].children[0].children[1].children[1].attribs.title.replace(" - 페이지 이동","");
                        const menuId = songInfos[i].children[0].children[1].children[1].attribs.onclick.split("melon.play.playSong('")[1].split("',")[0].replace(");", "");
                        const songId = songInfos[i].children[0].children[1].children[1].attribs.onclick.split("melon.play.playSong('")[1].split("',")[1].replace(");", "");
                        const albumId = songInfos[i+2].children[0].children[1].children[1].attribs.href.split("melon.link.goAlbumDetail('")[1].replace("');", "");
                        const albumTitle = songInfos[i + 2].children[0].children[1].children[1].children[0].data;
                        callback(null, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle);
                    },
                    (songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, callback) => {
                        axios.get(`https://www.melon.com/song/detail.htm?songId=${songId}`)
                        .then(({ data }) => {
                            const imgEXTR = cheerio.load(data);
                            const songImg = imgEXTR("div.section_info .wrap_info .thumb a img")[0].attribs.src;
                            callback(null, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg);
                        })
                        .catch((e) => {
                            // callback(e);
                            callback(null, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, null);
                        })
                    },
                    (songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, callback) => {
                        axios.get(`https://www.melon.com/album/detail.htm?albumId=${albumId}`)
                        .then(({ data }) => {
                            const imgEXTR = cheerio.load(data);
                            const albumImg = imgEXTR("div.section_info .wrap_info .thumb a img")[0].attribs.src;
                            callback(null, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg);
                        })
                        .catch((e) => {
                            // callback(e);
                            callback(null, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, null);
                        })
                    },
                    (songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, callback) => {
                        axios.get(`https://www.melon.com/artist/timeline.htm?artistId=${artistId}`)
                        .then(({ data }) => {
                            const imgEXTR = cheerio.load(data);
                            // console.log(imgEXTR("div.wrap_dtl_atist .wrap_thumb .thumb_frame")[0]);
                            const artistImg = imgEXTR("div.wrap_dtl_atist .wrap_thumb #artistImgArea img")[0].attribs.src;
                            callback(null, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, artistImg);
                        })
                        .catch((e) => {
                            // callback(e);
                            callback(null, songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, null);
                        })
                    }
                ], (err,  songTitle, artistId, artistName, menuId, songId, albumId, albumTitle, songImg, albumImg, artistImg) => {
                        if (err) {
                            console.error(err);
                        } else {
                            song.push({
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
                                    linkConvert: "https://www.melon.com/song/detail.htm?songId=" + songId
                                }
                            })
                            endCounter.a++;
                        }
                        // end check
                        
                        try { 
                            endCounter.registerListener(function (val) {
                                console.log(`push complete: ${val} || total: ${songInfos.length/4}`);
                                if (val >= songInfos.length / 4) {
                                    console.log(`Searching Complete (Page 1)`);
                                    resolve(song);
                                };
                            });
                        } catch (e) {
                            console.error(e)
                        }

                })
            }
        })
        .catch((e) => {
            reject(e);
        })
    }) 
}




/* -----|  module export  |------ */

export default {
    searchMelonSong
}

/* -----|  module export  |------ */