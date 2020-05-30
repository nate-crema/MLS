const levenshtein = require('fast-levenshtein');


function correctionizingAlgorithm(baseWS, compareArr) {
    base = baseWS.replace(/\s/gi, "");
    let distances = [];
    compareArr.forEach((element, index) => {
        const baseDistance = levenshtein.get(base, element);
        distances.push(distanceCorrectionizer(base, element));
    })
    distances.forEach((element, index) => {
        
    })
}

// base: https://m.blog.naver.com/PostView.nhn?blogId=rnjsrldnd123&logNo=221529438296&categoryNo=35
function distanceCorrectionizer(base, element) {
    const baseArr = base.split("");
    const elementArr = element.split("");
    let Csimilarity = 0; // 내용유사도
    let Isimilarity = 0; // 색인유사도
    let ISLD = [];
    let ISLDCounter = 0; // Index Similarity Diminish Counter
    // 문자가 포함되어있음 -> 내용유사도 1+
    // 문자가 포함되어있지 않음 -> 내용유사도 1-
    // 문자의 순서가 같음 -> 색인유사도 1+
    // 문자의 순서가 다름 -> 색인유사도 1-
    for (var i = 0; i < baseArr.length; i++) {
        let isInclude = element.includes(baseArr[i]);
        let isIndex = (elementArr[i] == baseArr[i]);
        isInclude ? Csimilarity++ : Csimilarity--;
        if (isIndex) {
            Isimilarity++;
        } else if (isInclude) {
            const interval = element.indexOf(baseArr[i])-i;
            ISLD.push(interval);
            Isimilarity--;
        }
    }
    if (ISLD.length != 0) ISLDCounter = Math.max.apply(null, ISLD);

    let isCorrect = false; // 완전히 일치
    let isSimilar = false; // 내용 전부 있고 색인유사도 +-1범위 만족
    let isFullContain = false; // 내용 전부 있고 색인유사도 +-1범위 불만족
    if (Csimilarity == base.length) isFullContain = true;
    if (Csimilarity == base.length && base.length+1 > Isimilarity && base.length-1 < Isimilarity) isSimilar = true;
    if (base == element) isCorrect = true;
    return {
        isCorrect,
        isSimilar,
        isFullContain,
        Csimilarity,
        Isimilarity,
        ISLD,
        ISLDCounter
    }
}


export default {
    correctionizingAlgorithm
}