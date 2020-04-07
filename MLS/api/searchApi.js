import express from 'express';
import { melon, ytMusic, mediaSearch } from "../../modules";
const getPList = melon.getPList;
const getListInfo = melon.getListInfo;
const searchMelon = melon.searchMelon;
const searchYT = ytMusic.searchYt;
const searchMedia = mediaSearch.searchMedia;
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

app.post('/searchQuery', (req, res) => {
  // search option check
  const option = req.body.searchOption;
  const query = req.body.searchQuery;
  if (!option || !query) {
    res.status(400);
    res.end("Bad Request");
  } else {
    // service specifiy search
    if (option == "*") {
      // console.log(typeof melon.searchMelon);
      // console.log(melon.searchMelon);
      async.waterfall([
        (callback) => {
          // classify is searchquery drama/movie title
          searchMedia(query)
          .then((data) => {
            let isMedia;
            console.log(data);
            if (data.length > 0) {
              isMedia = true;
            } else {
              isMedia = false;
            }
            callback(null, {
              isMedia,
              MediaCont: data
            });
          })
          .catch((e) => {
            callback(e);
          })
        },
        (MediaData, callback) => {
          // find songs: searchquery from youtube music api
          searchYT(query)
          .then((data) => {
            let ytResult = MediaData;
            ytResult.ytSearch = data;
            callback(null, ytResult);
          })
          .catch((e) => {
            callback(e);
          })
        },
        (YtData, callback) => {
          // find songs: searchquery from melon
          searchMelon(query)
          .then((data) => {
            let melonResult = YtData;
            melonResult.melonSearch = data;
            callback(null, melonResult);
          })
          .catch((e) => {
            callback(e);
          })
        }
      ], (err, result) => {
        if (err) {
          res.status(500);
          return res.end("false");
        }
        res.status(200);
        return res.json(result);
      })
    }
  }
})





export default {
    path: "/search/api",
    handler: app
}