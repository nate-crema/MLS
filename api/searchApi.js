import express from 'express';
import { melon, ytMusic, mediaSearch } from "../modules_Base";
const getPList = melon.getPList;
const getListInfo = melon.getListInfo;
const searchMelon = melon.search.title;
const searchYT = ytMusic.search.searchYt;
const searchMedia = mediaSearch.searchMedia;
import crypto from 'crypto';
import axios from "axios";
import fs, { access } from "fs";
import path from "path";
import mysql from "mysql";
import util from '../util';
import sqlFnc from '../modules_Base/mysqlFnc';
import async from 'async';
import { isUndefined } from 'util';
// import { RSA_NO_PADDING } from 'constants';
// import { callbackify } from 'util';
// import { STATUS_CODES } from 'http';

// run when server started first


// const speedTest = require('speedtest-net');
 
// (async () => {
//   try {
//     console.log(await speedTest());
//   } catch (err) {
//     console.log(err.message);
//   }
// })();


// run when server started first


// mysql functions

//   const mysqlConnKEYINFO = JSON.parse(fs.readFileSync(path.join(__dirname, "../security/dbConnection.json"), {encoding: "UTF-8"}));
// console.log(mysqlConnKEYINFO);

// const conn_mysql = mysql.createConnection(mysqlConnKEYINFO);
// conn_mysql.connect();

// function mysql_query(q_comm) {
//     //   console.log(isConnected);
// //   console.log(connSqlObj);
//     return new Promise((resolve, reject) => {
//         conn_mysql.query(q_comm, (err, rows, fields) => {
//         if (err) {
//                 reject("Query ERR: " + err);
//             } else {
//                 resolve(rows);
//             }
//         })
//     })
// }

// function emptyQuery() { 
//     conn_mysql.query("show databases");
//     setTimeout(() => {
//         console.log("empty query sent");
//         emptyQuery();
//     }, 1000000);
// }

// emptyQuery();

//   const sqlFnc = {

//     test: () => {
//       mysql_query("show tables")
//       .then((res) => {
//           console.log(res);
//           if (res.length != 0) {
//               console.log("Connected to Mysql DB. Total table number is " + res.length);
//           }
//       })
//       .catch((err) => {
//           console.log(err);
//       })
//     },


//     // const Insert = (table, data:{columns: Object, values: Object}, done) => {
//     Insert: (table, data, done) => {
//       let command = "INSERT INTO " + table + " (" + Object.keys(data).toString() + ")";
//     //   console.log(Object.values(data));
//       if (Object.values(data).length > 1) {
//           command += " VALUES (";
//           Object.values(data).forEach((element, index) => {
//               command += (element == "null" ? element : (util.isNumber(element) ? element : "\"" + element + "\""));
//               // console.log(index);
//               index != Object.values(data).length-1 ? command += ", " : command += ");";
//           });
//       } else if (Object.values(data).length == 1) {
//           // console.log("frd");
//           command += " VALUES (" + (element == "null" ? element : (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "\"" + Object.values(data)[0] + "\""));
//       } else return done(new Error("Unvalid Insert"));
//       // console.log(command);
//       mysql_query(command)
//       .then((res_sql) => {
//           return done(null, res_sql);
//       })
//       .catch((e) => {
//           console.log(command);
//           return done(e);
//       })
//     },
    
