import express from 'express';
import { getPList, getListInfo } from "../../modules";

// Create express router
const app = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()

app.use((req, res, next) => {
  Object.setPrototypeOf(req, express().request)
  Object.setPrototypeOf(res, express().response)
  req.res = res
  res.req = req
  next()
})


app.get('/', (req, res) => {
    console.log("This is api");
    res.end("HI");
})


export default {
    path: "/api",
    handler: app
}