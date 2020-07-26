import express from 'express';
import {ytMusic} from "../modules_Base";
import fs, { access } from "fs";
import path, { resolve } from "path";
import sqlFnc from '../modules_Base/mysqlFnc';

const app = express.Router()


// youtube sync

app.post('/setToken', (req, res) => {

  const accessData = fs.readFileSync(path.join(__dirname, '../', "/security/client_secret_715508690086-7s72uojr6hjbo9toco148h06h0odsrld.apps.googleusercontent.com.json"));
  const google_cliid = accessData.web.client_id;
  const google_clisecret = accessData.web.client_secret;


  const reqlink = "https://oauth2.googleapis.com/token?code=" + code_query + "&client_id=" + google_cliid + "&client_secret=" +  google_clisecret + "&redirect_uri=http://localhost:3000/yt/setTokenReq&grant_type=authorization_code";
  const reqlinkB = "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube&access_type=offline&include_granted_scopes=true&redirect_uri=http://localhost:3000/yt/setTokenReq&response_type=code&client_id=" + google_cliid
})

app.post('/setToken/redirect', (req, res) => {
  let accessData = JSON.parse(fs.readFileSync(path.join(__dirname, '../', "/security/client_secret_715508690086-7s72uojr6hjbo9toco148h06h0odsrld.apps.googleusercontent.com.json"), {encoding: "UTF-8"}));
  accessData.web.client_secret = "**********";
  console.log(accessData);
  res.json(accessData);
})

app.get('/setTokenReq', (req, res) => {

  const query = req._parsedUrl.query.split("&");
  console.log(query);
  const queryObj = {};
  query.forEach((element) => {
    queryObj[element.split('=')[0]] = element.split('=')[1];
  })

  const userInfo = req.session.userInfo;
  console.log(userInfo);

  if (queryObj.code) {
    sqlFnc.Update('user', {pn: userInfo.pn}, {codeG: queryObj.code})
    .then((updateResult) => {
      console.log("complete")
    })
    .catch((e) => {
      console.error(e);
    })
  }

  res.end(`<html><script>location.href="/";</script></html>`);
})


module.exports = app;