const axios = require('axios');
const CryptoJS = require("crypto-js");
const fs = require("fs");
const path = require("path");
const async = require("async");

const NCP_API = JSON.parse(fs.readFileSync(path.join(__dirname, "../", "/../security/NCPAuth.json"), { encoding: "UTF-8" }));

const timeStamp = Math.floor(+new Date).toString();

function getGeoLoc(req) {
    return new Promise((resolve, reject) => {
        if (!req.ip || !req.body.geo) reject(false);
        const ip = (req.body && req.body.ip != undefined) ? req.body.ip : req.ip;
        console.log(`Location check requested from ${req.url}. Searching ${ip} || isSame: ${req.url == ip}`);
            
        async.waterfall([
            // (callback) => {
            //     const Traceroute = require('nodejs-traceroute');
 
            //     try {
            //         const tracer = new Traceroute();
            //         tracer
            //             .on('pid', (pid) => {
            //                 console.log(`pid: ${pid}`);
            //             })
            //             .on('destination', (destination) => {
            //                 console.log(`destination: ${destination}`);
            //             })
            //             .on('hop', (hop) => {
            //                 console.log(`hop: ${JSON.stringify(hop)}`);
            //             })
            //             .on('close', (code) => {
            //                 console.log(`close: code ${code}`);
            //                 callback(null, "test");
            //             });
                
            //         tracer.trace("google.com");
            //     } catch (ex) {
            //         console.log(ex);
            //     }
            // },
            (callback) => {
                // NCP API - IP Tracking

                const requestMethod = "GET";
                const hostName = 'https://geolocation.apigw.ntruss.com'
                const requestUrl = '/geolocation/v2/geoLocation'
                

                const sortedSet = {};
                sortedSet["ip"] = ip;
                sortedSet["ext"] = "t";
                sortedSet["responseFormatType"] = "json";

                const access_key = NCP_API.common.accKeyId;
                const secret_key = NCP_API.common.secretKey;
            
                let queryString = Object.keys(sortedSet).reduce( (prev, curr)=>{
                    return prev + curr + '=' + sortedSet[curr] + '&';
                }, "");
            
                queryString = queryString.substr(0, queryString.length -1 );
            
                const baseString = requestUrl + "?" + queryString;
                const signature = makeSignature(secret_key, requestMethod, baseString, timeStamp, access_key);
            
                const config = {
                    headers: {
                        'x-ncp-apigw-timestamp': timeStamp,
                        'x-ncp-iam-access-key' : access_key,
                        'x-ncp-apigw-signature-v2': signature
                    }
                }
            
                axios.get(`${hostName}${baseString}`, config)
                    .then(({ data }) => {
                        // console.log(data);
                        callback(null, data);
                    })
                    .catch(e => callback(e));
            },
            (ipTrack, callback) => {
                // VWorld API - Reverse 

                const APIKEYF = JSON.parse(fs.readFileSync(path.join(__dirname, "../../security/vworld.json"), { encoding: "utf-8" }));
                // console.log(APIKEYF);
                const APIKEY = APIKEYF.key;
                const route = `http://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&format=json&type=both&zipcode=true&simple=false&key=${APIKEY}&`

                const sortedSet = {};
                sortedSet["crs"] = "epsg:4326";
                sortedSet["point"] = `${(req.body.geo ? req.body.geo.coords.longitude : ipTrack.geoLocation.long)},${(req.body.geo ? req.body.geo.coords.latitude : ipTrack.geoLocation.lat)}`;
            
                let queryString = Object.keys(sortedSet).reduce( (prev, curr)=>{
                    return prev + curr + '=' + sortedSet[curr] + '&';
                }, "");
            
                queryString = queryString.substr(0, queryString.length -1 );

                // console.log(`${route}${queryString}`);
                axios.get(`${route}${queryString}`)
                    .then(({ data }) => {
                        // console.log(data.response.result);
                        callback(null, {ipTrack, specific: data.response.result});
                    })
                    .catch(e => callback(e));
            }
        ], (err, result) => {
                if (err) reject(err);
                resolve(result);
        })
    })
}

function makeSignature(secretKey, method, baseString, timestamp, accessKey) {
    const space = " ";
    const newLine = "\n";
    let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

    hmac.update(method);
    hmac.update(space);
    hmac.update(baseString);
    hmac.update(newLine);
    hmac.update(timestamp);
    hmac.update(newLine);
    hmac.update(accessKey);
    const hash = hmac.finalize();

    return hash.toString(CryptoJS.enc.Base64);
}


getGeoLoc({
    ip: "121.170.91.130",
    url: "test",
    body: {
        geo: {
            coords: {
                accuracy: 199773,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                latitude: 37.340514299999995,
                longitude: 126.83578220000001,
                speed: null
            }
        }
    }
})
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        // console.error(e.response.data);
        console.error(e);
})
