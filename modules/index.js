const getPList = require("./melon/getPList");
const getListInfo = require("./melon/getListInfo");
const search = require("./ytMusic/search");

module.exports = {
    melon: {
        getPList,
        getListInfo
    },
    ytMusic: {
        search
    }
}