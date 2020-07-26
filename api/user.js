import express from 'express';
import sqlFnc from '../modules_Base/mysqlFnc';
import crypto from 'crypto';
import axios from "axios";
import fs, { access } from "fs";
import path, { resolve } from "path";
import util from "../util";

const app = express.Router();


/*
* Naver Cloud Platform API Information
*/

const NCP_API = JSON.parse(fs.readFileSync(path.join(__dirname, "/../security/NCPAuth.json"), { encoding: "UTF-8" }));
// console.log(typeof NCP_API);

/*
* Naver Cloud Platform API Information
*/




// sms send function

function sendSMS(type, sendto, sendCont, reqEXP) {
    return new Promise((resolve, reject) => {
        const url = `https://api-sens.ncloud.com/v1/sms/services/${NCP_API.serviceId}/messages`;
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            "x-ncp-auth-key": NCP_API.accKeyId,
            "x-ncp-service-secret": NCP_API.serviceSecret
        };
        const sender = "01052720204";
        let body = {
            "type": "SMS",
            "contentType": "COMM",
            "from": sender,
            "to": [
                sendto
            ]
        };
        const smsPRIMARY = util.getUid(6, false);
        let authCode;
        let dbDATA = {
            type,
            pn: sendto,
            route: reqEXP.url,
            ip: reqEXP.ip,
            cont: body.content,
            smsPRIMARY
        };
        switch (type) {
            case "authorize":
                authCode = util.getUid(4, true);
                body.content = `[Base] 인증번호는 ${authCode} 입니다.`;
                dbDATA.authCode = authCode;
                break;
            case "warning":
            case "notice":
            default:
                body.content = `[Base] ${sendCont}`;
                break;
        };
    
        axios.post(url, body, { headers })
            .then((data) => {
                sqlFnc.Insert("sms", dbDATA, (err, result) => {
                        if (err) {
                            console.error("[SMS][ERR]: " + err);
                            reject(err);
                        }
                        else if (type != "authorize") resolve(true);
                        else resolve(authCode);
                })
            })
            .catch((e) => {
                console.error("[SMS][ERR]: " + e);
                reject(e);
        })
    })
}

function smsAuth(sendto, authCode, reqEXP) {
    return new Promise((resolve, reject) => {
        if (!authCode) {
            sendSMS("authorize", sendto, null, reqEXP)
                .then((data) => {
                    resolve(data);
                })
                .catch((e) => {
                    reject(e);
                });
        } else {
            sqlFnc.Read("sms", "*", { pn: sendto, smsPRIMARY: reqEXP.body.smsPRIMARY })
                .then((data) => {
                    console.log(`${JSON.stringify(data[0])} || ${authCode}`);
                    if (data[0].authCode == authCode) resolve(true);
                    else resolve(false);
                })
                .catch((e) => {
                    reject(e);
            })
        }
    })
}

function login(req, res) { 
    let check = "false";
    if (!req.body.pn) return res.status(400).end("Bad Request");
    if (!req.body.SndBnyCode) {
        sqlFnc.Read("user", "cusId", { pn: req.body.pn })
            .then((lists) => {
                if (lists.length >= 1) return res.status(200).end("true");
                else return res.status(200).end("false");
            })
            .catch((e) => {
                console.log(`ERR: ${e}`);
        })
    } else {
        if (typeof req.body.SndBnyCode != "string") return res.status(400).end("false")
        else sqlFnc.Read("user", "*", { pn: req.body.pn })
        .then((lists) => {
            lists.forEach((element, index) => {
                crypto.pbkdf2(req.body.SndBnyCode, element.salt.toString('base64'), 78608, 100, 'sha512', (err, key) => {
                    console.log(key.toString("base64"));
                    console.log(element.enccode);
                    if (key.toString("base64") == element.enccode) {
                        check = index;
                    }
                    console.log(`${index} / ${lists.length - 1}`);
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
        .catch((e) => {
            console.log("ERR: " + e);
            res.status(500).end("Internal Server Error");
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
// console.log("serdtgr");
let encpw = "";
console.log(`register: prev session: ${req.session.userInfo}`);

const id = util.getUid(20);
const pn = req.session.userInfo.pn;

crypto.randomBytes(64, (err, buf) => {
    crypto.pbkdf2(req.body.passwd, buf.toString('base64'), 78608, 100, 'sha512', (err, key) => {
    encpw = key.toString('base64');
    // console.log(encpw);
    try {
        sqlFnc.Insert('user', {
        pn,
        enccode: encpw,
        cusId: id,
        salt: buf.toString('base64')
        }, (err, result) => {
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
        res.status(500).end("Internal Server ERROR");
    }
    });
});
}

app.post('/sms', (req, res) => {
    sqlFnc.Read("user", "pn", {
        pn: req.body.to
    })
        .then((result) => {
            if (result.length != 0) return res.status(200).end("Duplicate");
            else if (!req.body.code) smsAuth(req.body.to, null, req)
                .then((code) => {
                    return res.status(200).end("true");
                })
                .catch((e) => {
                    console.error("ERR: /sms => " + e);
                    return res.status(500).end("false");
                })
            else smsAuth(req.body.to, req.body.code, req)
                .then((result) => {
                    return res.status(200).end(result.toString());
            })
        })
        .catch((e) => {
            console.error("ERR: /sms => " + e);
            return res.status(500).end("false");
    })
})

app.post('/login', login);

app.post('/logout', logout);

app.post('/authed', auth);

app.post('/register', register);

app.post('/logined', (req, res) => {
    req.session.userInfo = req.body;
    res.end("true");
});

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
            sqlFnc.Update("user", {
                cusId: req.session.userInfo.cusId
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


module.exports = app;