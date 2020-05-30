const getPList = require("./melon/getPList");
const getListInfo = require("./melon/getListInfo");
const searchMelon = require("./melon/search");
const searchMelonN = require("./melonN");
const searchYt = require("./ytMusic/search");
const searchMedia = require("./justWatch/findMedia");

module.exports = {
    melon: {
        getPList,
        getListInfo,
        // searchMelon: searchMelon.default.searchMelon
        searchMelon: searchMelonN.title
    },
    ytMusic: {
        searchYt: searchYt.default.searchYTM
    },
    mediaSearch: {
        searchMedia: searchMedia.default.searchMVApi
    }
}