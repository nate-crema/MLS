const mongoose = require("mongoose");

const log = new mongoose.Schema({
    pn: {
        type: String,
        required: true
    },
    enccode: {
        type: String,
        required: true
    },
    cusId: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    codeG: {
        type: String
    },
    tokenG: {
        type: String
    },
    refTokenG: {
        type: String,
    },
    salt: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    isUpdateable: {
        type: Number,
        required: true
    },
});
module.exports = mongoose.model("user", log);