//     // const Insert = (table, data:{columns: Object, values: Object}, done) => {
//     InsertMany: (table, dataArr, done) => {
//         let counter = 1;
//         let command = "INSERT INTO " + table + " (" + Object.keys(dataArr[0]).toString() + ") VALUES ";
//         for (var data of dataArr) {
//             console.log(`${counter} / ${dataArr.length}`);
//         //   console.log(Object.values(data));
//             if (Object.values(data).length > 1) {
//                 command += "(";
//                 Object.values(data).forEach((element, index) => {
//                     if (element != "null" && element != null) {
//                         command += (util.isNumber(element) ? element : "\"" + element + "\"");
//                     } else command += element
//                     // console.log(index);
//                     index != Object.values(data).length-1 ? command += ", " : command += "),";
//                 });
//             } else if (Object.values(data).length == 1) {
//                 // console.log("frd");
//                 if (element != "null" && element != null) {
//                     command += "(" + (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "\"" + Object.values(data)[0] + "\"");
//                 } else {
//                     command += "(" + element;
//                 }
//             } else return done(new Error("Unvalid Insert"));
//             // console.log(command);
//             if (dataArr.length == counter++) command = command.substr(0, command.length - 1) + ";";
//         }
//         mysql_query(command)
//         .then((res_sql) => {
//             return done(null, res_sql);
//         })
//         .catch((e) => {
//             // console.error(`Error occured: InsertMany "${command}"`)
//             let prevC = "";
//             while (true) {
//                 command.replace("),", "),\n\n");
//                 if (command == prevC) break;
//                 else prevC = command;
//             }
//             fs.appendFileSync(`errorCommand${Date.now()}.txt`, command, { encoding: "UTF-8" });
//             fs.appendFileSync(`errorData${Date.now()}.txt`, e, { encoding: "UTF-8" });
//             return done(e);
//         })
//     },
    
//     InsertManyEdit: (table, dataArr, done) => {
//         let counter = 1;
//         let command = "INSERT INTO " + table + " (" + Object.keys(dataArr[0]).toString() + ") VALUES ";
//         for (var data of dataArr) {
//             console.log(`${counter} / ${dataArr.length}`);
//         //   console.log(Object.values(data));
//             // let data;
//             console.log(data);
//             if (Object.values(data).length > 1) {
//                 command += "(";
//                 Object.values(data).forEach((element, index) => {
//                     if (element != "null" && element != null) {
//                         //  console.log(element);
//                         if (!util.isNumber(element)) {
//                             if (element.split("").includes("\"")) {
//                                 let thisel = "";
//                                 element.split("").forEach((value, indexel) => {
//                                     if (value == "\'" || value == "\"") {
//                                         if (element.split("")[indexel - 1] == "\\") thisel += value;
//                                         else thisel += "\\" + value;
//                                     } else thisel += value;
//                                 })
//                                 command += "\"" + thisel + "\"";
//                             }
//                             else command += "\"" + element + "\"";
//                         }
//                         else command += "\"" + element + "\"";
//                     } else command += element
//                     // console.log(index);
//                     index != Object.values(data).length-1 ? command += ", " : command += "),";
//                 });
//             } else if (Object.values(data).length == 1) {
//                 // console.log("frd");
//                 if (element != "null" && element != null) {
//                     command += "(" + (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "\"" + Object.values(data)[0] + "\"");
//                 } else {
//                     command += "(" + element;
//                 }
//             } else return done(new Error("Unvalid Insert"));
//             // console.log(command);
//             if (dataArr.length == counter++) command = command.substr(0, command.length - 1) + ";";
//         }
//         // console.log(command);
//         mysql_query(command)
//         .then((res_sql) => {
//             return done(null, res_sql);
//         })
//         .catch((e) => {
//             // console.error(`Error occured: InsertMany "${command}"`)
//             let prevC = "";
//             while (true) {
//                 command.replace("),", "),\n\n");
//                 if (command == prevC) break;
//                 else prevC = command;
//             }
//             fs.appendFileSync(`errorCommand${Date.now()}.txt`, command, { encoding: "UTF-8" });
//             fs.appendFileSync(`errorData${Date.now()}.txt`, e, { encoding: "UTF-8" });
//             return done(e);
//         })
//     },

//     // const Update = (table, base:{columns: Object, values: Object}, alter:{columns: Object, values: Object}) => {
//     Update: (table, base, alter) => {
//       return new Promise((resolve, reject) => {
//         let command = "UPDATE " + table;
//         // console.log(typeof data.values);

//         if (Object.values(alter).length > 1) {
//             command += " SET ";
//             Object.values(alter).forEach((element, index) => {
//                 command += "" + Object.keys(alter)[index] + " = " + (util.isNumber(element) ? element : "'" + element + "'");
//                 index != Object.values(alter).length-1 ? command += ", " : command += "";
//             });
//         } else if (Object.values(alter).length == 1) {
//             command += " SET " + Object.keys(alter)[0] + " = " + (util.isNumber(Object.values(alter)[0]) ? Object.values(alter)[0] : "'" + Object.values(alter)[0] + "'");
//         }

