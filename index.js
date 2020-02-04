const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");


// axios.get("https://www.melon.com/mymusic/playlist/mymusicplaylistview_inform.htm?plylstSeq=459370411")
// .then(({data}) => {
//     // console.log(data);
//     fs.writeFile(__dirname + "/melon.html", data, (err) => {
//     });
//     const $ = cheerio.load(data);
// })

// test: 471369502

let song = [];

axios.get("https://www.melon.com/mymusic/playlist/mymusicplaylistview_listSong.htm?plylstSeq=471369502")
.then(({data}) => {
    const $ = cheerio.load(data);
    const playListTitle = $("tr td.t_left .fc_gray");
    const playListArtNAlb = $("tr td.t_left .fc_mgray");
    const playListLike = $("tr td.t_left .cnt");
    console.log(playListTitle);

    for (var i = 0; i < playListTitle.length; i++) {
        song.push({
            title: playListTitle[i].children[0].data,
            artist: playListArtNAlb[i*2].children[0].data,
            album: playListArtNAlb[i*2+1].children[0].data,
            albumLink: {
                melon: {
                    albumId: playListArtNAlb[i*2+1].attribs.href.split("('")[1].split("');")[0],
                    link: playListArtNAlb[i*2+1].attribs.href,
                    linkConvert: "https://www.melon.com/album/detail.htm?albumId=" + playListArtNAlb[i*2+1].attribs.href.split("('")[1].split("');")[0]
                }
            },
            songLink: {
                melon: {
                    menuId: playListTitle[i].attribs.href.split("('")[1].split("',")[0],
                    songId: playListTitle[i].attribs.href.split("(")[1].split(",")[1].replace(");", ""),
                    link: playListTitle[i].attribs.href,
                    linkConvert: "https://www.melon.com/song/detail.htm?songId=" + playListTitle[i].attribs.href.split("(")[1].split(",")[1].replace(");", "")
                }
            },
            like: {
                melon: playListLike[i].children[1].data
            }
        });
    }

    console.log(song);
})