const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");


function getPList(memberKey) {
    axios.get("https://www.melon.com/mymusic/playlist/mymusicplaylist_list.htm?memberKey=" + memberKey)
    .then(({data}) => {
        // console.log(data);
        // fs.writeFile(__dirname + "/addPList.html", data, (err) => {});
        const $ = cheerio.load(data);

        let lists = [];

        const playLists = $("tbody tr");
        const listNames = $("tbody dt a");
        const makerNames = $("tbody .nicnmname a span");
        const imgCover = $("tbody img");
        const songNum = $("tbody .al_top .tl.dj_songlist .fc_strong");

        // console.log(listNames.text());
        // console.log(makerNames.text());
        // console.log(imgCover[0].attribs.src);
        // console.log(songNum.text());

        for (var i = 0; i < playLists.length; i++) {
            lists.push({
                listTitle: listNames[i].children[0].data,
                listWriter: makerNames[i].children[0].data,
                coverURL: imgCover[i].attribs.src,
                songNum: songNum[i].children[0].data.replace("수록곡 : 총 ", "").replace("곡", "")
            })
        }

        // console.log(lists);
        return lists;
        
        // for (var i = 0; i < playlists.length; i++) {
        //     lists.push({
        //         img: 
        //     })
        // }
    })
}


module.exports = (memberKey) => {
    if (typeof memberKey == "object") memberKey.forEach(memberKeyElem => getPList(memberKeyElem));
    else if (typeof memberKey == "string") getPList(memberKeyElem*1);
    else if (typeof memberKey == "number") getPList(memberKeyElem);
}