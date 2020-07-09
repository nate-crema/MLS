<template>
    <div class="playArea" v-if="Object.keys(musicInfo).length > 0">
        <div class="albumCover playerSections">
            <div class="albumCoverWrap"></div>
            <img :src="musicInfo.songImg" class="albumCover" id="coverUri"/>
        </div>
        <div class="contArea playerSections">
            <div class="songInfo">
                <p class="songTitle"
                :style="{color: basecolor}">{{musicInfo.songTitle}}</p>
                <p class="songAlbum"
                :style="{color: basecolor}">{{musicInfo.albumTitle}}</p>
                <p class="songArtist"
                :style="{color: basecolor}">{{musicInfo.artist}}</p>
            </div>
            <div class="lyrics">
                <p class="lyrics-a lyricsData top">{{ designLyrics_A }}</p>
                <p class="lyrics-b lyricsData topmid">{{ designLyrics_B }}</p>
                <p class="lyrics-c lyricsData mid">{{ designLyrics_C }}</p>
                <p class="lyrics-d lyricsData midbot">{{ designLyrics_D }}</p>
                <p class="lyrics-e lyricsData bot">{{ designLyrics_E }}</p>
            </div>
            <div class="playControl">
                <div class="progress">
                    <div id="prog_p" class="progress_live"></div>
                    <div class="progress-btn"></div>
                </div>
                <div class="controller play">
                    <span class="leftPauser"></span>
                    <span class="rightPauser"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {

    data() {
        return {
            status: false,
            basecolor: "rgb(29, 42, 63)",
            musicInfo: {},
            // musicInfo: {
            //     title: "마음을 드려요",
            //     artist: "IU",
            //     melon: {
            //         SONGID: 32378104,
            //         ALBUMID: 10388744,
            //         ALBUMNAME: '사랑의 불시착 OST Part 11',
            //         coverUri: "https://cdnimg.melon.co.kr/cm2/album/images/103/88/744/10388744_20200214175740_500.jpg?edbdd3b688c5f2725769dbcf9ad270b0/melon/quality/80/optimize"
            //     },
            //     youtube: {
            //         "mimeType": "video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
            //         "qualityLabel": "360p",
            //         "bitrate": 203645,
            //         "audioBitrate": 96,
            //         "itag": 18,
            //         "width": 360,
            //         "height": 360,
            //         "lastModified": "1581983558385911",
            //         "contentLength": "7136744",
            //         "quality": "medium",
            //         "projectionType": "RECTANGULAR",
            //         "averageBitrate": 203613,
            //         "audioQuality": "AUDIO_QUALITY_LOW",
            //         "approxDurationMs": "280404",
            //         "audioSampleRate": "44100",
            //         "audioChannels": 2,
            //         "url": "https://r3---sn-3u-bh2lr.googlevideo.com/videoplayback?expire=1583135394&ei=QmZcXt_HNYH84gL3x5fgAQ&ip=183.101.93.222&id=o-AGsjQjCO2JMTqaPz5jdnv9D656LTz91oQDP4B_AikWzz&itag=140&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-3u-bh2lr%2Csn-i3belney&ms=au%2Conr&mv=m&mvi=2&pl=17&gcr=kr&initcwndbps=978750&vprv=1&mime=audio%2Fmp4&gir=yes&clen=4539161&dur=280.359&lmt=1581983496486924&mt=1583113727&fvip=3&keepalive=yes&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ABSNjpQwRQIhAJsJwlTMT9KiG9umnCsyplcBIIykpecb0rJ07L2SOfK-AiAKPc0DaLMhsL-i7Meh73mYq0RMRItbaFILpRED7zLmQQ%3D%3D&ratebypass=yes&sig=ADKhkGMwRAIgPUAkq6jgS974AK4SNNF9XmKtYOfYN80SxBAdGs7ObGECIBepgfe20y78re3Al8_LEFlFG9mykZqfEfyQEEQmhFWH",
            //         "sp": "sig",
            //         "s": "IDADKhkGMwRQIhANJYs1i1Mkm8Q18vFwMUj-_=be1m0andYwRxRBr4AFiSAiBOT1yRYDTmTGTmBLsI7Q3IOQPExdQscKUAcTtByChNhw=_",
            //         "container": "mp4",
            //         "codecs": "avc1.42001E, mp4a.40.2",
            //         "live": false,
            //         "isHLS": false,
            //         "isDashMPD": false
            //     },
            //     lyrics: [
            //         { time: 1, text: '마음을 드려요 - 아이유' },
            //         { time: 16595, text: '당신에게 드릴 게 없어서' },
            //         { time: 25027, text: '나의 마음을 드려요' },
            //         { time: 33467, text: '그대에게 받은 게 많아서' },
            //         { time: 41707, text: '표현을 다 할 수가 없어요' },
            //         { time: 50275, text: '나지막한 인사에' },
            //         { time: 54507, text: '수많은 내 마음 고이 담아' },
            //         { time: 59211, text: '그대에게로 건네면' },
            //         { time: 63491, text: '내 마음 조금 알까요' },
            //         { time: 68019, text: '어떤 이유로 만나' },
            //         { time: 72331, text: '나와 사랑을 하고' },
            //         { time: 76419, text: '어떤 이유로 내게 와' },
            //         { time: 81115, text: '함께 있어준 당신' },
            //         { time: 84947, text: '부디 행복한 날도' },
            //         { time: 89235, text: '살다 지치는 날도' },
            //         { time: 93403, text: '모두 그대의 곁에 내가' },
            //         { time: 99707, text: '있어줄 수 있길' },
            //         { time: 106601, text: ' - 연주중 - ' },
            //         { time: 119062, text: '어떤 소식 보다 더' },
            //         { time: 123342, text: '애타게 기다려지는 그대' },
            //         { time: 127964, text: '엇갈리지 않게 여기' },
            //         { time: 132060, text: '기다릴게요' },
            //         { time: 136221, text: '눌러 적은 편지에' },
            //         { time: 140468, text: '수많은 그리움 고이 담아' },
            //         { time: 145221, text: '그대 내게로 올 때면' },
            //         { time: 149388, text: '그 손에 쥐어줄게요' },
            //         { time: 153789, text: '어떤 이유로 만나' },
            //         { time: 157932, text: '나와 사랑을 하고' },
            //         { time: 162292, text: '어떤 이유로 내게 와' },
            //         { time: 166956, text: '함께 있어준 당신' },
            //         { time: 170892, text: '부디 행복한 날도' },
            //         { time: 175148, text: '살다 지치는 날도' },
            //         { time: 179349, text: '모두 그대의 곁에 내가' },
            //         { time: 185516, text: '있어줄 수 있길' },
            //         { time: 189849, text: '네 번의 모든 계절들과' },
            //         { time: 194064, text: '열두 달의 시간을 너와' },
            //         { time: 198392, text: '숨이 차게 매일' },
            //         { time: 203112, text: '사랑하며 함께 할게' },
            //         { time: 211040, text: '어떤 이유로 만나' },
            //         { time: 215337, text: '우리 사랑을 했던' },
            //         { time: 219472, text: '지금 이 순간처럼' },
            //         { time: 223552, text: '매일 바라보며' },
            //         { time: 227048, text: '애써주기를' },
            //         { time: 228441, text: '부디 행복한 날도' },
            //         { time: 232290, text: '살다 지치는 날도' },
            //         { time: 236689, text: '모두 그대의 곁에 내가' },
            //         { time: 242673, text: '있어줄 수 있길' },
            //         { time: 249369, text: '부디' },
            //         { time: 254273, text: '추억만 남지 않길 너완' },
            //         { time: 265273, text: ' ' }
            //     ]
            // },
            lyricPoint: [],
            curTime: 0,
            tTime: 0,
            subtitle: 0,
            designLyrics_A: "a",
            designLyrics_B: "b",
            designLyrics_C: "c",
            designLyrics_D: "d",
            designLyrics_E: "e"
        }
    },
    watch: {
        curTime(data) {
            // if (curTime*1000)
            const progressP = 100*data/this.tTime;
            $("#prog_p").css("width", progressP + "%");
            console.log(data);
            console.log(this);
            console.log(Math.floor(data*10));
            const index = this.lyricPoint.indexOf(Math.floor(data*10));
            console.log(index);
            if (index != -1) {
                this.changeLyrics(index);
                console.log("change: " + index);
            }
        }
    },
    methods: {
        changeLyrics: function(num) {
            const compArr = this.musicInfo.lyrics;
            switch(num%5) {
                case 1:
                    this.designLyrics_A = compArr[num].text;
                    this.designLyrics_B = num+1 < compArr.length ? compArr[num+1].text : "";
                    this.designLyrics_C = num+2 < compArr.length ? compArr[num+2].text : "";
                    this.designLyrics_D = num-2 >= 0 ? compArr[num-2].text : "";
                    this.designLyrics_E = num-1 >= 0 ? compArr[num-1].text : "";
                    if (num-1 <= 0) {
                        $(".lyrics-a").addClass("mid").removeClass("top topmid midbot bot");
                        $(".lyrics-b").addClass("midbot").removeClass("top topmid mid bot");
                        $(".lyrics-c").addClass("bot").removeClass("top topmid mid midbot");
                        $(".lyrics-d").removeClass("top topmid mid midbot bot");
                        $(".lyrics-e").removeClass("top topmid mid midbot bot");
                    } else {
                        $(".lyrics-a").addClass("mid").removeClass("top topmid midbot bot");
                        $(".lyrics-b").addClass("midbot").removeClass("top topmid mid bot");
                        $(".lyrics-c").addClass("bot").removeClass("top topmid mid midbot");
                        $(".lyrics-d").addClass("top").removeClass("topmid mid midbot bot");
                        $(".lyrics-e").addClass("topmid").removeClass("top mid midbot bot");
                    }
                    break;
                    
                case 2:
                    this.designLyrics_A = num-1 >= 0 ? compArr[num-1].text : "";
                    this.designLyrics_B = compArr[num].text;
                    this.designLyrics_C = num+1 < compArr.length ? compArr[num+1].text : "";
                    this.designLyrics_D = num+2 < compArr.length ? compArr[num+2].text : "";
                    this.designLyrics_E = num-2 >= 0 ? compArr[num-2].text : "";
                    if (num-2 <= 0) {
                        $(".lyrics-a").addClass("topmid").removeClass("top mid midbot bot");
                        $(".lyrics-b").addClass("mid").removeClass("top topmid midbot bot");
                        $(".lyrics-c").addClass("midbot").removeClass("top topmid mid bot");
                        $(".lyrics-d").addClass("bot").removeClass("top topmid mid midbot");
                        $(".lyrics-e").removeClass("top topmid mid midbot bot");
                    } else {
                        $(".lyrics-a").addClass("topmid").removeClass("top mid midbot bot");
                        $(".lyrics-b").addClass("mid").removeClass("top topmid midbot bot");
                        $(".lyrics-c").addClass("midbot").removeClass("top topmid mid bot");
                        $(".lyrics-d").addClass("bot").removeClass("top topmid mid midbot");
                        $(".lyrics-e").addClass("top").removeClass("topmid mid midbot bot");
                    }
                    break;

                case 3:
                    this.designLyrics_A = num-2 >= 0 ? compArr[num-2].text : "";
                    this.designLyrics_B = num-1 >= 0 ? compArr[num-1].text : "";
                    this.designLyrics_C = compArr[num].text;
                    this.designLyrics_D = num+1 < compArr.length ? compArr[num+1].text : "";
                    this.designLyrics_E = num+2 < compArr.length ? compArr[num+2].text : "";
                    $(".lyrics-a").addClass("top").removeClass("topmid mid midbot bot");
                    $(".lyrics-b").addClass("topmid").removeClass("top mid midbot bot");
                    $(".lyrics-c").addClass("mid").removeClass("top topmid midbot bot");
                    $(".lyrics-d").addClass("midbot").removeClass("top topmid mid bot");
                    $(".lyrics-e").addClass("bot").removeClass("top topmid mid midbot");
                    break;
                case 4:
                    this.designLyrics_A = num+2 < compArr.length ? compArr[num+2].text : "";
                    this.designLyrics_B = num-2 >= 0 ? compArr[num-2].text : "";
                    this.designLyrics_C = num-1 >= 0 ? compArr[num-1].text : "";
                    this.designLyrics_D = compArr[num].text;
                    this.designLyrics_E = num+1 < compArr.length ? compArr[num+1].text : "";
                    if (num+2 >= compArr.length-1) {
                        $(".lyrics-a").addClass("bot").removeClass("top topmid mid midbot");
                        $(".lyrics-b").removeClass("top topmid mid midbot bot");
                        $(".lyrics-c").addClass("topmid").removeClass("top mid midbot bot");
                        $(".lyrics-d").addClass("mid").removeClass("top topmid midbot bot");
                        $(".lyrics-e").addClass("midbot").removeClass("top topmid mid bot");
                    } else {
                        $(".lyrics-a").addClass("bot").removeClass("top topmid mid midbot");
                        $(".lyrics-b").addClass("top").removeClass("topmid mid midbot bot");
                        $(".lyrics-c").addClass("topmid").removeClass("top mid midbot bot");
                        $(".lyrics-d").addClass("mid").removeClass("top topmid midbot bot");
                        $(".lyrics-e").addClass("midbot").removeClass("top topmid mid bot");
                    }
                    break;
                case 0:
                default:
                    // this.designLyrics_E = compArr[num].text;
                    this.designLyrics_A = num+1 < compArr.length ? compArr[num+1].text : "";
                    this.designLyrics_B = num+2 < compArr.length ? compArr[num+2].text : "";
                    this.designLyrics_C = num-2 >= 0 ? compArr[num-2].text : "";
                    this.designLyrics_D = num-1 >= 0 ? compArr[num-1].text : "";
                    this.designLyrics_E = compArr[num].text;
                    // if (num-1 >= 0) {
                    //     $(".lyrics-a").addClass("mid").removeClass("top topmid midbot bot");
                    //     $(".lyrics-b").addClass("midbot").removeClass("top topmid mid bot");
                    //     $(".lyrics-c").addClass("bot").removeClass("top topmid mid midbot");
                    //     $(".lyrics-d").removeClass("top topmid mid midbot bot");
                    //     $(".lyrics-e").removeClass("top topmid mid midbot bot");
                    // } else {
                        $(".lyrics-a").addClass("midbot").removeClass("top topmid mid bot");
                        $(".lyrics-b").addClass("bot").removeClass("top topmid mid midbot");
                        $(".lyrics-c").addClass("top").removeClass("topmid mid midbot bot");
                        $(".lyrics-d").addClass("topmid").removeClass("top mid midbot bot");
                        $(".lyrics-e").addClass("mid").removeClass("top topmid midbot bot");
                    // }

            }
        }  
    },
    beforeMount() {
        // console.log(this);
        // console.log(filtered);
        // console.log(this.lyricPoint);
    },
    mounted() {
        
        const vId = location.pathname.split("/")[2];
        const video = document.createElement('video');
        const this_out = this;
        $(document).ready(() => {
            reqMInfo(vId)
            .then((resultMusic) => {
                this.musicInfo = resultMusic;
                const filtered = [];
                this.musicInfo.lyrics.forEach(element => {
                    filtered.push(Math.floor(element.time/100));
                });
                this.lyricPoint = filtered;
                setTimeout(() => {
                    sizeCalculation();
                    startPlay();
                }, 150);
            })
        })

        // console.log(this.musicInfo.lyrics);


        // music play functions

        // load media

        console.log(vId);

        function startPlay() {
            // video.src = this_out.musicInfo.youtube.url;
            // console.log(this_out);
            video.src = this_out.musicInfo.ytInfo.setData.url;
            // video.src = `https://www.youtube.com/watch?v=${this_out.musicInfo.ytInfo.song.videoId}`;
            // video.autoplay = true;
            video.load();
            setTimeout(() => {
                controllerFnc();
            }, 500);
            console.log(video);
            getMusicTime();
        }
        function getMusicTime() {
            this_out.curTime = video.currentTime;
            !this_out.tTime ? this_out.tTime = video.duration : "";
             setTimeout(() => {
                 getMusicTime();
             }, 100);
        }
        function reqMInfo(vId) {
            return new Promise((resolve, reject) => {
                axios.post("/api/play/songInfo", {songId: vId})
                .then(({data}) => {
                    resolve(data);
                })
                .catch((e) => {
                    reject(e);
                })
            })
        }


        // window layout functions

        // $(document).ready(() => {
        //     // controllerFnc("first");
        //     // $(".controller").click();
        // })
        $(window).resize(() => {
            sizeCalculation();
        })
        
        function sizeCalculation() {
            $(".playArea").height($(window).height());

            var img = new Image();
            img.src = document.getElementById("coverUri").getAttribute("src");
            img.onload = function() {
                let propWidth = this.width*$(window).height()/this.height;
                // console.log(propWidth > $(window).width());
                // console.log($(window).width());
                // console.log(propWidth);
                // if (propWidth + $(".contArea").width() < $(window).width()) {
                //     // $("#coverUri").css("height", "unset");
                //     // $("#coverUri").css("width", $(window).width()-$(".contArea").width());
                // }
                if (propWidth > $(window).width()) {
                    $("#coverUri").css("height", "unset");
                    $("#coverUri").css("width", $(window).width());
                    $(".contArea").css("top", "300px");
                    $(".contArea").css("width", "100%");
                    $(".contArea").css("height", $(window).height()-300 + "px");
                    $(".contArea").css("left", "0");
                    $(".contArea").css("right", "unset");
                } else {
                    $(".contArea").css("top", "0px");
                    $(".contArea").css("left", "unset");
                    $(".contArea").css("right", "0");
                    $(".contArea").css("width", "600px");
                    $(".contArea").css("height", $(window).height());
                    $(".playArea").css("display", "unset");
                    $("#coverUri").css("width", "unset");
                    $("#coverUri").css("height", $(window).height());
                }
                $(".albumCoverWrap").css("height", $("#coverUri").height());
                $(".albumCoverWrap").css("width", $("#coverUri").width());
                // console.log(propWidth);
            }
        }


        // music controller functions

        $('.controller').on('click', function() {
            controllerFnc();          
        });
        $(document).on('keyup', function(e) {
            // console.log(e.which);
            if (e.which == 32) {
                controllerFnc();
            }
        });
        $(".controller").click(() => {
            console.log("clicked");
        });
        function controllerFnc(isFirst) {
            console.log(video);
            $(".controller").toggleClass('pause play');
            // console.log(this_out.status);
            if(this_out.status) {
                this_out.status = false;
                video.pause();
            } else {
                this_out.status = true;
                video.play();
            }
        }


        // lyrics sync functions

        // checkLyrics();

    }
}
</script>

