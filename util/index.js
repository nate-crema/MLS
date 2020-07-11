'use strict';

function getYear() {
    return new Date().getFullYear();
}
function getMonth() {
    var month = new Date().getMonth()+1;
    if (month < 10) {
        month = '0' + month
    }
    return month;
}
function getDate() {
    var date = new Date().getDate();
    if (date < 10) {
        date = '0' + date
    }
    return date;
}
function getHours() {
    var hour = new Date().getHours();
    if (hour < 10) {
        hour = '0' + hour
    }
    return hour;
}
function getMinutes() {
    var minute = new Date().getMinutes();
    if (minute < 10) {
        minute = '0' + minute
    }
    return minute;
}
function getSeconds() {
    var second = new Date().getSeconds();
    if (second < 10) {
        second = '0' + second
    }
    return second;
}
module.exports.getTime = (key, data) => {
    let returnobj = "";

    if (key == undefined || key == "") returnobj += getYear() + getMonth() + getDate() + "-" + getHours() + ":" + getMinutes() + ":" + getSeconds();
    else if (key == "date") returnobj += getYear() + getMonth() +
        getDate();
    else if (key == "time") returnobj += getHours() + ":" + getMinutes() + ":" + getSeconds();
    else {
        option = data.split(",");
        
        if (option.includes("year")) returnobj += getYear();
        if (option.includes("month")) returnobj += getMonth();
        if (option.includes("date")) returnobj += getDate();
        if (option.includes("hour")) returnobj == "" ? returnobj += getHours() + ":" : returnobj += "-" + getHours() + ":";
        if (option.includes("minute")) returnobj += getMinutes() + ":";
        if (option.includes("second")) returnobj += getSeconds();
    }

    return returnobj;
}

module.exports.calcTime = (baseTime, operator, seconds) => {
    let date = new Date(baseTime);
    switch (operator) {
        case "+":
            date.setSeconds(date.getSeconds() + seconds);
            return date;
    }
}

module.exports.compTime = (A, B) => {
    const a_Time = new Date(A);
    const b_Time = new Date(B);

    if (a_Time.getTime() - b_Time.getTime() > 0) return A;
    else return B;
}

// Origin: http://mwultong.blogspot.com/2007/01/isnum-isnumeric-isnumber-javascript.html

module.exports.isNumber = (s) => {
    s += ''; // 문자열로 변환
    s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
    if (s == '' || isNaN(s)) return false;
    return true;
  }


// Origin: https://github.com/awais786327/oauth2orize-examples

/**
 * Return a unique identifier with the given `len`.
 *
 * @param {Number} length
 * @return {String}
 * @api private
 */
