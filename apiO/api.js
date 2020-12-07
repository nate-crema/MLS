import express from 'express';
import {ytMusic} from "../modules_Base";
const searchYT = ytMusic.search.searchYt;
import crypto from 'crypto';
import axios from "axios";
import fs, { access } from "fs";
import path, { resolve } from "path";
import util from '../util';
import async, { reject } from 'async';
import https from 'https';
import ytdl from 'ytdl-core';
import nodeCache from 'node-cache';
import sqlFnc from '../modules_Base/mysqlFnc';
import getKTOP100MELON from '../modules_Base/getTopChart/index';
const user = require("../models/user");
const mongoose = require("mongoose");

// mongodb connection

// mongoose.connect('mongodb://BaseMusicAPI:123BaseMusicAPISERVER@183.101.91.237:50337/admin', {
mongoose.connect('mongodb://183.101.91.237:50337/BaseMusic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})


var db = mongoose.connection;
db.on('error', function () { 
  console.error("Not connected");
});
db.once('open', function() {
  console.log("Database connected!!")
});

// console.log(this.mongoose);

// Create express router
const app = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()

app.use((req, res, next) => {
  // console.log(req.url);
  Object.setPrototypeOf(req, express().request)
  Object.setPrototypeOf(res, express().response)
  req.res = res
  res.req = req
  next();
})

/*
* Naver Cloud Platform API Information
*/

const NCP_API = JSON.parse(fs.readFileSync(path.join(__dirname, "/../security/NCPAuth.json"), { encoding: "UTF-8" }));
// console.log(typeof NCP_API);

/*
* Naver Cloud Platform API Information
*/



app.get('/', (req, res) => {
    console.log("This is api");
    res.end("HI");
})

// test account add when server start
let authArray = [];
authArray.push({ pn: "01000000000", code: "0000", SndBnyCode: "0000뷁" });
// test account: end

app.post('/sms', (req, res) => {
  console.log(req.body);
  if (!req.body.to) res.end("false");
  else {
    sqlFnc.Read('user', "pn", {pn: req.body.to})
    .then((result) => {
      if (result.length != 0) {
        res.status(200);
        res.end("duplicate");
      } else {
        if (!req.body.code) {
          const method = "POST", url = "https://api-sens.ncloud.com/v1/sms/services/" + NCP_API.serviceId + "/messages";
          var authCode = Math.floor(Math.random()*(9999-1000+1)) + 1000;
    
          axios.post(url, {
            "type":"SMS",
            "contentType":"COMM",
            "from":"01052720204",
            "to":[
                req.body.to
            ],
            "content":"[Base] 인증번호: " + authCode
          }, {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "x-ncp-auth-key": NCP_API.accKeyId,
              "x-ncp-service-secret":  NCP_API.serviceSecret
            }
          })
          .then(({data}) => {
            // console.log(data);
            authArray.push({pn: req.body.to, code: authCode});
            res.end("true");
          })
          .catch((e) => {
            console.log(e);
            res.end("false");
          })
        } else {
          authArray.forEach(element => {
            if (element.pn == req.body.to && element.code == req.body.code) {
              req.session.userInfo = {
                pn: req.body.to
              };
              return res.end("true");
            }
          })
          return res.end("false");
        }
      }
    })
    .catch((e) => {
      console.error(e);
      res.status(500);
      res.end("ERR: READ FROM SERVER");
    })
  }
})

function login(req, res) { 
  let check = "false";
  if (!req.body.pn) return res.status(400).end("Bad Request");
  if (!req.body.SndBnyCode) {
    user.find({
      pn: req.body.pn
    }, (err, lists) => {
      if (err) {
        console.log("ERR: " + err);
        res.status(500).end("Internal Server Error");
      }
      if (lists.length >= 1) return res.status(200).end("true");
      else return res.status(200).end("false");
    });
  } else {
    if (typeof req.body.SndBnyCode != "string") return res.status(400).end("false")
    else user.find({
      pn: req.body.pn
    }, (err, lists) => {
      if (err) {
        console.log("ERR: " + err);
        res.status(500).end("Internal Server Error");
      }
      lists.forEach((element, index) => {
        crypto.pbkdf2(req.body.SndBnyCode, element.salt.toString('base64'), 78608, 100, 'sha512', (err, key) => {
          console.log(key.toString("base64"));
          console.log(element.enccode);
          if (key.toString("base64") == element.enccode) {
            check = index;
          }
          console.log(`${index} / ${lists.length-1}`);
          if (index == lists.length - 1) {
            console.log("Login Process Complete");
            // set session if check == true
            if (check != "false") {
              req.session.userInfo = lists[check];
              if (req.body.allNeed) {
                return res.status(200).json(lists[check]);
              } else {
                check = "true";
                return res.status(200).end(check);
              }
            } else {
              return res.status(200).end("false");
            }
          }
        });
      })
    })
  }
}