//         if (Object.values(base).length > 1) {
//             command += " WHERE ";
//             Object.values(base).forEach((element, index) => {
//                 command += "" + Object.values(base)[index] + " = " + (util.isNumber(element) ? element : "'" + element + "'");
//                 index != Object.values(base).length-1 ? command += " AND " : command += ");";
//             });
//         } else if (Object.values(base).length == 1) {
//             command += " WHERE " + "" + Object.keys(base)[0] + " = " + (util.isNumber(Object.values(base)[0]) ? Object.values(base)[0] : "'"  + Object.values(base)[0] + "'");
//         }

//         console.log(command);
//         mysql_query(command)
//         .then((res_sql) => {
//             resolve(res_sql);
//         })
//         .catch((e) => {
//             reject(e);
//         })
//       })
      
//     },
//     // const Alter = (type: String, table: String, column: String, data: String, done) => {
//     Alter: (type, table, column, data, done) => {
//     if (type == "add" || type == "modify") {
//           if (!table || !column || !data) return done(new Error("Required variable not defined properly"))
//           mysql_query("ALTER table " + table + " " + type + " " + column + " " + data)
//           .then((res_sql) => {
//               return done(null, true);
//           })
//           .catch((e) => {
//               return done(e);
//           })
//       } else return done(new Error("Invalid type: " + type));
//     },
//     // const Read = (table: String, output: Object, filter: {columns: String, values: String}) => {
//     Read: (table, output, filter) => {
//       return new Promise((resolve, reject) => {
//         // console.log(table);
//         // console.log(output);
//         // console.log(filter);
//         let command = "SELECT " + (!output ? "*" : output.toString()) + " FROM " + table;
//         // console.log(command);
//         if (Object.values(filter).length > 1) {
//             command += " WHERE ";
//             Object.keys(filter).forEach((element, index) => {
//                 command += element + "=" + (util.isNumber(Object.values(filter)[index]) ? Object.values(filter)[index] : "'" + Object.values(filter)[index] + "'");
//                 if (Object.keys(filter).indexOf(element) != Object.keys(filter).length-1) command += " AND ";
//             });
//         } else if (Object.values(filter).length == 1) {
//             command += " WHERE " + Object.keys(filter)[0] + "=" + (util.isNumber(Object.values(filter)[0]) ? Object.values(filter)[0] : "'" + Object.values(filter)[0] + "'");
//         }

//         console.log(command);

//         mysql_query(command)
//         .then((res_sql) => {
//             // return done(null, res_sql.length == 1 ? res_sql[0] : res_sql);
//             // console.log(res_sql);  
//             resolve(res_sql);
//         })
//         .catch((e) => {
//             console.log("mysql read Error: ");          
//             console.log(e);          
//             reject(e);
//         })
//       })
//     },
//     // const Delete = (table, filter: {columns: String, values: String}, done) => {
//     Delete: (table, filter, done) => {
//       mysql_query("DELETE FROM " + table + " WHERE " + filter.columns + " = " + filter.values)
//       .then((res_sql) => {
//           return done(null, true);
//       })
//       .catch((e) => {
//           return done(e);
//       })
//     }   
//   }

// mysql functions


// sqlFnc.InsertManyEdit("test", [
//     { user: "a", title: "g" },
//     { user: "b", title: "h" },
//     { user: "c", title: "i" },
//     { user: "d", title: "j" },
//     { user: "e", title: "k" },
//     { user: "f", title: "l" }
// ]);


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

const searchOptions = ["singer", "title", "lyrics"];

