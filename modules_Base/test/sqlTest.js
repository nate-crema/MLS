// const express = require( 'express');
// const { melon, ytMusic, mediaSearch } = require("../../modules_Base");
// const getPList = melon.getPList;
// const getListInfo = melon.getListInfo;
// const searchMelon = melon.search.title;
// const searchYT = ytMusic.search.searchYt;
// const searchMedia = mediaSearch.searchMedia;
// const crypto = require('crypto');
// const axios = require("axios");
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
const util = require('../../util');
// const async = require('async');
// const { isUndefined } = require('util');
// const { callbackify } = require( 'util');
// const { STATUS_CODES } = require( 'http');


// mysql functions

const mysqlConnKEYINFO = JSON.parse(fs.readFileSync(path.join(__dirname, "../../security/dbConnection.json"), {encoding: "UTF-8"}));
// console.log(mysqlConnKEYINFO);
const conn_mysql = mysql.createConnection(mysqlConnKEYINFO);
let connArr = {};


function mysql_query(q_comm) {
    let connNumThis;
    let connTime;
    console.log(conn_mysql.state);
    conn_mysql.connect(function (err) {
        console.log(conn_mysql.state);
        if (err) throw err;
        connTime = Date.now();
        console.log(`SQL Connected: Time ${connTime}`);
        connArr[conn_mysql.threadId] = connTime;
        connNumThis = conn_mysql.threadId;
        return;
    })

    console.log(conn_mysql.state);
    conn_mysql.query("show databases", function (err, result) {
        console.log(conn_mysql.state);
        
        console.log("result returned");
    })

    
    setTimeout(() => {
        console.log(conn_mysql.state);
        if (connArr.length != 0 && connArr[connNumThis] == connTime) conn_mysql.end(function (err) {
            if (err) throw err;
            console.log(conn_mysql.state);
        });
    }, 1000);
}






  
// let connCounter = 0;
// let time_connected = "";
// let time_used = "";
// let connSqlObj;
// let isCheckerRunning = false;
// let isProgressing = false;

//   function mysql_query(q_comm) {
    
      
//       //   console.log(isConnected);
//       //   console.log(connSqlObj);
//       if (isProgressing) setTimeout(() => {
//           mysql_query(q_comm);
//       }, 600);
//       else if (connCounter==0) {
//           conn_mysql.connect();
//           conn_mysql
//           console.log("connected");
//           isProgressing = true;
//           connSqlObj = conn_mysql;
//           time_connected = Date.now();
//           time_used = Date.now();
//           connCounter++;
//       } else {
//           time_used = Date.now();
//           console.log(`time_used: ${time_used}`);
//       }
//       return new Promise((resolve, reject) => {
//           connSqlObj.query(q_comm, (err, rows, fields) => {
//               isProgressing = false;
//               if (err) {
//                   reject("Query ERR: " + err);
//                   isSqlConnEnd();
//               } else {
//                   if (!isCheckerRunning) {
//                       isCheckerRunning = true;
//                       isSqlConnEnd(connSqlObj, time_connected);
//                   }
//                   resolve(rows);
//               }
//           })
//       })
//   }

// let i = 0;
// function isSqlConnEnd(mysql_connection, time_connected) { 
//     if (mysql_connection) {

//         console.log(`Connected time: ${time_connected}`);
//         console.log(++i);
//         if (new Date(time_used) <= new Date(time_connected+60000) && new Date(time_used) >= new Date(time_connected)) {
//             mysql_connection.end();
//             console.log("sql connection ended");
//             console.log(`remainCounter: ${connCounter--}`);
//             time_connected = "";
//         }
//         if (connCounter > 0) {
//             setTimeout(() => {
//                 isSqlConnEnd(mysql_connection, time_connected);
//             }, 2000);
//         }
//     }
// }

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
//               command += (util.isNumber(element) ? element : "'" + element + "'");
//               // console.log(index);
//               index != Object.values(data).length-1 ? command += ", " : command += ");";
//           });
//       } else if (Object.values(data).length == 1) {
//           // console.log("frd");
//           command += " VALUES (" + (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "'" + Object.values(data)[0] + "'");
//       } else return done(new Error("Unvalid Insert"));
//       // console.log(command);
//       mysql_query(command)
//       .then((res_sql) => {
//           return done(null, res_sql);
//       })
//       .catch((e) => {
//         //   console.log(command);
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
//                     command += (util.isNumber(element) ? element : "'" + element + "'");
//                     // console.log(index);
//                     index != Object.values(data).length-1 ? command += ", " : command += "),";
//                 });
//             } else if (Object.values(data).length == 1) {
//                 // console.log("frd");
//                 command += "(" + (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "'" + Object.values(data)[0] + "'");
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

//         // console.log(command);

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


mysql_query("show databases");
  

// setTimeout(() => {
//     mysql_query("show databases");
// }, 500);























































// const util = require("../../util");

// function InsertMany(table, dataArr, done) {
//     let counter = 1;
//     let command = "INSERT INTO " + table + " (" + Object.keys(dataArr[0]).toString() + ") VALUES ";
//     for (var data of dataArr) {
//         console.log(`${counter} / ${dataArr.length}`);
//     //   console.log(Object.values(data));
//         if (Object.values(data).length > 1) {
//             command += "(";
//             Object.values(data).forEach((element, index) => {
//                 command += (util.isNumber(element) ? element : "'" + element + "'");
//                 // console.log(index);
//                 index != Object.values(data).length-1 ? command += ", " : command += "),";
//             });
//         } else if (Object.values(data).length == 1) {
//             // console.log("frd");
//             command += "(" + (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "'" + Object.values(data)[0] + "'");
//         } else return done(new Error("Unvalid Insert"));
//         // console.log(command);
//         if (dataArr.length == counter++) command = command.substr(0, command.length - 1) + ";";
//     }
//     console.log(command);
// }

// InsertMany("TABLE_NAME", [{
//     a: "alpha",
//     b: "beta",
//     r: "gamma",
//     test: true,
//     num: 503
// }, {
//     a: "etuyha",
//     b: "beta",
//     r: "gamtryt",
//     test: false,
//     num: 50546
//     }], (err, result) => {
//         if (err) throw err;
//         else console.log(result);
// })