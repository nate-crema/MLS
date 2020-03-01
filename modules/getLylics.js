const axios = require("axios");

function getLylics(songId) {

    axios.get("https://www.melon.com/webplayer/getLyrics.json?songId=" + songId)
    .then(({data}) => {
        console.log(data)
        return data;
    })   
}

module.exports = (songId) => {
    if (typeof songId == "object") memberKey.forEach(songId => getLylics(songId));
    else if (typeof songId == "string") getLylics(songId*1);
    else if (typeof songId == "number") getLylics(songId);
}