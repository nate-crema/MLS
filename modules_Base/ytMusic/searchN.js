const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// searchYTM("사랑하게 될 줄 알았어", "*");

function searchYTM(searchKey, filter) {

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

        let sendData = {};

        switch (filter) {
            case "title":
                sendData.title = {};
            case "artist":
                sendData.artist = {};
            case "lyrics":
                sendData.lyrics = {};
            case "album":
                sendData.album = {};
            default:
                sendData = {
                    title: {},
                    artist: {},
                    lyrics: {},
                    album: {}
                }
        }
    
        axios.post(searchData.url, searchData.body, {
            headers: searchData.headers
        })
        .then(({data}) => {
            fs.appendFileSync("test.json", JSON.stringify(data.contents.sectionListRenderer.contents));
            // console.log(data);
            const ytData = data.contents.sectionListRenderer.contents;
            // console.log(ytData);
            let songObjs = [];
            let videoObjs = [];
            let artistObjs = [];
            let albumObjs = [];
            try {
                ytData.forEach((value, index) => {
                    // console.log(songs);
                    if (value.musicShelfRenderer.title) switch (value.musicShelfRenderer.title.runs[0].text) {
                        case "노래":
                            const songs = value.musicShelfRenderer.contents;
                            songs.forEach((song, index) => {
                                let songObj = {
                                    song: {},
                                    singer: {},
                                    album: {}
                                }
                                // console.log(song);
                                songObj.song.videoId = song.musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchEndpoint.videoId;
                                songObj.song.servicePlaypage = `https://music.youtube.com/watch?v=${song.musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchEndpoint.videoId}&list=${song.musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchEndpoint.playlistId}`;
                                let dataObj = song.musicResponsiveListItemRenderer.flexColumns;
                                // console.log(dataObj);
                                dataObj.forEach((specData, specIndex) => {
                                    // console.log(specData);
                                    let contData = specData.musicResponsiveListItemFlexColumnRenderer;
                                    switch (specIndex) {
                                        case 0:
                                            songObj.song.title = contData.text.runs[0].text;
                                            break;
                                        case 2:
                                            songObj.singer.name = contData.text.runs[0].text;
                                            songObj.singer.servicePageId = contData.text.runs[0].navigationEndpoint.browseEndpoint.browseId;
                                            songObj.singer.servicePageURL = "https://music.youtube.com/channel/" + contData.text.runs[0].navigationEndpoint.browseEndpoint.browseId;
                                            break;
                                        case 3:
                                            songObj.album.name = contData.text.runs[0].text;
                                            songObj.album.servicePageId = contData.text.runs[0].navigationEndpoint.browseEndpoint.browseId;
                                            songObj.album.servicePageURL = "https://music.youtube.com/browse/" + contData.text.runs[0].navigationEndpoint.browseEndpoint.browseId;
                                            break;
                                        case 4:
                                            songObj.song.duration = contData.text.runs[0].text;
                                            break;
                                        default:
                                            break;
                                    }
                                })
                                // console.log(value.musicShelfRenderer.title);
                                let thumbnailObj = song.musicResponsiveListItemRenderer.thumbnail;
                                songObj.song.thumbnail = thumbnailObj.musicThumbnailRenderer.thumbnail.thumbnails;
    
                                songObjs.push(songObj);
                            })
                            break;
                        case "동영상":
                            const videos = value.musicShelfRenderer.contents;
                            videos.forEach((video, index) => {
                                let videoObj = {}
                                // console.log(song);
                                let dataObj = video.musicResponsiveListItemRenderer.flexColumns;
                                // console.log(dataObj);
                                dataObj.forEach((specData, specIndex) => {
                                    // console.log(specData);
                                    let contData = specData.musicResponsiveListItemFlexColumnRenderer;
                                    switch (specIndex) {
                                        case 0:
                                            videoObj.title = contData.text.runs[0].text;
                                            break;
                                        case 2:
                                            videoObj.uploader = contData.text.runs[0].text;
                                            // videoObj.servicePageId = contData.text.runs[0].navigationEndpoint.browseEndpoint.browseId;
                                            // videoObj.servicePageURL = "https://music.youtube.com/channel/" + contData.text.runs[0].navigationEndpoint.browseEndpoint.browseId;
                                            break;
                                        case 3:
                                            var viewcount = contData.text.runs[0].text.replace("조회수 ", "").replace("회", "");
                                            videoObj.viewCount = viewcount;
                                            viewcount.includes("만") ? videoObj.viewCountConvert = viewcount.replace("만", "") * 10000 : viewcount;
                                            break;
                                        case 4:
                                            videoObj.duration = contData.text.runs[0].text;
                                            break;
                                        default:
                                            break;
                                    }
                                })
                                // console.log(value.musicShelfRenderer.title);
                                let thumbnailObj = video.musicResponsiveListItemRenderer.thumbnail;
                                videoObj.thumbnail = thumbnailObj.musicThumbnailRenderer.thumbnail.thumbnails;
    
                                videoObjs.push(videoObj);
                            })
                            break;
                        case "아티스트":
                            const artists = value.musicShelfRenderer.contents;
                            artists.forEach((artist, index) => {
                                let artistObj = {}
                                // console.log(song);
                                let dataObj = artist.musicResponsiveListItemRenderer.flexColumns;
                                // let menuObj = artist.musicResponsiveListItemRenderer.menu.items;
                                // console.log(dataObj);
                                dataObj.forEach((specData, specIndex) => {
                                    // console.log(specData);
                                    let contData = specData.musicResponsiveListItemFlexColumnRenderer;
                                    switch (specIndex) {
                                        case 0:
                                            artistObj.name = contData.text.runs[0].text;
                                            break;
                                        case 2:
                                            if (contData.text) {
                                                artistObj.subscriber = contData.text.runs[0].text.replace("구독자 ", "").replace("명", "");
                                                artistObj.subscriberConvert = artistObj.subscriber.replace("만", "") * 10000;
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                })
                                // menuObj.forEach((menuCont, index) => {
                                //     switch (index) {
                                //         case 0:
                                //             // artistObj.artistMix = menuCont.navigationEndpoint.watchPlaylistEndpoint.playlistId;
                                //             break;
                                //     }
                                // })
                                artistObj.servicePageId = artist.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint.browseId;
                                artistObj.servicePageURL = `https://music.youtube.com/channel/${artist.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint.browseId}`;
    
                                let thumbnailObj = artist.musicResponsiveListItemRenderer.thumbnail;
                                artistObj.thumbnail = thumbnailObj.musicThumbnailRenderer.thumbnail.thumbnails;
    
                                artistObjs.push(artistObj);
                            })
                            break;
                        case "앨범":
                            const albums = value.musicShelfRenderer.contents;
                            albums.forEach((album, index) => {
                                let albumObj = {}
                                // console.log(song);
                                let dataObj = album.musicResponsiveListItemRenderer.flexColumns;
                                // let menuObj = album.musicResponsiveListItemRenderer.menu.items;
                                // console.log(dataObj);
                                dataObj.forEach((specData, specIndex) => {
                                    // console.log(specData);
                                    let contData = specData.musicResponsiveListItemFlexColumnRenderer;
                                    switch (specIndex) {
                                        case 0:
                                            albumObj.title = contData.text.runs[0].text;
                                            break;
                                        case 1:
                                            albumObj.type = contData.text.runs[0].text;
                                            break;
                                        case 2:
                                            albumObj.artist = contData.text.runs[0].text;
                                            break;
                                        case 3:
                                            albumObj.openDate = contData.text.runs[0].text;
                                            break;
                                        default:
                                            break;
                                    }
                                    // console.log(Object.keys(album.musicResponsiveListItemRenderer));
                                    if (album.musicResponsiveListItemRenderer.overlay) {
                                        albumObj.albumId = album.musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId;
                                        albumObj.albumURL = `https://music.youtube.com/playlist?list=${albumObj.albumId}`;
                                    }
                                })
                                // menuObj.forEach((menuCont, index) => {
                                //     switch (index) {
                                //         case 0:
                                //             // albumObj.albumMix = menuCont.navigationEndpoint.watchPlaylistEndpoint.playlistId;
                                //             break;
                                //     }
                                // })
                                albumObj.servicePageId = album.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint.browseId;
                                albumObj.servicePageURL = `https://music.youtube.com/channel/${album.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint.browseId}`;
    
                                let thumbnailObj = album.musicResponsiveListItemRenderer.thumbnail;
                                albumObj.thumbnail = thumbnailObj.musicThumbnailRenderer.thumbnail.thumbnails;
    
                                albumObjs.push(albumObj);
                            })
                        case "재생목록":
                        default: break;
                    }
    
                    if (index == ytData.length - 1) { //end
                        // console.log(songObjs);
                        // console.log(videoObjs);
                        // console.log(artistObjs);
                        // console.log(albumObjs);
                        
                        // fs.appendFileSync("result.json", JSON.stringify({
                        //     songObjs: songObjs,
                        //     videoObjs: videoObjs,
                        //     artistObjs: artistObjs,
                        //     albumObjs: albumObjs
                        // }));
                        resolve({
                            songObjs,
                            videoObjs,
                            artistObjs,
                            albumObjs
                        });
                    }
                });
            } catch (e) {
                fs.appendFileSync("bugData-" + Date.now() + "YTM.html", data, { encoding: "UTF-8" });
                reject(e);
             }

        })
        .catch((e) => {
            reject(e);
        })
    }) 
}

export default {
    searchYTM
}