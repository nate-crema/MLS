const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const async = require("async");

// searchMelonTitle("IU 시간의 바깥");

function searchMelonTitle(searchKey) {

    return new Promise((resolve, reject) => {
        let song = [];
        axios.get("https://www.melon.com/search/lyric/index.htm?q=" + encodeURI(searchKey))
        .then(({data}) => {
            // fs.writeFileSync(path.join(__dirname, "test.html"), data, {encoding: "UTF-8"});
            const $ = cheerio.load(data);
            const songInfos = $("tr td.t_left");
            var counter = 0;
            // console.log(songInfos[12]);

            for (var i = 0; i < songInfos.length; i += 4) {
        
                // console.log(i);
                try {
                    const songTitle = songInfos[i].children[0].children[1].children[5].children[0].children[0].data.replace(" 상세정보 페이지 이동", "");
                    const artistId = songInfos[i].children[0].children[1].children[1].attribs.onclick.split("melon.play.playSong('")[1].split("',")[0].replace(");", "");
                    const artistName = songInfos[i].children[0].children[1].children[1].attribs.onclick.split(");melon.play.playSong('")[0].split("searchLog(")[1].split(",")[3].replace("'", "").replace("'", "");
                    const songId = songInfos[i].children[0].children[1].children[1].attribs.onclick.split("melon.play.playSong('")[1].split("',")[1].replace(");", "");
                    const albumId = songInfos[i+2].children[0].children[1].children[1].attribs.href.split("melon.link.goAlbumDetail('")[1].replace("');", "");
                    const albumTitle = songInfos[i + 2].children[0].children[1].children[1].children[0].data;
                    // console.log(songInfos[i].children);
                    // console.log(songTitle);
                    // console.log(artistId);
                    // console.log(songId);
                    // console.log(albumId);
                    // console.log(albumTitle);
                    // console.log(i);

                    let isImgEnd = false;
                    
                    axios.get(`https://www.melon.com/song/detail.htm?songId=${songId}`)
                    .then(({ data }) => {
                        const imgEXTR = cheerio.load(data);
                        // console.log();
                        const songImg = imgEXTR("div.section_info .wrap_info .thumb a img")[0].attribs.src;
                        song.push({
                            // artist: {
                            //     artistId,
                            //     artistName
                            // },
                            album: {
                                albumId,
                                albumTitle,
                                linkConvert: "https://www.melon.com/album/detail.htm?albumId=" + albumId
                            },
                            song: {
                                songTitle,
                                songId,
                                songImg,
                                linkConvert: "https://www.melon.com/song/detail.htm?songId=" + songId
                            }
                        })
                        isImgEnd = true;
                    })
                    if (i + 4 >= songInfos.length) console.log("end!");
                    
                    function isEnd() {
                        if (isImgEnd) {
                            // console.log(song);
                            // console.log(song[0].albumLink);
                            // console.log(song[0].songLink);
                            resolve(song);
                        } else {
                            setTimeout(() => {
                                isEnd();
                            }, 100);
                        }
                    }

                    isEnd();

                } catch(e) {
                    continue;
                }
            }
        })
        .catch((e) => {
            reject(e);
        })
    }) 
}

export default {
    searchMelonTitle
}