function logout(req, res) {
  req.session.destroy(function () {
    req.session
  });
  return res.status(200).end("true");
}

function auth(req, res) {
  try {
    console.log(req.body);
    req.session.userInfo = {};
    req.session.userInfo.pn = req.body.pn;
    console.log("req.session.userInfo");
    console.log(JSON.stringify(req.session.userInfo));
    res.end("true");
  } catch(e) {
    console.error(e);
    res.status(400);
    res.end("false");
  }
}

function register(req, res) {
  console.log("serdtgr");
  let encpw = "";
  console.log(`register: prev session: ${req.session.userInfo}`);

  const id = util.getUid(20);
  const pn = req.session.userInfo.pn;
  
  crypto.randomBytes(64, (err, buf) => {
    crypto.pbkdf2(req.body.passwd, buf.toString('base64'), 78608, 100, 'sha512', (err, key) => {
      encpw = key.toString('base64');
      // console.log(encpw);
      try {
        const newUser = new user({
          pn,
          enccode: encpw,
          cusId: id,
          salt: buf.toString('base64')
        });

        newUser.save()
          .then((result) => {
            req.session.userInfo = {
              pn,
              cusId: id
            };
            // console.log(req.session.userInfo);
            res.status(200).json({
              pn,
              cusId: id
            });
        })
      } catch (e) {
        console.error("SERVER ERROR");
        console.error(e);
        res.status(4000).end("ERROR");
      }
    });
  });
}

app.post('/login', login);

app.post('/logout', logout);

app.post('/authed', auth);

app.post('/register', register);

// /logined: disabled
// app.post('/logined', (req, res) => {
//   req.session.userInfo = req.body;
//   res.end("true");
// }) 

app.post('/sess/userInfoAdd', (req, res) => {
  const data = req.body.dataO;
  if (typeof data != "object" || req.session.userInfo.pn == undefined) return res.status(400).end("Bad Request");
  // security info change defense
  const cngInfos = Object.keys(data);
  if (cngInfos.includes("isUpdateable") || cngInfos.includes("cusId")) return res.status(400).end("Bad Request");

  async.waterfall([
    (callback) => {
      // insert information
      for (const cngInfo of cngInfos) {
        req.session.userInfo[cngInfo] = data[cngInfo];
        console.log(cngInfos.indexOf(cngInfo));
        if (cngInfos.length-1 == cngInfos.indexOf(cngInfo)) callback(null, req.session.userInfo);
      }
    },
    (session, callback) => {
      user.update({
        pn: req.session.userInfo.pn
      }, session)
        .then((result) => {
          callback(null, "true");
        })
        .catch((e) => {
          callback(e);
      })
    }
  ], function(err, result) {
    if (err) {
      console.error("err");
      console.error(err);
      return res.status(500).end("Internal Server Error");
    }
    return res.status(200).end();
  });

});

app.get('/img/:url', (req, res) => {
  console.log(path.join(__dirname, "../assets/" + req.params.url));
  const img = fs.readFileSync(path.join(__dirname, "../assets/" + req.params.url));
  res.end(img);
})

// app.post('/search', (req, res) => {
//   const searchKeyword = req.body.searchKey;
//   searchYT(searchKeyword)
//   .then((result) => {
//     for (var i = 0; i < result.length; i++) {
//       if (!result[i].videoId) continue;
//       else {
//         const videoId = result[i].videoId.id;
//         axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId, {}, {
//           headers: {
//             Authorization: "Bearer " + ""
//           }
//         })
//       }
//     }
//     res.json(result);
//   })
// })

// app.post('/dataRDY', (req, res) => {
//   const vid = req.body.vid;

