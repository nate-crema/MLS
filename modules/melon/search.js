const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// searchMelon("아이");

function searchMelon(searchKey) {

    return new Promise((resolve, reject) => {
        let song = [];
        axios.get("https://www.melon.com/search/song/index.htm?startIndex=1&pageSize=50&sort=hit&section=all&sectionId=&genreDir=&q=" + encodeURI(searchKey))
        .then(({data}) => {
            const $ = cheerio.load(data);
            const songInfos = $("tr td.t_left");
            var counter = 0;
            for (var i = 0; i < songInfos.length; i+=4) {
                // console.log(i);
                try {
                    const songTitle = songInfos[i].children[0].children[1].children[5].children[0].children[0].data.replace(" 상세정보 페이지 이동", "");
                    const artistId = songInfos[i].children[0].children[1].children[1].attribs.onclick.split("melon.play.playSong('")[1].split("',")[0].replace(");", "");
                    const artistName = songInfos[i].children[0].children[1].children[1].attribs.onclick.split(");melon.play.playSong('")[0].split("searchLog(")[1].split(",")[3].replace("'", "").replace("'", "");
                    const songId = songInfos[i].children[0].children[1].children[1].attribs.onclick.split("melon.play.playSong('")[1].split("',")[1].replace(");", "");
                    const albumId = songInfos[i+2].children[0].children[1].children[1].attribs.href.split("melon.link.goAlbumDetail('")[1].replace("');", "");
                    const albumTitle = songInfos[i+2].children[0].children[1].children[1].children[0].data;
                    // console.log(songTitle);
                    // console.log(artistId);
                    // console.log(songId);
                    // console.log(albumId);
                    // console.log(albumTitle);
                    // console.log(i);
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
                            linkConvert: "https://www.melon.com/song/detail.htm?songId=" + songId
                        }
                    })
                } catch(e) {
                    continue;
                }
            }
            

            // console.log(song);
            // console.log(song[0].albumLink);
            // console.log(song[0].songLink);
            resolve(song);
        })
        .catch((e) => {
            reject(e);
        })
    }) 
}

export default {
    searchMelon
}