module.exports.getUid = function (length, isNumOnly) {
    let chars;
    if (isNumOnly) chars = '0123456789';
    else chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uid = '';
    const charsLength = chars.length;
  
    for (let i = 0; i < length; ++i) {
      uid += chars[getRandomInt(0, charsLength - 1)];
    }
  
    return uid;
  };
  
  /**
   * Return a random int, used by `utils.getUid()`.
   *
   * @param {Number} min
   * @param {Number} max
   * @return {Number}
   * @api private
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




module.exports.fncRegular = function (timeType, periodNum, timeValue, reservFnc) {
    // timeType: periodic | specific | onetime
    switch (timeType) {
        case "periodic":
            
            if (periodNum == undefined || !timeValue || !reservFnc) {
                return new Error("Function values isn't valid.");
            } else if (typeof periodNum != "number") {
                return new Error(`value 'periodNum' requires type 'number', but type ${typeof periodNum} comes in.`);
            } else {
                if (periodNum == 0) {
                    // looping function
                    // timeValue: interval time (milisecond)
                    function loopFnc() {
                        return new Promise((resolve, reject) => {
                            try {
                                console.log("start!");
                                setTimeout(function () {
                                    reservFnc();
                                    resolve(loopFnc());
                                }, timeValue);
                            } catch (e) {
                                reject(e);
                            }
                        })
                    }
                    loopFnc();
                    // setTimeout(loopFnc(), timeValue);
                    return `Function successfully registered. Function will run ${new Date(Date.now() + timeValue)} at first`;
                } else {
                    // period count setted
                    // looping function (while counter > 0);
                    // timeValue: interval time (milisecond)
                    function loopFnc(counter) {
                        return new Promise((resolve, reject) => {
                            try {
                                // console.log("start!");
                                setTimeout(function () {
                                    reservFnc();
                                    if (counter > 1) resolve(loopFnc(counter - 1));
                                    else resolve("fncRegular: Complete");
                                }, timeValue);
                            } catch (e) {
                                reject(e);
                            }
                        })
                    }
                    loopFnc(periodNum);
                    return `Function successfully registered. Function will run ${new Date(Date.now() + timeValue)} at first, and end after function runs ${periodNum} time${periodNum == 1 ? '' : 's'}`;
                }
            }

            break;
            
        case "specific":
            /*

            timeValue: Object {
                optionSetter: HH/MM/SS,
                optionValue
            }

            */

            if (periodNum == undefined || !timeValue || !reservFnc) {
                return new Error("Function values isn't valid.");
            } else if (typeof periodNum != "number") {
                return new Error(`value 'periodNum' requires type 'number', but type ${typeof periodNum} comes in.`);
            } else {
                if (periodNum == 0) {
                    // looping function

                    let intervalTime = 0;

                    function loopFnc() {
                        return new Promise((resolve, reject) => {
                            try {
                                console.log("start!");
                                reservFnc();
                                setTimeout(function () {
                                    resolve(loopFnc());
                                }, intervalTime);
                            } catch (e) {
                                reject(e);
                            }
                        })
                    }

                    // function starttime
                    let startInterval;
                    let startTime;
                    const baseTime = new Date();
                    const Year = baseTime.getFullYear();
                    const Month = baseTime.getMonth();
                    const Day = baseTime.getDate();
                    const Hours = baseTime.getHours();
                    const Minutes = baseTime.getMinutes();
                    const Seconds = baseTime.getSeconds();

                    // function run interval
                    switch (timeValue.optionSetter) {
                        case "TT":
                            intervalTime = 24 * 60 * 60 * 1000;
                            startTime = new Date(Year, Month, Day, timeValue.optionValue, Minutes, Seconds);
                            startInterval = startTime.getTime() - new Date().getTime();
                            if (startInterval < 0) {
                                startTime = new Date(Year, Month, Day+1, timeValue.optionValue, Minutes, Seconds);
                                startInterval = startTime.getTime() - new Date().getTime();
                            }
                            break;
                        case "MM":
                            intervalTime = 60 * 60 * 1000;
                            startTime = new Date(Year, Month, Day, Hours, timeValue.optionValue, Seconds);
                            startInterval = startTime.getTime() - new Date().getTime();
                            if (startInterval < 0) {
                                startTime = new Date(Year, Month, Day, Hours+1, timeValue.optionValue, Seconds);
                                startInterval = startTime.getTime() - new Date().getTime();
                            }
                            break;
                        case "SS":
                            intervalTime = 60000;
                            startTime = new Date(Year, Month, Day, Hours, Minutes, timeValue.optionValue);
                            startInterval = startTime.getTime() - new Date().getTime();
                            if (startInterval < 0) {
                                startTime = new Date(Year, Month, Day, Hours, Minutes+1, timeValue.optionValue);
                                startInterval = startTime.getTime() - new Date().getTime();
                            }
                            break;
                        default:
                            return;
                            break;
                    }
                    // startInterval < 0 ? startInterval *= new Date(Year, Month, Day, Hours, Minutes, Seconds) : startInterval; 

                    setTimeout(() => {
                        loopFnc();
                    }, startInterval);
                    // setTimeout(loopFnc(), timeValue);
                    return `Function successfully registered. Function will run ${startTime} at first (startInterval: ${startInterval} / loopInterval: ${intervalTime})`;
                } else {
                    // period count setted
                    // looping function (while counter > 0);
                    let intervalTime = 0;

                    function loopFnc(counter) {
                        return new Promise((resolve, reject) => {
                            try {
                                console.log("start!");
                                reservFnc();
                                if (counter > 1) setTimeout(function () {
                                    resolve(loopFnc(counter-1));
                                }, intervalTime);
                                else resolve("fncRegular: Complete");
                            } catch (e) {
                                reject(e);
                            }
                        })
                    }

                    // function starttime
                    let startInterval;
                    let startTime;
                    const baseTime = new Date();
                    const Year = baseTime.getFullYear();
                    const Month = baseTime.getMonth();
                    const Day = baseTime.getDate();
                    const Hours = baseTime.getHours();
                    const Minutes = baseTime.getMinutes();
                    const Seconds = baseTime.getSeconds();

                    // function run interval
                    switch (timeValue.optionSetter) {
                        case "TT":
                            intervalTime = 24 * 60 * 60 * 1000;
                            startTime = new Date(Year, Month, Day, timeValue.optionValue, Minutes, Seconds);
                            startInterval = startTime.getTime() - new Date().getTime();
                            if (startInterval < 0) {
                                startTime = new Date(Year, Month, Day+1, timeValue.optionValue, Minutes, Seconds);
                                startInterval = startTime.getTime() - new Date().getTime();
                            }
                            break;
                        case "MM":
                            intervalTime = 60 * 60 * 1000;
                            startTime = new Date(Year, Month, Day, Hours, timeValue.optionValue, Seconds);
                            startInterval = startTime.getTime() - new Date().getTime();
                            if (startInterval < 0) {
                                startTime = new Date(Year, Month, Day, Hours+1, timeValue.optionValue, Seconds);
                                startInterval = startTime.getTime() - new Date().getTime();
                            }
                            break;
                        case "SS":
                            intervalTime = 60000;
                            startTime = new Date(Year, Month, Day, Hours, Minutes, timeValue.optionValue);
                            startInterval = startTime.getTime() - new Date().getTime();
                            if (startInterval < 0) {
                                startTime = new Date(Year, Month, Day, Hours, Minutes+1, timeValue.optionValue);
                                startInterval = startTime.getTime() - new Date().getTime();
                            }
                            break;
                        default:
                            return;
                            break;
                    }
                    // startInterval < 0 ? startInterval *= new Date(Year, Month, Day, Hours, Minutes, Seconds) : startInterval; 

                    setTimeout(() => {
                        loopFnc(periodNum);
                    }, startInterval);
                    return `Function successfully registered. Function will run ${startTime} at first, and end after function runs ${periodNum} time${periodNum == 1 ? '' : 's'}`;
                }
            }
            

            break;
        
        case "onetime":

            // timeValue: YYYYMMDDHHMMSS

            // reference: https://today-hello.tistory.com/13
            if (!timeValue || !reservFnc) {
                return new Error("Function values isn't valid.");
            } else if (periodNum) {
                return new Error(`fncRegular Type '${timeType}' doesn't support both 'timeType' option and 'periodNum' option`);
            } else if (typeof timeValue != "string") {
                return new Error(`value 'timeValue' requires type 'string', but type ${typeof periodNum} comes in.`);
            } else {
                var year = Number(timeValue.substring(0, 4));
                var month = Number(timeValue.substring(4, 6));
                var day = Number(timeValue.substring(6, 8));
                var time = Number(timeValue.substring(8, 10));
                var minute = Number(timeValue.substring(10, 12));
                var second = Number(timeValue.substring(12, 14));
            
                var oprDate = new Date(year, month-1, day, time, minute, second); //동작을 원하는 시간의 Date 객체를 생성합니다.
                var nowDate = new Date();
            
                var timer = oprDate.getTime() - nowDate.getTime(); //동작시간의 밀리세컨과 현재시간의 밀리세컨의 차이를 계산합니다.
                if (timer < 0) { //타이머가 0보다 작으면 함수를 종료합니다.
                    return new Error(`Module Started time (${nowDate}) is later than function start time (${oprDate})`);
                } else {
                    setTimeout(reservFnc, timer);
                    return `Function successfully registered. Function will run ${new Date(nowDate.getTime() + timer)} at first`;
                }
            }

            break;
        
        default:
            break;
    }
}