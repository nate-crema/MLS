const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// searchYTM("아이유");

function searchYTM(searchKey) {

    return new Promise((resolve, reject) => {
        const searchData = {
            url: "https://music.youtube.com/youtubei/v1/search?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30",
            body: {
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
                "query": searchKey
            },
            headers: {
                referer: "https://music.youtube.com/search?q=%EC%95%84%EC%9D%B4%EC%9C%A0+%EB%B8%94%EB%A3%A8%EB%B0%8D"
            }
        }
    
        axios.post(searchData.url, searchData.body, {
            headers: searchData.headers
        })
        .then(({data}) => {
            // console.log(data);
            const ytData = data.contents.sectionListRenderer.contents;
            // console.log(ytData.length);
            const returnData = [];
            returnData.push({reqSearch: searchKey});
            let counter = 0;
            ytData.forEach(element => {
                // console.log("ytData" + counter++);
                // console.log(element.musicShelfRenderer.contents.length);
                let videoIds = [];
                try {
                    if (element.musicShelfRenderer.title.runs[0].text == "아티스트") {
                        // console.log(element.musicShelfRenderer.contents[0].musicResponsiveListItemRenderer.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0]);
                        const ArtistArrCont = [];
                        element.musicShelfRenderer.contents.forEach((elementArtist) => {
                            const ArtistName = elementArtist.musicResponsiveListItemRenderer.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
                            const ArtistThumbnail = elementArtist.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails;
                            const ArtistPlaylist = {};
                            elementArtist.musicResponsiveListItemRenderer.menu.menuRenderer.items.forEach((elementArtistInfo) => {
                                ArtistPlaylist[elementArtistInfo.menuNavigationItemRenderer.text.runs[0].text] = elementArtistInfo.menuNavigationItemRenderer.navigationEndpoint.watchPlaylistEndpoint
                            })
                            ArtistArrCont.push({
                                ArtistName,
                                thumbnails: ArtistThumbnail,
                                authPlayList: ArtistPlaylist
                            })
                        })
    
    
                        returnData.push({
                            title: element.musicShelfRenderer.title.runs[0].text,
                            artists: ArtistArrCont
                        })
                        
                    } else {
                        element.musicShelfRenderer.contents.forEach(elementContents => {
                            // console.log(elementContents.musicResponsiveListItemRenderer.overlay);
                            if (elementContents.musicResponsiveListItemRenderer.overlay == undefined) {
                                // console.log(elementContents); //error point: artist
                            } else {
            
                                // console.log(elementContents.musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint);
                                if (!elementContents.musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchEndpoint) videoIds.push(elementContents.musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId);
                                else videoIds.push({
                                    id: elementContents.musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchEndpoint.videoId,
                                    thumbnails: elementContents.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails,
                                });
                            }
                        })
                        if (["앨범", "재생목록"].includes(element.musicShelfRenderer.title.runs[0].text)) returnData.push({
                            title: element.musicShelfRenderer.title.runs[0].text,
                            playListId: videoIds
                        })
                        else returnData.push({
                            title: element.musicShelfRenderer.title.runs[0].text,
                            videoId: videoIds
                        })
                    }
                } catch(e) {
                    // continue;
                }
            })
            // console.log(returnData);
            resolve(returnData);
        })
        .catch((e) => {
            reject(e);
        })
    }) 
}

export default {
    searchYTM
}