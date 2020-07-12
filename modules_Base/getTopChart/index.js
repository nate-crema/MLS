import { resolve } from "path";

const axios = require("axios");
const cheerio = require("cheerio");

let result = [];


function discardText(cheerioObj, isTextReturn, rank, fncNum) { 
    // // console.log(`discardTextFnc: num(${rank} / ${fncNum})`);
    if (cheerioObj.type == "text") {
        // if (!isTextReturn) return;
        // else return cheerioObj.data;
        if (!cheerioObj.data.includes("\n")) {
            // if (cheerioObj.data.slice(-3) != "곡정보" && cheerioObj.data.slice(-2) != "재생")
            // console.log(cheerioObj.data);
        }
    }
    else if (cheerioObj.type == "tag") {
        // // console.log("no children found");
        if (cheerioObj.name == "td") {
            if (cheerioObj.children.length > 0) {
                for (var i = 0; i < cheerioObj.children.length; i++) {
                    discardText(cheerioObj.children[i], false, rank, fncNum+1);
                }
            } else {
                // // console.log(cheerioObj.attribs);
                // console.log("end: td");
            }
        } else if (cheerioObj.name == "div" || cheerioObj.name == "span") {
            if (cheerioObj.children.length > 0) {
                for (var i = 0; i < cheerioObj.children.length; i++) {
                    discardText(cheerioObj.children[i], false, rank, fncNum+1);
                }
            } else {
                // // console.log(cheerioObj.attribs);
                // console.log(`end: ${cheerioObj.name}`);
            }
        } else if (cheerioObj.name == "a") { 
            if (cheerioObj.children.length > 0) {
                for (var i = 0; i < cheerioObj.children.length; i++) {
                    if (cheerioObj.children[i].type == "tag" && cheerioObj.children[i].name == "img") {
                        discardText(cheerioObj.children[i], false, rank, fncNum + 1);
                    } else continue;
                }
            }

            // console.log(`aEnd: |rank${rank}|`);
            
            // console.log(cheerioObj.attribs);
            if (cheerioObj.attribs.href) {
                if (cheerioObj.attribs.href.includes("AlbumDetail")) {
                    if (result[rank-1] == undefined) result[rank-1] = {rank};
                    result[rank-1].albumId = cheerioObj.attribs.href.split("AlbumDetail")[1].replace("(\'","").replace("');","");
                } else if (cheerioObj.attribs.href.includes("SongDetail")) {
                    if (result[rank-1] == undefined) result[rank-1] = {rank};
                    result[rank-1].songId = cheerioObj.attribs.href.split("SongDetail")[1].replace("(\'","").replace("');","");
                } else if ( cheerioObj.attribs.href.includes("javascript:melon.play.playSong") && cheerioObj.attribs.title.slice(-3) == " 재생") {
                    result[rank-1].songTitle = cheerioObj.attribs.title.replace("재생", "");
                    // else result[rank-1].artist = cheerioObj.attribs.title.replace(" - 페이지 이동", "");
                }
            }
            
        } else if (cheerioObj.name == "img") {
            // console.log(`imgEnd: |rank${rank}|`);
            // console.log(cheerioObj.attribs);
            if (result[rank-1] == undefined) result[rank-1] = {rank};
            result[rank-1].songImg = cheerioObj.attribs.src;
        } else {
            // console.log(`option not found: ${cheerioObj.name}`);
        }
    }
}


// getKTOP100MELON();

function getKTOP100MELON() {
    return new Promise((resolve, reject) => {
        // console.log("getTOP100Chart: MELON");
        axios.get("https://www.melon.com/chart/index.htm")
        .then(({ data }) => {
            const $ = cheerio.load(data);
            const topTable = $("tr");
            // // console.log(topTable[1]);
            // // console.log(Object.keys(topTable));
            for (var i = 0; i < topTable.length; i++) {
                const tableCont = topTable[i];
                // first: ignore (because it's table's head!)
                if (i == 0) continue;
                else {
                    let songSpecCnt = 0;
                    try {
                        for (const childObj of tableCont.children) {
                            discardText(childObj, false, i, 0);
                            setTimeout(() => {
                                resolve(result);
                            }, 1500);
                        }
                    } catch (e) {
                        reject(e);
                    }
                }
            }
        })
    })
}


// setTimeout(() => {
//     // console.log(result);
// }, 2000);


// export default {
//     getKTOP100MELON
// }

module.exports.getKTOP100MELON = getKTOP100MELON;