<style>

* {
    transition: all .3s cubic-bezier(0.24, 0.7, 0.4, 0.94);
}

body {
    overflow-y: hidden;
}

.playArea {
    /* display: grid; */
    /* grid-template-columns: 70% auto; */
    overflow-y: hidden;
}

.playArea div.playerSections {
    /* border: 1px solid red; */
}

.playArea .albumCover .albumCoverWrap {
    background-color: white;
    position: absolute;
    opacity: 0.6;
    z-index: 20;
}


.playArea .contArea {
    z-index: 30;
    /* background-color: rgba(255, 255, 255, 0.85); */
    background-color: white;
    width: 600px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow-y: auto;
}

.playArea .contArea .songInfo {
    width: 80%;
    height: auto;
    /* border: 1px solid purple; */
    position: relative;
    float: right;
    top: 100px;
    right: 80px;
    text-align: right;
    margin: 0;
}

.playArea .contArea .songInfo p {
    font-family: "Noto Sans KR";
}

.playArea .contArea .songInfo .songTitle {
    font-size: 36px;
    font-weight: 700;
}

.playArea .contArea .songInfo .songAlbum {
    font-size: 13px;
    font-weight: 300;
    margin-top: 10px;
}

.playArea .contArea .songInfo .songArtist {
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
}

