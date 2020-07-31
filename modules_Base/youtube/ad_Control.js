const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");


// get ad information from videoId
getAdInfo("lXYBBC_uY-g")
    .then((data) => {
        console.log(data);
        // fs.appendFileSync(`test_lXYBBC_uY-g.json`, JSON.stringify(data), { encoding: "utf-8" });
})

function getAdInfo(videoId) { 

    return new Promise((resolve, reject) => {
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        axios.get(url)
            .then(({ data }) => {
                const A$ = cheerio.load(data);
                // const B$ = cheerio.load(A$(`body[dir="ltr"] script`)[20].children[0].data);
                // A$(`body[dir="ltr"] script`)[20].children[0].data.slice(0, -61).slice(30, -1)
                const contentBase = A$(`body[dir="ltr"] script`)[20].children[0].data.slice(0, -61);
                const substrP = contentBase.indexOf(`window["ytInitialPlayerResponse"] = {`);
                const playerResult = JSON.parse(contentBase.substr(36 + substrP, contentBase.length).replace(";", ""));
                // fs.appendFileSync(`ytInitialData.json`, contentBase.substr(31, substrP-32).replace(";", ""), { encoding: "utf-8" });
                fs.appendFileSync(`ytInitialPlayerResponse.json`, JSON.stringify(playerResult), { encoding: "utf-8" });
                // console.log(contentBase.indexOf(`window["ytInitialPlayerResponse"] = {`));
                // console.log(Object.keys(playerResult));
                
                const videoDetail = playerResult.videoDetails;
                const annotation = playerResult.annotations;
                const thumbnails = playerResult.microformat.playerMicroformatRenderer.thumbnail.thumbnails;
                const uploadDate = playerResult.uploadDate;
                const publishDate = playerResult.publishDate;
                let adPlacements = [];

                if (playerResult.adPlacements) {
                    playerResult.adPlacements.forEach((value, index) => {
                        let adPlacement = {};
                        // console.log(Object.keys(value.adPlacementRenderer.renderer));
                        if (value.adPlacementRenderer.renderer.actionCompanionAdRenderer) {
                            // video-type advertisement
                            // advertisement's contents information
                            adPlacement["advertiser"] = value.adPlacementRenderer.renderer.actionCompanionAdRenderer.headline.text;
                            adPlacement["description"] = value.adPlacementRenderer.renderer.actionCompanionAdRenderer.description.text;
                            const buttonAttributes = value.adPlacementRenderer.renderer.actionCompanionAdRenderer.actionButton;
                            adPlacement["actionButton"] = {
                                text: buttonAttributes.buttonRenderer.text.simpleText,
                                endpoint: {
                                    tracker_G: buttonAttributes.buttonRenderer.navigationEndpoint.clickTrackingParams,
                                    logger_G: buttonAttributes.buttonRenderer.navigationEndpoint.loggingUrls[0].baseUrl,
                                    advertiserURI: buttonAttributes.buttonRenderer.navigationEndpoint.urlEndpoint.url
                                },
                                tracker_G: buttonAttributes.buttonRenderer.trackParams,
                                advertiserImg: {
                                    icon: value.adPlacementRenderer.renderer.actionCompanionAdRenderer.iconImage.thumbnail.thumbnails,
                                    banner: value.adPlacementRenderer.renderer.actionCompanionAdRenderer.bannerImage.thumbnail.thumbnails
                                }
                            };
                            adPlacement["videoId"] = value.adPlacementRenderer.renderer.actionCompanionAdRenderer.adVideoId;
                            adPlacements[index] = adPlacement;
                        } else if (value.adPlacementRenderer.renderer.linearAdSequenceRenderer) {
                            // linear-type advertisement
                            // advertisement's play information
                            // console.log(value.adPlacementRenderer.renderer.linearAdSequenceRenderer)
                            // adPlacement[indexLinear]["videoId"] != valueLinear.instreamVideoAdRenderer.externalVideoId

                            value.adPlacementRenderer.renderer.linearAdSequenceRenderer.linearAds.forEach((valueLinear, indexLinear) => {
                                if (valueLinear.instreamVideoAdRenderer) {
                                    let indexer;
                                    // advertisement control links
                                    adPlacements.forEach((checker, indexchk) => {
                                        if (checker.videoId == valueLinear.instreamVideoAdRenderer.externalVideoId) indexer = indexchk;
                                    })
                                    if (typeof indexer != undefined) {
                                        console.log(adPlacements[indexer]);
                                        adPlacements[indexer]["pings"] = {
                                            // ad_mt: timestamp of ad
                                            // GOOGLE_VIEWABILITY: 
                                            // VIEWABILITY: 
                                            impression: valueLinear.instreamVideoAdRenderer.pings.impressionPings, // conn || cpn || lact || mt || p_h || p_w || RWT || vis || vol || wt || ad_cpn || ad_mt
                                            error: valueLinear.instreamVideoAdRenderer.pings.errorPings, // ERRORCODE
                                            mute: valueLinear.instreamVideoAdRenderer.pings.mutePings,
                                            unmute: valueLinear.instreamVideoAdRenderer.pings.unmtePings,
                                            pause: valueLinear.instreamVideoAdRenderer.pings.pausePings,
                                            rewind: valueLinear.instreamVideoAdRenderer.pings.rewindPings,
                                            resume: valueLinear.instreamVideoAdRenderer.pings.resumePings,
                                            skip: valueLinear.instreamVideoAdRenderer.pings.skipPings,
                                            close: valueLinear.instreamVideoAdRenderer.pings.closePings,
                                            progress: valueLinear.instreamVideoAdRenderer.pings.progressPings,
                                            clickthrough: valueLinear.instreamVideoAdRenderer.pings.clicktroughPings,
                                            fullscreen: valueLinear.instreamVideoAdRenderer.pings.fullscreenPings,
                                            activeViewViewable: valueLinear.instreamVideoAdRenderer.pings.activeViewViewablePings,
                                            endFullscreen: valueLinear.instreamVideoAdRenderer.pings.endFullscreenPings,
                                            activeViewMeasurable: valueLinear.instreamVideoAdRenderer.pings.activeViewMeasurablePings,
                                            abandon: valueLinear.instreamVideoAdRenderer.pings.abandonPings,
                                            activeViewFullyViewableAudibleHalfDuration: valueLinear.instreamVideoAdRenderer.pings.activeViewFullyViewableAudibleHalfDurationPings,
                                            complete: valueLinear.instreamVideoAdRenderer.pings.completePings
                                        };
                                        adPlacements[indexer]["playerVars"] = {};
                                        console.log(valueLinear.instreamVideoAdRenderer.playerVars);
                                        valueLinear.instreamVideoAdRenderer.playerVars.split("\u0026").forEach((pve, indexpve) => {
                                            const key = pve.split("=")[0];
                                            const value = pve.split("=")[1];
                                            adPlacements[indexer]["playerVars"][key] = value;
                                        })
                                        adPlacements[indexer]["elementId"] = valueLinear.instreamVideoAdRenderer.elementId;
                                        adPlacements[indexer]["trackingParams"] = valueLinear.instreamVideoAdRenderer.trackingParams;
                                    }
                                }
                            })
                            
                        }
    
                        if (index == playerResult.adPlacements.length - 1) {
                            resolve({
                                videoDetail,
                                annotation,
                                thumbnails,
                                uploadDate,
                                publishDate,
                                adPlacements
                            })
                        }
                    })
                }


                
    
                
                // for (var i = 0; i < $(`body[dir="ltr"] script`).length; i++) {
                //     if ($(`body[dir="ltr"] script`)[i].children[0]) fs.appendFileSync(`./test/${i}.js`, $(`body[dir="ltr"] script`)[i].children[0].data, { encoding: "utf-8" });
                //     // if ($(`body[dir="ltr"] script`)[i].children[0].data.substr(0, 27) == `window["ytInitialData"] = {`) {
                //     //     console.log(i);
                //     // }
                // }
    
    
    
    
    
                
    
                // $(`body[dir="ltr"] script`).forEach((val, index) => {
                //     if (val.children.substr(0, 27) == `window["ytInitialData"] = {`) {
                //         console.log(index);
                //     }
                // })
            })
            .catch((e) => {
                console.error(e);
        })
    })
}