app.post("/searchQuery", (req, res) => {
    console.log("---searchQuery API---");
    // search option check
    const option = req.body.searchOption.replace(/(\s*)/g,"");
    const query = req.body.searchQuery;
    if (!option || !query) {
        res.status(400);
        return res.end("Bad Request");
    }

    const searchId = util.getUid(15);
    console.log(`SearchId: '${searchId}'`);
    console.log(`SearchKey: '${query}'`);

    sqlFnc.Read('searchtb', "", { searchKey: query })
    .then((data) => {
        console.log(`prev searchData: ${data}`);
        if (data.length == 0) {
            console.log("no prev search data found");
            searchNew(searchId, query, req.ip, option)
            .then(({ stCode, json }) => {
                res.status(stCode).json(json);
            })
            .catch((e) => {
                console.error(e);
                res.status(500).end("Internal Server Error");
            });
        } else {
            console.log(JSON.stringify(data));
            console.log(`${data.length} previous result found in db`);
            getPrevRes(data)
            .then((prevData) => {
                console.log(prevData);
                res.status(200).json(prevData);
            })
        }
    })
    .catch((e) => {
        console.error(e);
    })

    // searchMediaC.registerListener(function (val) {
    //     if (val.stat == "ERR") res.status(500).end(`ERR: ${val.errCont}`) // return response error
    //     else console.log("media searching complete");
    // });
  

  


})

function getPrevRes(data) {
    return new Promise((resolve, reject) => {
        // let returnObjCounter = 0;
        let returnObjCounter = {
            rocInternal: 0,
            rocListener: function(val) {},
            set roc(val) {
              this.rocInternal = val;
              this.rocListener(val);
            },
            get roc() {
              return this.rocInternal;
            },
            registerListener: function(listener) {
              this.rocListener = listener;
            }
        }
        returnObjCounter.registerListener(function (val) {
            console.log(`returnObjCounter: ${val}`);
            // if (val == 3) resolve(returnData); // activate when all functions complete
            if (val == 1) resolve(returnData);
        })
        
        let returnData = {
            "med": {},
            "yt": {},
            "melon": {}
        }
        // returnData.registerListener(function (val) {
        //     // console.log(val);
        //     returnObjCounter++;
        //     console.log(`returnObjCounter: ${returnObjCounter}`);
        //     if (returnObjCounter == 1) resolve(returnData.a);
        // })
        data.forEach((searchData, index) => {
            console.log(index);
            // definition
            const { searchKey, melonRes, ytRes, medRes, addDate } = searchData;
    
            // isLyricsget total end
            let isLyricsEndTotal = {
                boolInternal: false,
                boolListener: function(val) {},
                set bool(val) {
                    this.boolInternal = val;
                    this.boolListener(val);
                },
                get bool() {
                    return this.boolInternal;
                },
                registerListener: function(listener) {
                    this.boolListener = listener;
                }
            }
        
            // search: melonRes
            sqlFnc.Read('melonRes', "", { melonRes })
            .then((prevMelonRes) => {
                // console.log(JSON.stringify(prevMelonRes));
                let melonDatas = [];
                console.log(`${prevMelonRes.length} previous melon result found (timestamp: ${addDate})`);
    
                // let lyricsObj;
                let lyricsObj = {};
                prevMelonRes.forEach((prevMelonResIndiv, indexMR) => {
                    let pushData;
                    // console.log(prevMelonResIndiv.lyricsId);
                    if (prevMelonResIndiv.lyricsId) {
                        sqlFnc.Read('lyrics', "", { lyricsId: prevMelonResIndiv.lyricsId, addService: "melon" })
                        .then((lylicsPDataArr) => {
                            // console.log(lylicsPDataArr);    
                            // console.log(`${prevMelonResIndiv.songTitle} lyrics found (song-save timestamp: ${addDate})`);
                            let lylicsTextArr = lylicsPDataArr[0].lyrics.split("| & |,");
                            let lylicsTimeArr = lylicsPDataArr[0].timestamps.split("| & |,");
                            console.log(lyricsObj);
                            if (!lyricsObj.lylics) {
                                lyricsObj.lylics = [];
                                lyricsObj.lylicsNum = lylicsTextArr.length;
                            }
                            for (var i = 0; i < lylicsTextArr.length; i++) {
                                lyricsObj.lylics.push({
                                    text: lylicsTextArr[i],
                                    time: lylicsTimeArr[i]
                                });
                                if (lylicsTextArr.length - 1 == i) {
                                    pushData = {
                                        album: {
                                            albumId: prevMelonResIndiv.albumIdM,
                                            albumImg: prevMelonResIndiv.albumImg,
                                            albumTitle: prevMelonResIndiv.albumTitle,
                                            linkConvert: `https://www.melon.com/album/detail.htm?albumId=${prevMelonResIndiv.albumIdM}`
                                        },
                                        artist: {
                                            artistId: prevMelonResIndiv.artistIdM,
                                            artistImg: prevMelonResIndiv.artistImg,
                                            artistName: prevMelonResIndiv.artist
                                        },
                                        song: {
                                            linkConvert: `https://www.melon.com/song/detail.htm?songId=${prevMelonResIndiv.songIdM}`,
                                            menuId: prevMelonResIndiv.menuId,
                                            songId: prevMelonResIndiv.songIdM,
                                            songImg: prevMelonResIndiv.songImg,
                                            songTitle: prevMelonResIndiv.songTitle,
                                            lyrics: lyricsObj
                                        },
                                        songIdB: prevMelonResIndiv.songIdB
                                    }
                                    melonDatas.push(pushData);
                                    console.log(`pushed! (searchResult recovery completion status: ${melonDatas.length} / ${prevMelonRes.length})`);
                                    if (melonDatas.length == prevMelonRes.length) isLyricsEndTotal.bool = true;
                                }
                            }
                        })
                    } else {
                        pushData = {
                            album: {
                                albumId: prevMelonResIndiv.albumIdM,
                                albumImg: prevMelonResIndiv.albumImg,
                                albumTitle: prevMelonResIndiv.albumTitle,
                                linkConvert: `https://www.melon.com/album/detail.htm?albumId=${prevMelonResIndiv.albumIdM}`
                            },
                            artist: {
                                artistId: prevMelonResIndiv.artistIdM,
                                artistImg: prevMelonResIndiv.artistImg,
                                artistName: prevMelonResIndiv.artist
                            },
                            song: {
                                linkConvert: `https://www.melon.com/song/detail.htm?songId=${prevMelonResIndiv.songIdM}`,
                                menuId: prevMelonResIndiv.menuId,
                                songId: prevMelonResIndiv.songIdM,
                                songImg: prevMelonResIndiv.songImg,
                                songTitle: prevMelonResIndiv.songTitle,
                                lyrics: null
                            },
                            songIdB: prevMelonResIndiv.songIdB
                        }
                        melonDatas.push(pushData);
                    }


                    // lyricsObj.registerListener(function (val) {
                    //     console.log("registerListener: lylicsObj");
                    // });
                })

                isLyricsEndTotal.registerListener(isEnd)

                function isEnd() {
                    console.log("isEndFunc");
                    if (index == data.length - 1) {
                        returnData.melon.data = melonDatas;
                        console.log("complete: melon");
                        returnObjCounter.roc++;
                    } else {
                        setTimeout(() => {
                            isEnd();
                        }, 500);
                    }
                }

                
            })
        })
    })
}