.playArea .contArea .lyrics {
    width: 70%;
    height: 400px;
    /* border: 1px solid purple; */
    position: relative;
    top: 250px;
    right: 70px;
    float: right;
    text-align: right;
}

.playArea .contArea .lyrics .lyricsData {
    font-size: 21px;
    font-family: "Noto Sans KR";
    font-weight: 300;
    position: absolute;
    color:rgb(30, 70, 158);
    transition: all .6s cubic-bezier(0.2, 1.14, 0.6, 1.03);
}
.playArea .contArea .lyrics .lyricsData.top {
    opacity: 0.3;
    top: 20px;
    right: 0;
}
.playArea .contArea .lyrics .lyricsData.topmid {
    opacity: 0.5;
    top: 60px;
    right: 0;
}
.playArea .contArea .lyrics .lyricsData.mid {
    opacity: 1;
    font-weight: 500;
    font-size: 25px;
    top: 100px;
    right: 0;
}
.playArea .contArea .lyrics .lyricsData.midbot {
    opacity: 0.5;
    top: 140px;
    right: 0;
}
.playArea .contArea .lyrics .lyricsData.bot {
    opacity: 0.3;
    top: 180px;
    right: 0;
}




.playArea .contArea .playControl {
    width: 80%;
    height: 100px;
    /* border: 1px solid purple; */
    position: absolute;
    top: 700px;
    right: 70px;
}

