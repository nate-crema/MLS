import express from 'express';
const app = express.Router();


app.use((req, res, next) => {
    Object.setPrototypeOf(req, express().request)
    Object.setPrototypeOf(res, express().response)
    req.res = res
    res.req = req
    next();
})


// router

// user management functions

app.use("/user", require("./user"));

// search functions

app.use("/search", require("./search"));

// search functions: test

// app.use("/search/test", require("./search"));

// song management functions

app.use("/song", require("./song"));

// service playlist functions

app.use("/playlist", require("./playlist"));

// player essencial functions

app.use("/player", require("./player"));

// youtube management functions

app.use("/yt", require("./youtube"));

// user location get functions

app.use("/location", require("./location"));

// test router

app.use("/test", require("./test"));

// etc (static, or something test methods)

app.use("/", require("./default"));


export default {
    path: "/api",
    handler: app
}