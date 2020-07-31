const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

/*
* Naver Cloud Platform API Information
*/

const NCP_API = JSON.parse(fs.readFileSync(path.join(__dirname, "/../security/NCPAuth.json"), { encoding: "UTF-8" }));
// console.log(typeof NCP_API);

/*
* Naver Cloud Platform API Information
*/


app.post("/getLocation", (req, res) => {
    
})


module.exports = app;