.playArea .contArea .playControl .progress {
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background-color: rgb(223, 223, 223);
    position: absolute;
    top: 20px;
    right: 0;
}

.playArea .contArea .playControl .progress #prog_p {
    height: 2px;
    border-radius: 1px;
    background-color: rgb(30, 70, 158);
    float: left;
    transition: all 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}










/* Play/Pause Button Design */
/* References: https://codepen.io/s3739/pen/VwLwoQb */


.controller {
  border: 2px solid rgb(30, 70, 158);
  border-radius: 50%;
  margin: 20px;
  padding: 0px;
  width: 40px;
  height: 40px;
  font-size: 0;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  position: absolute;
  right: 100px;
  top: 10px;
}
.controller,
.controller .leftPauser,
.controller .rightPauser,
.controller:before {
  display: inline-block;
  vertical-align: middle;
  transition: border 0.4s, width 0.4s, height 0.4s, margin 0.4s cubic-bezier(1, 0, 0, 1);
  /* transition-tiomig-function: cubic-bezier(1, 0, 0, 1); */
}
.controller:before {
  content: "";
  height: 30px;
}
.controller.pause .leftPauser,
.controller.pause .rightPauser {
  margin: 0;
  border-left: 2px solid rgb(30, 70, 158);
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
  margin-top: 5px;
  height: 13.3px;
}
.controller.pause .leftPauser {
  border-right: 7px solid transparent;
}
.controller.play .leftPauser {
  margin-left: 3px;
  margin-top: 5px;
  border-left: 15px solid rgb(30, 70, 158);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 0px solid transparent;
  height: 12px;
}
.controller.play .rightPauser {
  margin: 0;
  border-left: 0 solid rgb(30, 70, 158);
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
  height: 0px;
}
.controller:hover {
  border-color: #0b1b3f;
}
.controller:hover .leftPauser,
.controller:hover .rightPauser {
  border-left-color: #0b1b3f;
}

</style>