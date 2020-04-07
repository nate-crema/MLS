const justWatch = require("justwatch-api");

function searchMVApi(searchQuery) {
    return new Promise((resolve, reject) => {
        const jw = new justWatch({locale: "ko_KR"});

        jw.search(searchQuery)
        .then((data) => {
            console.log(data);
            console.log(searchQuery);
            const searchRes = data.items;
            const resolveObj = [];
            searchRes.forEach((element, index) => {
                console.log(element.title);
                if (searchQuery == element.title) {
                    resolveObj.push(element);
                }
                if (index == searchRes.length-1) resolve(resolveObj);
            })
        })
        .catch((e) => {
            reject(e);
        })
    })
}

export default {
    searchMVApi
}