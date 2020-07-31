const axios = require("axios");
const fs = require("fs");
const path = require("path");


const url = "https://www.youtube.com/watch?v=9SuuJZaAJeA";


axios.get(url)
    .then(({ data }) => {
        fs.appendFileSync(path.join(__dirname, `../${url.substr(8, 5)}.html`), data, { encoding: "utf-8" });
})