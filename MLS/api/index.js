import express from 'express';
import { melon, ytMusic } from "../../modules";
const getPList = melon.getPList;
const getListInfo = melon.getListInfo;
const searchYT = ytMusic.search;
import crypto from 'crypto';
import axios from "axios";
import fs, { access } from "fs";
import path from "path";
import mysql from "mysql";
import util from '../util';
import async from 'async';


// mysql functions

  const mysqlConnKEYINFO = JSON.parse(fs.readFileSync(path.join(__dirname, "../security/dbConnection.json"), {encoding: "UTF-8"}));
  console.log(mysqlConnKEYINFO);

  function mysql_query(q_comm) {
    
      const conn_mysql = mysql.createConnection(mysqlConnKEYINFO);

      conn_mysql.connect();

      return new Promise((resolve, reject) => {
          conn_mysql.query(q_comm, (err, rows, fields) => {
              if (err) reject("Query ERR: " + err);
              else resolve(rows);
          })
      })
  }

  const sqlFnc = {

    test: () => {
      mysql_query("show tables")
      .then((res) => {
          console.log(res);
          if (res.length != 0) {
              console.log("Connected to Mysql DB. Total table number is " + res.length);
          }
      })
      .catch((err) => {
          console.log(err);
      })
    },


    // const Insert = (table, data:{columns: Object, values: Object}, done) => {
    Insert: (table, data, done) => {
      let command = "INSERT INTO " + table + " (" + Object.keys(data).toString() + ")";
      console.log(Object.values(data));
      if (Object.values(data).length > 1) {
          command += " VALUES (";
          Object.values(data).forEach((element, index) => {
              command += (util.isNumber(element) ? element : "'" + element + "'");
              // console.log(index);
              index != Object.values(data).length-1 ? command += ", " : command += ");";
          });
      } else if (Object.values(data).length == 1) {
          // console.log("frd");
          command += " VALUES (" + (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "'" + Object.values(data)[0] + "'");
      } else return done(new Error("Unvalid Insert"));
      // console.log(command);
      mysql_query(command)
      .then((res_sql) => {
          return done(null, res_sql);
      })
      .catch((e) => {
          return done(e);
      })
    },

    // const Update = (table, base:{columns: Object, values: Object}, alter:{columns: Object, values: Object}, done) => {
    Update: (table, base, alter, done) => {
      let command = "UPDATE " + table;
      // console.log(typeof data.values);

      if (typeof alter.values == "object") {
          command += " SET ";
          alter.values.forEach((element, index) => {
              command += "" + alter.columns[index] + " = " + (util.isNumber(element) ? element : "'" + element + "'");
              index != alter.values.length-1 ? command += ", " : command += "";
          });
      } else if (alter.values != "" || !alter.values) {
          command += " SET " + alter.columns + " = " + (util.isNumber(alter.values) ? alter.values : "'" + alter.values + "'");
      }

      if (typeof base.values == "object") {
          command += " WHERE ";
          base.values.forEach((element, index) => {
              command += "" + base.columns[index] + " = " + (util.isNumber(element) ? element : "'" + element + "'");
              index != base.values.length-1 ? command += " AND " : command += ");";
          });
      } else if (base.values != "" || !base.values) {
          command += " WHERE " + "" + base.columns + " = " + (util.isNumber(base.values) ? base.values : "'"  + base.values + "'");
      }

      console.log(command);
      mysql_query(command)
      .then((res_sql) => {
          return done(null, res_sql);
      })
      .catch((e) => {
          return done(e);
      })
      
    },
    // const Alter = (type: String, table: String, column: String, data: String, done) => {
    Alter: (type, table, column, data, done) => {
    if (type == "add" || type == "modify") {
          if (!table || !column || !data) return done(new Error("Required variable not defined properly"))
          mysql_query("ALTER table " + table + " " + type + " " + column + " " + data)
          .then((res_sql) => {
              return done(null, true);
          })
          .catch((e) => {
              return done(e);
          })
      } else return done(new Error("Invalid type: " + type));
    },
    // const Read = (table: String, output: Object, filter: {columns: String, values: String}, done) => {
    Read: (table, output, filter, done) => {
      // console.log(table);
      // console.log(output);
      // console.log(filter);
      let command = "SELECT " + (!output ? "*" : output.toString()) + " FROM " + table;
      // console.log(command);
      if (Object.values(filter).length > 1) {
          command += " WHERE ";
          Object.keys(filter).forEach((element, index) => {
              command += element + "=" + (util.isNumber(Object.values(filter)[index]) ? Object.values(filter)[index] : "'" + Object.values(filter)[index] + "'");
              if (Object.keys(filter).indexOf(element) != Object.keys(filter).length-1) command += " AND ";
          });
      } else if (Object.values(filter).length == 1) {
          command += " WHERE " + Object.keys(filter)[0] + "=" + (util.isNumber(Object.values(filter)[0]) ? Object.values(filter)[0] : "'" + Object.values(filter)[0] + "'");
      }

      // console.log(command);

      mysql_query(command)
      .then((res_sql) => {
          // return done(null, res_sql.length == 1 ? res_sql[0] : res_sql);
          return done(null, res_sql);
      })
      .catch((e) => {
          return done(e);
      })
    },
    // const Delete = (table, filter: {columns: String, values: String}, done) => {
    Delete: (table, filter, done) => {
      mysql_query("DELETE FROM " + table + " WHERE " + filter.columns + " = " + filter.values)
      .then((res_sql) => {
          return done(null, true);
      })
      .catch((e) => {
          return done(e);
      })
    }   
  }

