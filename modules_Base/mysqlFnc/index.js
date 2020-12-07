const util = require("../../util");
// import path from "path";
// import mysql from "mysql";
const path = require("path");
const mysql = require("mysql");
const fs = require("fs")

const mysqlConnKEYINFO = JSON.parse(fs.readFileSync(path.join(__dirname, "../../security/dbConnection.json"), {encoding: "UTF-8"}));
console.log(mysqlConnKEYINFO);

const conn_mysql = mysql.createConnection(mysqlConnKEYINFO);
conn_mysql.connect();

function mysql_query(q_comm) {
    //   console.log(isConnected);
//   console.log(connSqlObj);
    return new Promise((resolve, reject) => {
        conn_mysql.query(q_comm, (err, rows, fields) => {
        if (err) {
                reject("Query ERR: " + err);
            } else {
                resolve(rows);
            }
        })
    })
}

function emptyQuery() { 
    conn_mysql.query("show databases");
    setTimeout(() => {
        console.log("empty query sent");
        emptyQuery();
    }, 1000000);
}

emptyQuery();

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
    //   console.log(Object.values(data));
      if (Object.values(data).length > 1) {
          command += " VALUES (";
          Object.values(data).forEach((element, index) => {
              command += (element == "null" ? element : (util.isNumber(element) ? element : "\"" + element + "\""));
              // console.log(index);
              index != Object.values(data).length-1 ? command += ", " : command += ");";
          });
      } else if (Object.values(data).length == 1) {
          // console.log("frd");
          command += " VALUES (" + (element == "null" ? element : (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "\"" + Object.values(data)[0] + "\""));
      } else return done(new Error("Unvalid Insert"));
    //   console.log(command);
      mysql_query(command)
      .then((res_sql) => {
          return done(null, res_sql);
      })
      .catch((e) => {
          console.log(command);
          return done(e);
      })
    },
    
    // const Insert = (table, data:{columns: Object, values: Object}, done) => {
    InsertMany: (table, dataArr, done) => {
        let counter = 1;
        let command = "INSERT INTO " + table + " (" + Object.keys(dataArr[0]).toString() + ") VALUES ";
        for (var data of dataArr) {
            console.log(`${counter} / ${dataArr.length}`);
        //   console.log(Object.values(data));
            if (Object.values(data).length > 1) {
                command += "(";
                Object.values(data).forEach((element, index) => {
                    if (element != "null" && element != null) {
                        command += (util.isNumber(element) ? element : "\"" + element + "\"");
                    } else command += element
                    // console.log(index);
                    index != Object.values(data).length-1 ? command += ", " : command += "),";
                });
            } else if (Object.values(data).length == 1) {
                // console.log("frd");
                if (element != "null" && element != null) {
                    command += "(" + (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "\"" + Object.values(data)[0] + "\"");
                } else {
                    command += "(" + element;
                }
            } else return done(new Error("Unvalid Insert"));
            // console.log(command);
            if (dataArr.length == counter++) command = command.substr(0, command.length - 1) + ";";
        }
        mysql_query(command)
        .then((res_sql) => {
            return done(null, res_sql);
        })
        .catch((e) => {
            // console.error(`Error occured: InsertMany "${command}"`)
            let prevC = "";
            while (true) {
                command.replace("),", "),\n\n");
                if (command == prevC) break;
                else prevC = command;
            }
            fs.appendFileSync(`errorCommand${Date.now()}.txt`, command, { encoding: "UTF-8" });
            fs.appendFileSync(`errorData${Date.now()}.txt`, e, { encoding: "UTF-8" });
            return done(e);
        })
    },
    
    InsertManyEdit: (table, dataArr, done) => {
        let counter = 1;
        let command = "INSERT INTO " + table + " (" + Object.keys(dataArr[0]).toString() + ") VALUES ";
        for (var data of dataArr) {
            console.log(`${counter} / ${dataArr.length}`);
        //   console.log(Object.values(data));
            // let data;
            // console.log(data);
            if (Object.values(data).length > 1) {
                command += "(";
                Object.values(data).forEach((element, index) => {
                    if (element != "null" && element != null) {
                        //  console.log(element);
                        if (!util.isNumber(element)) {
                            if (element.split("").includes("\"") || element.split("").includes("\'")) {
                                let thisel = "";
                                element.split("").forEach((value, indexel) => {
                                    if (value == "\'" || value == "\"") {
                                        if (element.split("")[indexel - 1] == "\\") thisel += value;
                                        else thisel += "\\" + value;
                                    } else thisel += value;
                                })
                                command += "\"" + thisel + "\"";
                            } else command += "\"" + element + "\"";
                        }
                        else command += "\"" + element + "\"";
                    } else command += element
                    // console.log(index);
                    index != Object.values(data).length-1 ? command += ", " : command += "),";
                });
            } else if (Object.values(data).length == 1) {
                // console.log("frd");
                if (element != "null" && element != null) {
                    command += "(" + (util.isNumber(Object.values(data)[0]) ? Object.values(data)[0] : "\"" + Object.values(data)[0] + "\"");
                } else {
                    command += "(" + element;
                }
            } else return done(new Error("Unvalid Insert"));
            // console.log(command);
            if (dataArr.length == counter++) command = command.substr(0, command.length - 1) + ";";
        }
        // console.log(command);
        mysql_query(command)
        .then((res_sql) => {
            return done(null, res_sql);
        })
        .catch((e) => {
            // console.error(`Error occured: InsertMany "${command}"`)
            let prevC = "";
            while (true) {
                command.replace("),", "),\n\n");
                if (command == prevC) break;
                else prevC = command;
            }
            fs.appendFileSync(`errorCommand${Date.now()}.txt`, command, { encoding: "UTF-8" });
            fs.appendFileSync(`errorData${Date.now()}.txt`, e, { encoding: "UTF-8" });
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
                if (util.isNumber(Object.values(filter)[index])) {
                    command += element + "=" + Object.values(filter)[index];
                } else {
                    let elobj = "";
                    element.split("").forEach((el, ind) => {
                        if (el == "\'" || el == "\"" || el == "\`") {
                            if (element.split("")[ind - 1] == "\\") { 
                                elobj += el;
                            } else {
                                elobj += "\\" + el; 
                            }
                        } else {
                            elobj += el;
                        }
                    })
                    // console.log(elobj);
                    command += element + "=" + elobj;
                }
                if (Object.keys(filter).indexOf(element) != Object.keys(filter).length-1) command += " AND ";
            });
        } else if (Object.values(filter).length == 1) {
            if (util.isNumber(Object.values(filter)[0])) {
                command += " WHERE " + Object.keys(filter)[0] + "=" + Object.values(filter)[0];
            } else {
                let elobj = "";
                Object.values(filter)[0].split("").forEach((el, ind) => {
                    if (el == "\'" || el == "\"" || el == "\`") {
                        if (Object.values(filter)[0].split("")[ind - 1] == "\\") { 
                            elobj += el;
                        } else {
                            elobj += "\\" + el; 
                        }
                    } else {
                        elobj += el;
                    }
                })
                // console.log(elobj);
                command += " WHERE " + Object.keys(filter)[0] + "= \"" + elobj + "\"";
            }
            // command += " WHERE " + Object.keys(filter)[0] + "=" + (util.isNumber(Object.values(filter)[0]) ? Object.values(filter)[0] : "'" + Object.values(filter)[0] + "'");
        }

        console.log(command);

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
      mysql_query("DELETE FROM " + table + " WHERE " + filter.columns + " = '" + filter.values + "'")
      .then((res_sql) => {
          return done(null, true);
      })
      .catch((e) => {
          return done(e);
      })
    },
    Read_JOIN: (table, joinType, option, multiOptionCntl, output, filter) => {
        return new Promise((resolve, reject) => {
            if (!option || !table || !joinType) reject(new Error(`Invalid options`));
            else if (typeof table != "object") reject(new Error(`'table' variable requires object. Get ${typeof table}`));
            else {
                // reference: http://rapapa.net/wp/wp-content/uploads/2012/06/Visual_SQL_JOINS_V2.png;
        
        
                // typeof table: object
                // join type: left || right || inner || full (default)
                // multiOptionCntl: AND || OR || IN
        
                let query = `select ${Object.keys(output).toString()} from ${table}`;
                Object.keys(output);

                const { base, reference } = table;
        
                switch (joinType) {
                    case "inner":
                        // query: select * from [tableA], [tableB]
                        // typeof table: array
                        query += table.toString();
                        break;
                    case "right":
                        if (!base || !reference) reject(new Error(`join option 'right' needs 'base' & 'reference' in variable 'table' `));
                        // query: select * from [tableA] RIGHT JOIN [tableB] ON (option)
                        // typeof table: json 
                        /*
                            {
                                base: String,
                                reference: String
                            }
                        */
                        query += `${base} A RIGHT JOIN ${reference} B ON`;
                        break;
                    case "left":
                        if (!base || !reference) reject(new Error(`join option 'left' needs 'base' & 'reference' in variable 'table' `));
                        // query: select * from [tableA] LEFT JOIN [tableB] ON (option)
                        // typeof table: json 
                        /*
                            {
                                base: String,
                                reference: String
                            }
                        */
                        query += `${base} A LEFT JOIN ${reference} B ON`;
                        break;
                    case "full":
                        // query: select * from [tableA] FULL OUTER JOIN [tableB] ON (option)
                        // typeof table: array

                        query += `${table[0]} A FULL OUTER JOIN ${table[1]} B ON`;
                        break;
                    default:
                        // query: select * from [tableA] LEFT JOIN [tableB] ON (option)
                        console.info(`This command occurs lots of overload both server and DBMS. I hope you what you've done`);
                        
                        break;
                }

                query += "WHERE";
                for (let i = 0; i < Object.keys(option); i++) {
                    query += `A.${Object.keys(option)[i]}=B.${Object.values(option)[i]}`;
                    if (i != Object.keys(option).length - 1) query += ` ${multiOptionCntl} `;
                }
            }
        })
    },
    Direct: (command) => {
        return new Promise((resolve, reject) => {
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
    }
}
  
module.exports = sqlFnc;