//   async.waterfall([
//     (callback) => {
//       sqlFnc.Read('rdy', "*", {
//         vid
//       })
//       .then((data) => {
//           console.log(data);
//       })
//     }
//   ])
// })


// song Information get

const getSongDetail = function (req, res, next) {
  const songId = req.body.songId;
  // console.log(songId);
  if (!songId) return res.status(400).end("ERR: Bad Request");
  if (!req.session.userInfo.cusId) return res.status(401).end("Unauthorized");
  
  // check validation
  if (songId.substr(0, 4) != "Base") return res.status(400).end("ERR: Bad Request");
  sqlFnc.Read("melonRes", "*", { songIdB: songId })
    .then((data) => {
      // console.log(data);
      let songDetailData = data[0];
      songDetailData.melonRes = null;
      songDetailData.melonResNum = null;

      // download songCover
      if (songDetailData.songImg) {
        const imageFile = path.join(__dirname, "../static/Cache/image/", `${songDetailData.songIdB}.jpg`);
        const urlImageFile = path.join("/Cache/image/", `${songDetailData.songIdB}.jpg`);
        const file = fs.createWriteStream(imageFile);
        const request = https.get(songDetailData.songImg, function(response) {
          response.pipe(file);
          songDetailData.songImg = urlImageFile;
        });
      }

      // get lyrics

      if (songDetailData.lyricsId) {
        getLyrics(songDetailData.lyricsId)
          .then((lyricsObj) => {
            songDetailData.lyrics = lyricsObj;
            // res.json(songDetailData);
            req.songDetailData = songDetailData;
            next();
        })
      } else {
        // res.json(songDetailData);
        req.songDetailData = songDetailData;
        next();
      }
    })
  
}


function getLyrics(lyricsId) {
  return new Promise((resolve, reject) => {
    sqlFnc.Read("lyrics", "*", { lyricsId })
      .then((data) => {
        const lyrics = data[0];
        let lyricsObj = [];
        lyrics.lyrics.split("| & |").forEach((value, index) => {
          lyricsObj.push({
            time: index == 0 ? lyrics.timestamps.split("| & |")[index] : lyrics.timestamps.split("| & |")[index].substr(1),
            text: index == 0 ? value : value.substr(1)
          })
          if (index == lyrics.lyrics.split("| & |").length - 1) {
            // lyricsObj.sort((a, b) => a - b);
            setTimeout(() => {
              // console.log(lyricsObj);
              resolve(lyricsObj);
            }, 200);
          }
        })
        // lyricsObj.sort({ time: -1 })
    })
  })
}

app.post('/song/detail', getSongDetail, (req, res) => {
  return res.json(req.songDetailData);
});

app.post('/song/record', (req, res) => {
  const { cusId } = req.body;
  if (!cusId) return res.status(400).end("Bad Request");
  let resData = [];
  sqlFnc.Read("playLog", "*", {cusId: req.session.userInfo.cusId})
    .then((data) => {
      res.status(200).json({data});
    })
    .catch((e) => {
      console.error(e);
      res.status(500).end("Internal Server Error");
  })
})


// playlist Information get

const getSongInfo = function (songIdB) {
  return new Promise((resolve, reject) => {
    sqlFnc.Read("melonRes", "*", { songIdB })
      .then((searchRes) => {
        let resobj = searchRes;
        if (searchRes.lyricsId != null) {
          getLyrics(lyricsId)
            .then((data) => {
              resobj.lyrics = data;
            });
        }
        resolve(searchRes);
      })
      .catch((e) => {
        reject(e);
    })
  })
}

app.post('/playlist/detail', (req, res) => {
  const { plistId, cusId } = req.body;
  if (!plistId || !cusId) return res.status(400).end("Bad Request");

  if (plistId == "ytRecommend") {
    // not ready
  } else if (plistId == "top100") {
    getKTOP100MELON.getKTOP100MELON()
      .then((data) => {
        res.status(200).json({
          title: `TOP100 차트 (업데이트: ${new Date().getHours()}시)`,
          contentsData: data
        });
    })
  } else {
    sqlFnc.Read("playlist", "*", { plistId })
      .then((searchRes) => {
        if (searchRes.length == 0) return res.status(404).end("Not Found");
        let playlist = searchRes[0];
        playlist.contentsData = [];
        playlist.plistCont.forEach((val, ind) => {
          getSongInfo(val)
            .then((data) => {
              playlist.contentsData.push(data);
              if (ind == playlist.plistCont.lenght - 1) {
                res.status(200).json(playlist);
              }
            })
            .catch((e) => {
              console.error(e);
              res.status(500).end("Internal Server Error");
            })
        })
      })
      .catch((e) => {
        console.error(e);
        return res.status(500).end("Internal Server Error");
      })
  } 
})




 
// song play Information get