function searchNew(searchId, query, ip, option) {
    return new Promise((resolve, reject) => {

        let MdbObj = {
            searchId,
            cusId: "gda56GkzsGKixwFRhzgv", // change after activate session login
            searchKey: query,
            ip
        }
        
        let tried_counter = 0;
        
        let stCode = 200;
    
        let searchResult = {
            "med": {},
            "yt": {},
            "melon": {}
        };
    
        searchMedia(query)
        .then((mediaResult) => {
            console.log(`Search Requested: Media`);
            const primaryKeyMedia = "40302" + util.getUid(10, true);
            searchComplete("med", mediaResult, primaryKeyMedia, null);
        })
        .catch((e) => {
            console.log(`Error Occured: media`);
            console.error(e);
            searchComplete("med", null, null, e);
        })
    
        console.log(`Search Requested: Melon`);
        searchMelon(query)
        .then((melonResult) => {
            console.log(`Search Complete: Melon`);
            const primaryKeyMelon = "40303" + util.getUid(10, true);
            searchComplete("melon", melonResult, primaryKeyMelon, null);
        })
        .catch((e) => {
            console.log(`Error Occured: melon`);
            console.error(e);
            searchComplete("melon", null, null, e);
        })
    
        searchYT(query)
        .then((ytResult) => {
            console.log(`Search Requested: YTM`);
            const primaryKeyYT = "40304" + util.getUid(10, true);
            searchComplete("yt", ytResult, primaryKeyYT, null);
        })
        .catch((e) => {
            console.log(`Error Occured: ytm`);
            console.error(e);
            searchComplete("yt", null, null, e);
        })
    
    
        function searchComplete(type, data, primaryKey, err) {
            if (err) { 
                stCode = 500;
                searchResult[type].err = err;
            }
            console.log(`${type} completes || total finish: ${++tried_counter}`);
            if (data) {
    
                console.log(typeof data);
                
                let SdbObj = {
                    searchKey: query,
                    searchResArr: JSON.stringify(data)
                };
                
                // save search result in db
                
                var columnName = type + "Res";
                var tableName = type + "res";
                MdbObj[columnName] = primaryKey;
                SdbObj[columnName] = primaryKey;
    
                searchResult[type].data = [];
                
                // resultobj.song.lyrics.lylics ? JSON.stringify(resultobj.song.lyrics.lylics) : resultobj.song.lyrics.lylics,
    
    
                try {
                    if (type == "melon") {
                        let z = 0;
                        SdbObj = [];
                        for (var resultobj of data) {
                            let lyricsId;
                            let timestamps = [];
                            let lylics = [];
                            let dataEdit = resultobj;
                            const songIdB = "Base" + util.getUid(6);
                            dataEdit.songIdB = songIdB;
                            if (resultobj.song.lyrics.lylics) {
                                lyricsId = util.getUid(15, true);
                                resultobj.song.lyrics.lylics.forEach((value, index) => {
                                    timestamps.push(value.time + "| & |");
                                    lylics.push(value.text + "| & |");
                                })
                                sqlFnc.Insert('lyrics', {
                                    lyricsId,
                                    addService: "melon",
                                    timestamps: timestamps.toString(),
                                    lyrics: lylics.toString()
                                }, function (err, result) {
                                    if (err) throw err;
                                });
                            }
                            else lyricsId = null;

                            console.log(resultobj.song.songId);

                            SdbObj.push({
                                searchId,
                                melonRes: primaryKey,
                                melonResNum: primaryKey + z,
                                numOfRes: z++,
                                songIdM: lyricsId == null ? resultobj.song.songId : resultobj.song.lyrics.songInfo.SONGID,
                                songIdB,
                                menuIdM: resultobj.song.menuId,
                                songImg: resultobj.song.songImg,
                                songTitle: resultobj.song.songTitle,
                                lyricsId,
                                artist: resultobj.artist.artistName,
                                artistImg: resultobj.artist.artistImg,
                                artistIdM: resultobj.artist.artistId,
                                albumTitle: lyricsId == null ? resultobj.album.albumTitle : resultobj.song.lyrics.songInfo.ALBUMNAME,
                                albumIdM: lyricsId == null ? resultobj.album.albumId : resultobj.song.lyrics.songInfo.ALBUMID,
                                albumImg: resultobj.album.albumImg
                            });

                            searchResult[type].data.push(dataEdit);
                        }
                        // sqlFnc.InsertMany(tableName, SdbObj, function (err, result) {
                        //     if (err) throw err;
                        // })
                        sqlFnc.InsertManyEdit(tableName, SdbObj, function (err, result) {
                            if (err) throw err;
                        })
                    } else {
                        sqlFnc.Insert(tableName, SdbObj, function (err, result) {
                            if (err) throw err;
                        });
                    }
                } catch (e) {
                    console.error(e);
                }
            }
            if (tried_counter == 3) {
    
                // save search result in db
    
                if (!MdbObj.ytRes) {
                    MdbObj.ytRes = "44444";
                }
                if (!MdbObj.melonRes) {
                    MdbObj.melonRes = "44444";
                }
                if (!MdbObj.medRes) {
                    MdbObj.medRes = "44444";
                }
    
                setTimeout(() => {
                    try { 
                        console.log(MdbObj);
                        sqlFnc.Insert("searchtb", MdbObj, function (err, result) {
                            if (err) throw err;
                        });
                    } catch (e) {
                        console.error(e);
                    }
                }, 100);
    
    
    
    
                const searchAllianced = searchAlliance(searchResult);
                searchFiltering(searchAllianced, option.split(","), "*")
                .then((filterData) => {
                    resolve({
                        stCode,
                        json: filterData
                    })
                })
                .catch((e) => {
                    console.error(e);
                    // res.status(stCode).json({});
                    resolve({
                        stCode,
                        json: {}
                    })
                })
            }
        }
    })
}

