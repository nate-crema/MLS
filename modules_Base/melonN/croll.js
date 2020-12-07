const cheerio = require("cheerio");
const axios = require("axios");

const searchKey = "야생화";
axios.get(`https://www.melon.com/search/song/index.htm?q=${encodeURI(searchKey)}`)
    // `https://www.melon.com/search/song/index.htm?q=야생화#params[q]=${encodeURI(searchKey)}&params[sort]=hit&params[section]=all&params[sectionId]=&params[genreDir]=&po=pageObj&startIndex=51`
.then(({data}) => {
    const $songBasic = cheerio.load(data);
    const songTables = $songBasic("form#frm_defaultList tbody tr");
    songTables.forEach((songTable, index) => {
        dataGetter(songTable);
    })
})

let songTitle = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let songId = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let menuId = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let songImg = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let isLyricsEnd = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let lyrics = [];
let artist = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let artistId = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let artistImg = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let album = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let albumId = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let albumImg = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};
let resultNum = {
    dataInternal: "",
    dataListener: function(val) {},
    set data(val) {
        this.dataInternal = val;
        this.dataListener(val);
    },
    get data() {
        return this.dataInternal;
    },
    registerListener: function(listener) {
        this.dataListener = listener;
    }
};

function dataGetter(songTable, returnObj) {
    return Promise((resolve, reject) => {
        if (songTable.children && songTable.children.length >= 1) {
            // songTable.children.forEach((children) => {
            //     dataGetter(children);
            // })
        }
        switch (songTable.type) {
            case "tag":
                if (songTable.name == "tr") {
                    songTable.children.forEach((children) => {
                        // first checkbox: get songId
                        dataGetter(children);
                    })
                }
                if (songTable.name == "td") {
                    if (songTable.attribs.class.includes("no")) {
                        resultNum.data = songTable.children[0].children[0].data;
                    }
                    if (songTable.attribs.class.includes("t_left")) {
                        
                    }
                }
                if (songTable.name == "input") {
                    if (songTable.attribs.type == "checkbox") songId.data = songTable.attribs.value;
                }

                // if (songTable.name == "div")
                // if (songTable.name == "span")
                // if (songTable.name == "td")
                break;
        }
    })
}

