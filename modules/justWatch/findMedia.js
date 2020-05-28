const justWatch = require("justwatch-api");
String.prototype.replaceAll = function(origin, replace) {
    return this.split(origin).join(replace);
}
String.prototype.isContSame = function(input) {
    const stringData = this;
    const possibility = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", " ", "+", ",", ".", "<", ">", "/", "?", ":", ";", "\"", "\'", "{", "[", "]", "}", "\\", "|", "[", "]"];
    let result = "false";
    // console.log(stringData);
    possibility.forEach(element => {
        let checker = stringData;
        let comparer = input;
        if (checker.includes(element)) checker.replaceAll(element, "");
        if (comparer.includes(element)) comparer.replaceAll(element, "");
        if (checker == comparer) {
            console.log("true");
            result = "true";
        } else {
            console.log("false");
        }
    })
    console.log(result)
    return result;
}

function searchMVApi(searchQuery) {
    return new Promise((resolve, reject) => {
        console.log("searchMVApi");
        const jw = new justWatch({locale: "ko_KR"});

        jw.search(searchQuery)
        .then((data) => {
            console.log(data);
            // console.log(searchQuery);
            const searchRes = data.items;
            const resolveObj = [];
            if (searchRes.length == 0) resolve(resolveObj);
            searchRes.forEach((element, index) => {
                // console.log(element.title);
                if (searchQuery.isContSame(element.title)) {
                    resolveObj.push(element);
                }
                console.log(searchRes.length - 1);
                console.log(index);
                if (index == searchRes.length-1) resolve(resolveObj);
            })
        })
        .catch((e) => {
            reject(e);
        })
    })
}

// searchMVApi("어벤져스: 에이지 오브 울트론");

export default {
    searchMVApi
}