function searchAlliance(searchResult) {
    let resData = [];
    if (!searchResult.melon) return new Array(0);
    // searchResult.melon.data.forEach((song, index) => {
    //     // album
    //     const { albumId, albumImg, albumTitle } = song.album;
    //     // artist
    //     const { artistName, artistId, artistImg } = song.artist;
    //     // song
    //     const { lyrics, songId, songImg, songTitle } = song.song;
    //     const songKey = util.getUid(20);
        
    //     searchYT(`${songTitle}  ${artistName}`)
    //     .then((ytspecSearch) => {
    //         ytspecSearch.songObj
    //     })

    // })
    return searchResult;
}

function searchFiltering(searchResult, filter) {

    // filter not ready

    return new Promise((resolve, reject) => {
        if (filter.includes("*")) {
            resolve(searchResult);
        } else if (filter.includes("_")) {
            resolve({});
        } else switch (filter) {
            case "title":

                
            
            // resolve();
            // break;

            case "lyrics":

            // resolve();
            // break;

            case "singer":

            // resolve();
            // break;

            default:
                // resolve(searchResult);
                break;
        }
    })
}


// app.post('/searchQuery', (req, res) => {
//   console.log("searchQuery API");
//   // search option check
//   const option = req.body.searchOption;
//   const query = req.body.searchQuery;
//   if (!option || !query) {
//     res.status(400);
//     return res.end("Bad Request");
//   } else {
//     // service specifiy search
//     console.log(`Option Filter: ${option}`);
//     if (option == "*") {
//       console.log("Start Searching..");
//       // console.log(typeof melon.searchMelon);
//       // console.log(melon.searchMelon);
//       async.waterfall([
//         (callback) => {
//           // classify whether searchquery is drama/movie title
//           console.log("Media API checking..");
//           searchMedia(query)
//           .then((data) => {
//             console.log("aserdg");
//             let callbackData = data;
//             let MediaType = [];
//             let isMedia;
//             if (callbackData.length > 0) {
//               isMedia = true;
//               for (var cbDloop = 0; cbDloop < callbackData.length; cbDloop++) {
//                 if (callbackData[cbDloop].full_path.split("/")[2] == "영화" && !MediaType.includes("영화")) MediaType.push("영화");
//                 if (callbackData[cbDloop].full_path.split("/")[2] == "TV-프로그램" && !MediaType.includes("TV 프로그램")) MediaType.push("TV 프로그램");
//                 if (cbDloop == callbackData.length - 1) {
//                   callback(null, {
//                     isMedia,
//                     MediaCont: callbackData,
//                     MediaType
//                   });
//                 }
//               }
//             } else {
//               isMedia = false;
//               callback(null, {
//                 isMedia,
//                 MediaCont: callbackData
//               });
//             }
//           })
//           .catch((e) => {
//             callback(e);
//           })
//         },
//         (MediaData, callback) => {
//           // find songs: searchquery from youtube music api
//           console.log("Youtube API checking.."); 
//           searchYT(query)
//           .then((data) => {
//             let ytResult = MediaData;
//             ytResult.ytSearch = data;
//             callback(null, ytResult);
//           })
//           .catch((e) => {
//             console.error(e);
//             callback(null, MediaData);
//           })
//         },
//         (YtData, callback) => {
//           // find songs: searchquery from melon
//           searchMelon(query)
//           .then((data) => {
//             let melonResult = YtData;
//             melonResult.melonSearch = data;
//             callback(null, melonResult);
//           })
//           .catch((e) => {
//             callback(e);
//           })
//         },
//         (searchObj, callback) => {
//           // let melList = searchObj.melonSearch.filter(element => {
//           //   return element.
//           // })
//           callback(null, searchObj);
//         }
//       ], (err, result) => {
//         console.log(result);
//         if (err) {
//           res.status(500);
//           return res.end("false");
//         }
//         res.status(200);
//         return res.json(result);
//       })
//     } else {
//       res.status(400);
//       res.end("Invalid Option");
//     }
//   }
// })





export default {
    path: "/search/api",
    handler: app
}