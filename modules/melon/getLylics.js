const axios = require("axios");

function getlyrics(songId) {

    axios.get("https://www.melon.com/webplayer/getLyrics.json?songId=" + songId)
    .then(({data}) => {
        // console.log(data)
        return data;
    })   
}

module.exports = (songId) => {
    if (typeof songId == "object") memberKey.forEach(songId => getlyrics(songId));
    else if (typeof songId == "string") getlyrics(songId*1);
    else if (typeof songId == "number") getlyrics(songId);
}