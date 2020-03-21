import bodyParser from "body-parser";
import session from "express-session";

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mls',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Music List Sync service' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js" },
      { src: "https://unpkg.com/hangul-js" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap' }
    ]
  },
  /*
  ** Base CSS settings
  */
  css: [
    'assets/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: 'rgb(30, 70, 158)',       // 색상
    height: '10px',          // 높이
    failedColor: '#d43c6d', // 전환 오류 발생 시, 색상
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    bodyParser.urlencoded(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 6 * 60 * 60 * 1000 }
    }),
    // Api middleware
    '~/api'
  ]
}

