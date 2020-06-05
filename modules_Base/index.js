const getPList = require("./melon/getPList");
const getListInfo = require("./melon/getListInfo");
const searchMelonN = require("./melonN");
const searchYt = require("./ytMusic/search");
const searchMedia = require("./justWatch/findMedia");

module.exports = {
    melon: {
        playlist: {
            getPList,
            getListInfo
        },
        search: {
            title: searchMelonN.title
        }
    },
    youtube: {
        search: {

        }
    },
    ytMusic: {
        playlist: {
            
        },
        search: {
            searchYt: searchYt.default.searchYTM
        }
    },
    mediaSearch: {
        searchMedia: searchMedia.default.searchMVApi
    }
}