const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const ytdl = require("ytdl-core");


// axios.get("https://www.youtube.com/watch?v=euI-C1YONaU&list=OLAK5uy_l-q92A476g8X8juCjo5afAH1kEDwp-mW4")
// .then(({data}) => {
//     fs.writeFileSync(__dirname + "/ytdownloaded.html", data);
// })

let link = "";


// ytdl("https://www.youtube.com/watch?v=euI-C1YONaU&list=OLAK5uy_l-q92A476g8X8juCjo5afAH1kEDwp-mW4")
// ytdl.getInfo("http://www.youtube.com/watch?v=A02s8omM_hI")
ytdl.getInfo("NnRjwEhFU70", (err, info) => {
    console.log(info);
    fs.writeFileSync(__dirname + "/IU_nightLetter-video_info.json", JSON.stringify(info));
})

// ytdl.videoFormat("https://www.youtube.com/watch?v=NnRjwEhFU70", (err, info) => {
//     console.log(info);
//     fs.writeFileSync(__dirname + "/IU_nightLetter-video_info.json", JSON.stringify(info.formats.pop().signatureCipher.split("url=").pop()));
// })
    
// ytdl("https://www.youtube.com/watch?v=NnRjwEhFU70")
// ytdl("youtube.com/watch?v=Vw3x1QRCCJc")
// .on('info', (info, format) => {
//     // console.log(typeof info);
//     // console.log(typeof format);
//     // console.log(format);
//     // fs.writeFileSync(__dirname + "/IU_nightLetter-video_format.json", JSON.stringify(format));
//     // fs.writeFileSync(__dirname + "/IU_nightLetter-video_info.json", JSON.stringify(info));
//     // fs.writeFileSync(__dirname + "/IU_nightLetter-video_formats.json", info.player_response.streamingData.formats.toString());
//     // console.log("Download URL");
//     // console.log(format.url);
//     // console.log("\n\n Medium Quality Audio URL");
//     // console.log(info.player_response.streamingData);
//     let data = {};
//     const AUDIO_QUALITY_MEDIUM = info.player_response.streamingData.adaptiveFormats.filter((element) => {
//         // console.log(element);
//         if (element.audioQuality == "AUDIO_QUALITY_MEDIUM") {
//             if (Object.keys(data) == "0") link = element.url;
//             data[Object.keys(data).length] = element;
//             // console.log(element);
//         }
//     })
//     // console.log(AUDIO_QUALITY_MEDIUM);
//     fs.writeFileSync(__dirname + "/maroon5_video_audioMedium.json", JSON.stringify(data));
// })
// .on('progress', (chunk, downloaded, total) => {
//     // console.log(chunk);
//     // console.log(downloaded);
//     // console.log(Math.floor(downloaded/total*100));
// })
// .on('finish', () => {
//     // console.log(chunk);
//     // console.log(downloaded);
//     // console.log(total);
// })
// .pipe(fs.createWriteStream(__dirname + "/IU_NIGHTLETTER.mp4"));





// axios.get("https://r4---sn-3u-bh2ly.googlevideo.com/videoplayback?expire=1583067818&ei=Sl5bXsyoJ5DJgAP8nY3IBw&ip=183.101.93.222&id=o-AGjCLNBUacSi5LLSdo3N0Lr7LJ__6hx9AfEtTYFRotYK&itag=140&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-3u-bh2ly%2Csn-i3belnl7&ms=au%2Conr&mv=m&mvi=3&pl=17&gcr=kr&initcwndbps=1202500&vprv=1&mime=audio%2Fmp4&gir=yes&clen=3159223&dur=195.163&lmt=1579632544799818&mt=1583046149&fvip=4&keepalive=yes&fexp=23842630&c=WEB&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ABSNjpQwRAIgKwbKyyFAyUQwGJeq0Ylx8onMDg7Ig-s4h5Q1d93r45oCIGRjDpvA-yCgZ7pe9fnZvjAoJolnrnbN-xKO47D2UyAN&ratebypass=yes&sig=ADKhkGMwRAIgRKPCzGOIusCZx7ChULLeofXpGut-8TpcP4_BmWUB6qwCIAYahiNx-6Oh1llrFWRya3SAdQc-NNFGjSFxZcwkoUwU")
// .then(({data}) => {
//     // console.log(data);
//     fs.writeFileSync(__dirname + "/test.mp4", data);
// })
// .catch((e) => {
//     console.error(e);
// })