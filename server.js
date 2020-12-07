// import http from 'http'
const http = require("http");

// import { Nuxt, Builder } from 'nuxt'
const Nuxt = require("nuxt").Nuxt;
const Builder = require("nuxt").Builder;

// import express from 'express'
// import SocketIO from 'socket.io'

const express = require("express");
const SocketIO = require("socket.io");

const port = process.env.PORT || 3000;
const ip = process.env.HOST || "127.0.0.1";
const isProd = process.env.NODE_ENV === 'production'

const app = express()
const server = http.createServer(app)
const io = SocketIO(server)

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
config.dev = !isProd

const nuxt = new Nuxt(config)
// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)

// Listen the server
server.listen(port, ip)
console.log(`socket.io server mode started`)
console.log(`Server listening on ${ip}:${port}`) // eslint-disable-line no-console

// Socket.io
const messages = []
io.on('connection', (socket) => {
    socket.on('adminSet', function (data) {
        
    })
})