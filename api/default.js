import express from 'express';
import fs, { access } from "fs";
import path, { resolve } from "path";

const app = express.Router();

app.get('/img/:url', (req, res) => {
    console.log(path.join(__dirname, "../assets/" + req.params.url));
    const img = fs.readFileSync(path.join(__dirname, "../assets/" + req.params.url));
    res.end(img);
})
  
// /api/search -> disabled

// app.post('/search', (req, res) => {
//     const searchKeyword = req.body.searchKey;
//     searchYT(searchKeyword)
//     .then((result) => {
//         for (var i = 0; i < result.length; i++) {
//         if (!result[i].videoId) continue;
//         else {
//             const videoId = result[i].videoId.id;
//             axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId, {}, {
//             headers: {
//                 Authorization: "Bearer " + ""
//             }
//             })
//         }
//         }
//         res.json(result);
//     })
// })

// /api/dataRDY -> disabled

// app.post('/dataRDY', (req, res) => {
//     const vid = req.body.vid;

//     async.waterfall([
//         (callback) => {
//         sqlFnc.Read('rdy', "*", {
//             vid
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         }
//     ])
// })



module.exports = app;

