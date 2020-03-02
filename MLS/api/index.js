import express from 'express';
import { getPList, getListInfo } from "../../modules";
import crypto from 'crypto';
import axios from "axios";
import fs from "fs";
import path from "path";

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

function setHeader(method, url) {
  var space = " ";				// one space
  var newLine = "\n";				// new line 
  // var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, NCP_API.secretKey);

  console.log(method);
  console.log(url);

  var hmac = crypto.createHmac('sha256', NCP_API.secretKey);
  hmac.write(method);
  hmac.write(space);
  hmac.write(url);
  hmac.write(newLine);
  hmac.write(Date.now() + "");
  hmac.write(newLine);
  hmac.write(NCP_API.accKeyId);
  hmac.end();

  const signature = hmac.read().toString("base64");
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "x-ncp-apigw-timestamp": Date.now(),
    "x-ncp-iam-access-key": NCP_API.accKeyId,
    "x-ncp-apigw-signature-v2": signature
  }
  return headers;
}

/*
* Naver Cloud Platform API Information
*/





app.get('/', (req, res) => {
    console.log("This is api");
    res.end("HI");
})

let authArray = [];
authArray.push({pn: "01000000000", code: "0000"});

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

app.post('/AuthComplete', (req, res) => {
  req.session.isAuthorized = true;
  res.end("true");
})



export default {
    path: "/api",
    handler: app
}