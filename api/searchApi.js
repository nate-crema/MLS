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
import async from 'async';
// import { callbackify } from 'util';
// import { STATUS_CODES } from 'http';


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

    // const Update = (table, base:{columns: Object, values: Object}, alter:{columns: Object, values: Object}) => {
    Update: (table, base, alter) => {
      return new Promise((resolve, reject) => {
        let command = "UPDATE " + table;
        // console.log(typeof data.values);

        if (Object.values(alter).length > 1) {
            command += " SET ";
            Object.values(alter).forEach((element, index) => {
                command += "" + Object.keys(alter)[index] + " = " + (util.isNumber(element) ? element : "'" + element + "'");
                index != Object.values(alter).length-1 ? command += ", " : command += "";
            });
        } else if (Object.values(alter).length == 1) {
            command += " SET " + Object.keys(alter)[0] + " = " + (util.isNumber(Object.values(alter)[0]) ? Object.values(alter)[0] : "'" + Object.values(alter)[0] + "'");
        }

        if (Object.values(base).length > 1) {
            command += " WHERE ";
            Object.values(base).forEach((element, index) => {
                command += "" + Object.values(base)[index] + " = " + (util.isNumber(element) ? element : "'" + element + "'");
                index != Object.values(base).length-1 ? command += " AND " : command += ");";
            });
        } else if (Object.values(base).length == 1) {
            command += " WHERE " + "" + Object.keys(base)[0] + " = " + (util.isNumber(Object.values(base)[0]) ? Object.values(base)[0] : "'"  + Object.values(base)[0] + "'");
        }

        console.log(command);
        mysql_query(command)
        .then((res_sql) => {
            resolve(res_sql);
        })
        .catch((e) => {
            reject(e);
        })
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
    // const Read = (table: String, output: Object, filter: {columns: String, values: String}) => {
    Read: (table, output, filter) => {
      return new Promise((resolve, reject) => {
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
            // console.log(res_sql);  
            resolve(res_sql);
        })
        .catch((e) => {
            console.log("mysql read Error: ");          
            console.log(e);          
            reject(e);
        })
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
    
    let tried_counter = 0;

    let stCode = 200;

    let searchResult = {
        "media": {},
        "yt": {},
        "melon": {}
    };

    searchMedia(query)
    .then((mediaResult) => {
        console.log(`Search Requested: Media`);
        searchComplete("media", mediaResult);
    })
    .catch((e) => {
        console.log(`Error Occured: media`);
        console.error(e);
        searchComplete("media", null, e);
    })

    console.log(`Search Requested: Melon`);
    searchMelon(query)
    .then((melonResult) => {
        console.log(`Search Complete: Melon`);
        searchComplete("melon", melonResult);
    })
    .catch((e) => {
        console.log(`Error Occured: melon`);
        console.error(e);
        searchComplete("melon", null, e);
    })

    searchYT(query)
    .then((ytResult) => {
        console.log(`Search Requested: YTM`);
        searchComplete("yt", ytResult);
    })
    .catch((e) => {
        console.log(`Error Occured: ytm`);
        console.error(e);
        searchComplete("yt", null, e);
    })


    function searchComplete(type, data, err) {
        if (err) { 
            stCode = 500;
            searchResult[type].err = err;
        }
        console.log(`${type} completes || total finish: ${++tried_counter}`);
        if (data) searchResult[type].data = data;
        if (tried_counter == 3) {
            const searchAllianced = searchAlliance(searchResult);
            searchFiltering(searchAllianced, option.split(","), "*")
            .then((filterData) => {
                console.log(filterData);    
                // res.status(stCode).json(filterData);
                res.status(200).json(filterData);
            })
            .catch((e) => {
                console.error(e);
                res.status(stCode).json({});
            })
        }
    }

    // searchMediaC.registerListener(function (val) {
    //     if (val.stat == "ERR") res.status(500).end(`ERR: ${val.errCont}`) // return response error
    //     else console.log("media searching complete");
    // });
  

  


})

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