app.post('/play/songInfo', getSongDetail, (req, res) => {
  const searchedObj = req.songDetailData;
  // console.log(req.songDetailData);
  
  const { songTitle, artist, ytSyncId, songImg } = searchedObj;

  let searchSTDArtist = "";
  let isparantheseOpenA = false;
  artist.split("").forEach((val, idx) => {
    if (val == "(") {
      isparantheseOpenA = true;
    } else if (val == ")") {
      isparantheseOpenA = false;
    } else if (!isparantheseOpenA) searchSTDArtist += val;
  })
  
  let searchSTDTitle = "";
  let isparantheseOpenB = false;
  songTitle.split("").forEach((val, idx) => {
    if (val == "(") {
      isparantheseOpenB = true;
    } else if (val == ")") {
      isparantheseOpenB = false;
    } else if (!isparantheseOpenB) searchSTDTitle += val;
  })
  console.log(`search: "${searchSTDTitle}" ${searchSTDArtist}`);
  searchYT(`"${searchSTDTitle}" ${searchSTDArtist}`)
  .then((ytResult) => {
    console.log(`Search Requested: YTM`);
    // console.log(ytResult);
    if (ytResult.songObjs.length > 0) {
      // console.log(ytResult.songObjs);
      let searchedSong;
      let resJson = searchedObj;
      if (ytSyncId == null) {
        console.log(`correspond ytMusic musics: ${ytResult.songObjs.length}`);
        // find same song from yt music api
        fs.appendFileSync("fuckPS.json", JSON.stringify(ytResult));
        searchedSong = ytResult.songObjs.find(songobjIndiv => {
          // instrumental distinguition
          let indivTitle = songobjIndiv.song.title.replace(/\s/gi, "");
          let isparantheseOpen = false;
          indivTitle.split("").forEach((val, idx) => {

            if (val == "(") {
              let feat = indivTitle[idx + 1] + indivTitle[idx + 2] + indivTitle[idx + 3] + indivTitle[idx + 4];
              if (feat.toLowerCase != "feat") isparantheseOpen = idx;
            } else if (val == ")") {
              if (isparantheseOpen) {
                let eraseSTR = indivTitle.substr(isparantheseOpen, idx - isparantheseOpen + 1);
                indivTitle.split(eraseSTR, "");
              }
            }
          })
          const stdTitle = songTitle.replace(/\s/gi, "");
          console.log(`songTitle: ${indivTitle}`);
          if (indivTitle.includes(stdTitle)) {
            if (
              (
                stdTitle.includes("inst") ||
                stdTitle.includes("Inst") ||
                stdTitle.includes("Inst.") ||
                stdTitle.includes("inst.") ||
                stdTitle.includes("instrumental")
              ) && (
                stdTitle.includes("inst") ||
                stdTitle.includes("Inst") ||
                stdTitle.includes("inst.") ||
                stdTitle.includes("Inst") ||
                stdTitle.includes("instrumental")
              )
            ) {
              return indivTitle.includes(stdTitle);
            } else if (
              !(
                stdTitle.includes("inst") ||
                stdTitle.includes("Inst") ||
                stdTitle.includes("Inst.") ||
                stdTitle.includes("inst.") ||
                stdTitle.includes("instrumental")
              ) && !(
                stdTitle.includes("inst") ||
                stdTitle.includes("Inst") ||
                stdTitle.includes("inst.") ||
                stdTitle.includes("Inst") ||
                stdTitle.includes("instrumental")
              )
            ) return indivTitle.includes(stdTitle);
            else {
              console.log("ERR: Both are not included");
            }
          }
        })
        if (searchedSong == undefined) {
          console.log("No match Found: Replace alternatives");
          searchedSong = ytResult.songObjs[0];
        }
        // console.log(searchedSong);
        resJson.serviceSearchKey = `"${searchSTDTitle}" ${searchSTDArtist}`;
        resJson.ytInfo = searchedSong;
      } else {
        resJson.ytInfo = {};
      }
      ytdl(ytSyncId != null ? ytSyncId : searchedSong.song.videoId)
      .on('info', (info, format) => {
        if (ytSyncId == null) sqlFnc.Update("melonRes", { songIdB: searchedObj.songIdB }, { ytSyncId: searchedSong.song.videoId });
        console.log(format);
        resJson.ytInfo.setData = format;
        console.log(resJson);


        // song play logging
        console.log("logging songPlay");
        sqlFnc.Insert("playLog", {
          cusId: req.session.userInfo.cusId,
          location: undefined,
          playArch: req.body.reqService,
          ip: req.ip,
          songId: req.body.songId,
          songTitle,
          artist,
          ytSyncId: ytSyncId != null ? ytSyncId : searchedSong.song.videoId,
          songImg
        }, (err, result) => {
            if (err) {
              console.error(e);
              return res.status(500).end("Internal Server ERROR");
            }
            // console.log(result);
            res.status(200).json(resJson);
        })
      })
      .pipe(fs.createWriteStream(path.join(__dirname, `../static/Cache/music/${req.songDetailData.songIdB}.mp4`)));
    } else return res.status(404).end("Not Ready");
    // searchComplete("yt", ytResult, primaryKeyYT, null);
  })
  .catch((e) => {
      console.log(`Error Occured: ytm`);
      console.error(e);
      // searchComplete("yt", null, null, e);
  })
})


