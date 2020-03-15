import express from 'express';
import { melon, ytMusic } from "../../modules";
const getPList = melon.getPList;
const getListInfo = melon.getListInfo;
const searchYT = ytMusic.search;
import crypto from 'crypto';
import axios from "axios";
import fs from "fs";
import path from "path";
import mysql from "mysql";

// Create express router
const app = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()

app.use((req, res, next) => {
  Object.setPrototypeOf(req, express().request)
  Object.setPrototypeOf(res, express().response)
  req.res = res
  res.req = req
  next()
})

/*
* Naver Cloud Platform API Information
*/

const NCP_API = JSON.parse(fs.readFileSync(path.join(__dirname, "/../NCPAuth.json"), { encoding: "UTF-8" }));
console.log(typeof NCP_API);

/*
* Naver Cloud Platform API Information
*/





app.get('/', (req, res) => {
    console.log("This is api");
    res.end("HI");
})

let authArray = [];
authArray.push({pn: "01000000000", code: "0000", SndBnyCode: "0000뷁"});

app.post('/sms', (req, res) => {
  console.log(req.body);
  if (!req.body.to) res.end("false");
  else {
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
        res.end("false");
      })
    } else {
      authArray.forEach(element => {
        if (element.pn == req.body.to && element.code == req.body.code) return res.end("true");
      })
      return res.end("false");
    }
  }
})

app.post('/login', (req, res) => {
  let check = "false";
  if (!req.body.SndBnyCode) {
    authArray.every((value) => {
      console.log(value.pn);
      console.log(req.body.pn);
      if (req.body.pn == value.pn) check = "true";
    })
    res.end(check);
  } else {
    console.log("Login Request");
    authArray.every((value) => {
      console.log(value.pn);
      console.log(req.body.pn);
      if (req.body.pn == value.pn && req.body.SndBnyCode == value.SndBnyCode) check = "true";
    })
    res.end(check);
  }
})

app.post('/AuthComplete', (req, res) => {
  req.session.isAuthorized = true;
  res.end("true");
})

app.post('/register', (req, res) => {
  // user authCode Register Process


  // set complete session
  req.session.isRegistered = true;
  res.end("true");
})

app.get('/img/:url', (req, res) => {
  console.log(path.join(__dirname, "../assets/" + req.params.url));
  const img = fs.readFileSync(path.join(__dirname, "../assets/" + req.params.url));
  res.end(img);
})

app.post('/search', (req, res) => {
  const searchKeyword = req.body.searchKey;
  searchYT(searchKeyword)
  .then((result) => {
    res.json(result);
  })
})



export default {
    path: "/api",
    handler: app
}