// mysql functions


// Create express router
const app = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()

app.use((req, res, next) => {
  Object.setPrototypeOf(req, express().request)
  Object.setPrototypeOf(res, express().response)
  req.res = res
  res.req = req
  next();
})

/*
* Naver Cloud Platform API Information
*/

const NCP_API = JSON.parse(fs.readFileSync(path.join(__dirname, "/../NCPAuth.json"), { encoding: "UTF-8" }));
// console.log(typeof NCP_API);

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

    sqlFnc.Read('user', "pn", {pn: req.body.to}, (err, result) => {
      console.log(result);
      if (err) {
        console.error(err);
        res.status(500);
        res.end("ERR: READ FROM SERVER");
      } else if (result.length != 0) {
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

app.post('/authed', (req, res) => {
  // req.session.isAuthorized = true;
  try {
    console.log(req.body);
    req.session.userInfo = {};
    req.session.userInfo.pn = req.body.pn;
    res.end("true");
  } catch(e) {
    console.error(e);
    res.status(400);
    res.end("false");
  }
})

app.post('/register', (req, res) => {
  // user authCode Register Process


  // set complete session
  // req.session.isRegistered = true;

  // console.log(req.body);
  // console.log(req.session.userInfo);
  
  let encpw = "";

  const id = util.getUid(20);
  const pn = req.session.userInfo.pn;
  
  crypto.randomBytes(64, (err, buf) => {
    crypto.pbkdf2(req.body.passwd, buf.toString('base64'), 7860803, 100, 'sha512', (err, key) => {
      encpw = key.toString('base64');
      // console.log(encpw);
      sqlFnc.Insert('user', {
        pn,
        enccode: encpw,
        id,
        salt: buf.toString('base64')
      }, (err, result) => {
        if (err) {
          console.error("SERVER ERROR");
          console.error(err);
          res.status(400);
          res.end("ERROR");
        } else {
          req.session.userInfo = {
            pn,
            id
          }
          console.log(req.session.userInfo);
          res.json({
            pn,
            id
          }); 
        }
      })
    });
  });
})

app.post('/logined', (req, res) => {
  req.session.userInfo = req.body;
  res.end("true");
})

app.post('/sess/userInfoAdd', (req, res) => {
  const data = req.body.dataO;
  console.log(data);
  if (typeof data != "object") {
    res.status(400);
    return res.end("false");
  }
  if (Object.keys(data).includes("id") || Object.keys(data).includes("isUpdateable")) {
    res.status(400);
    return res.end("Bad Request");
  }
  let sendJson = {};
  Object.keys(data).forEach((element, index) => {
    req.session.userInfo[element] = Object.values(data)[index];
    sendJson[element] = Object.values(data)[index];
  })
  async.waterfall([
    (callback) => {
      sqlFnc.Read("user", "isUpdateable", {pn: req.session.useInfo.id}, (err, result) => {
        console.log("-----READ_______");
        console.log(err);
        console.log(result);
        console.log("-----READ_______");
        callback(err, result)
      });
    },
    (err, isExt, callback) => {
      if (!err && isExt.length == 1) {
        if (isExt[0].isUpdateable + "" == "1") {
          sqlFnc.Update("user", {id: req.session.userInfo.id}, sendJson, (err, result) => {
            console.log("-----UPDATE_______");
            console.log(err);
            console.log(result);
            callback(err, result);
            console.log("-----UPDATE_______");
          })
        } else {
          callback(err);
        }
      } else {
        if (err) callback(err);
        else if (isExt.length != 1) callback(err, isExt);
      }
    }
  ], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500);
      return res.end(err);
    } else {
      return res.end("true");
    }
  })
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
    for (var i = 0; i < result.length; i++) {
      if (!result[i].videoId) continue;
      else {
        const videoId = result[i].videoId.id;
        axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId, {}, {
          headers: {
            Authorization: "Bearer " + ""
          }
        })
      }
    }
    res.json(result);
  })
})

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
    sqlFnc.Update('user', {pn: userInfo.pn}, {code: queryObj.code}, (err, res) => {
      if (err) console.error(err);
      console.log("complete");
    })
  }

  res.json({});
})



export default {
    path: "/api",
    handler: app
}