// save music

const serviceCache = new nodeCache({
  stdTTL: 0,
  checkperiod: 600
});

function saveSongBrowser(req, res, next) {
  const { songIds } = req.body;
  serviceCache.get('song', (err, value) => {
    if (err) return res.status(404).end();
    if (value.length > 100) res.status(403).end("ERR: Too many musics already saved");
    songIds.forEach((songId, index) => {
      sqlFnc.Read("melonRes", { songIdB: songId })
        .then((data) => {
          if (!data) 
          serviceCache.set('song', )
      })
    })
  })
}

app.post('/save/songData', saveSongBrowser, (req, res) => {

})






// youtube sync

app.post('/yt/setToken', (req, res) => {

  const accessData = fs.readFileSync(path.join(__dirname, '../', "/security/client_secret_715508690086-7s72uojr6hjbo9toco148h06h0odsrld.apps.googleusercontent.com.json"));
  const google_cliid = accessData.web.client_id;
  const google_clisecret = accessData.web.client_secret;


  const reqlink = "https://oauth2.googleapis.com/token?code=" + code_query + "&client_id=" + google_cliid + "&client_secret=" +  google_clisecret + "&redirect_uri=http://localhost:3000/yt/setTokenReq&grant_type=authorization_code";
  const reqlinkB = "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube&access_type=offline&include_granted_scopes=true&redirect_uri=http://localhost:3000/yt/setTokenReq&response_type=code&client_id=" + google_cliid
})

app.post('/yt/setToken/redirect', (req, res) => {
  let accessData = JSON.parse(fs.readFileSync(path.join(__dirname, '../', "/security/client_secret_715508690086-7s72uojr6hjbo9toco148h06h0odsrld.apps.googleusercontent.com.json"), {encoding: "UTF-8"}));
  accessData.web.client_secret = "**********";
  console.log(accessData);
  res.json(accessData);
})

app.get('/yt/setTokenReq', (req, res) => {

  const query = req._parsedUrl.query.split("&");
  console.log(query);
  const queryObj = {};
  query.forEach((element) => {
    queryObj[element.split('=')[0]] = element.split('=')[1];
  })

  const userInfo = req.session.userInfo;
  console.log(userInfo);

  if (queryObj.code) {
    // sqlFnc.Update('user', {pn: userInfo.pn}, {codeG: queryObj.code})
    user.update({
      pn: userInfo.pn
    }, {
        codeG: queryObj.code,
        isUpdateable: 0
    })
    .then((updateResult) => {
      console.log("complete")
    })
    .catch((e) => {
      console.error(e);
    })
  }

  res.end(`<html><script>location.href="/";</script></html>`);
})



export default {
    path: "/api",
    handler: app
}