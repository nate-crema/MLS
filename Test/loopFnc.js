const util = require("../util");

// console.log("efrgfh");
const timer = util.fncRegular("onetime", null, "20200711204820", function () {
    console.log("test!");
    console.log(new Date());
});
console.log(timer);