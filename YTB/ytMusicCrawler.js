const axios = require("axios");
const fs = require("fs");
const path = require("path");

const body = {
    "context": {
        "client": {
            "clientName": "WEB_REMIX",
            "clientVersion": "0.1",
            "hl": "ko",
            "gl": "KR",
            "experimentIds": [],
            "experimentsToken": "",
            "utcOffsetMinutes": 540,
            "locationInfo": {
                "locationPermissionAuthorizationStatus": "LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"
            },
            "musicAppInfo": {
                "musicActivityMasterSwitch": "MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",
                "musicLocationMasterSwitch": "MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE",
                "pwaInstallabilityStatus": "PWA_INSTALLABILITY_STATUS_UNKNOWN"
            }
        },
        "capabilities": {},
        "request": {
            "internalExperimentFlags": [
                {
                    "key": "force_music_enable_outertube_tastebuilder_browse",
                    "value": "true"
                },
                {
                    "key": "force_music_enable_outertube_playlist_detail_browse",
                    "value": "true"
                },
                {
                    "key": "force_music_enable_outertube_search_suggestions",
                    "value": "true"
                }
            ],
            "sessionIndex": {}
        },
        "clickTracking": {
            "clickTrackingParams": "IhMIvsqL9o-a6AIVGFxYCh3L0wF6MghleHRlcm5hbA=="
        },
        "activePlayers": {},
        "user": {
            "enableSafetyMode": false
        }
    },
    "query": "아이유 시간의 바깥"
}

const url = "https://music.youtube.com/youtubei/v1/search?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30";

axios.post(url, body, {
    headers: {
        referer: "https://music.youtube.com/search?q=%EC%95%84%EC%9D%B4%EC%9C%A0+%EB%B8%94%EB%A3%A8%EB%B0%8D"
    }
})
.then(({data}) => {
    fs.writeFileSync(path.join(__dirname, "./ytMusicSearchResult.json"), JSON.stringify(data), {encoding: "utf8"});
})