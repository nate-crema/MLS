<template>
  <div id="bottomPlayer">
      <div class="progBar" id="progBar">
        <div class="progBtn" id="prog_pBtn"></div>
        <div class="progCol" id="prog_p"></div>
      </div>
      <div class="imgArea" id="imgArea"
      :style="{backgroundImage: `url(${musicInfo.songImg ? musicInfo.songImg : '/resource/cd.svg'})`}"></div>
      <p class="songTitle">{{musicInfo.songTitle ? musicInfo.songTitle : "음악을 선택해보세요!"}}</p>
      <p class="lyrics">{{musicInfo.songTitle ? (lyricsThis ? lyricsThis : "가사가 없는 노래입니다.") : "음악을 선택하면 음악이 동시에 재생됩니다."}}</p>
  </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            songId: this.$store.state.songPlayer.songId,
            img: "",
            status: false,
            basecolor: "rgb(29, 42, 63)",
            musicInfo: {},
            lyricPoint: [],
            lyricsThis: "",
            curTime: 0,
            tTime: 0,
            subtitle: 0,
            designLyrics_A: "a",
            designLyrics_B: "b",
            designLyrics_C: "c",
            designLyrics_D: "d",
            designLyrics_E: "e",
            auto_timebarmove: true
        }
    },
    watch: {
        curTime(data) {
            // if (curTime*1000)
            const progressP = 100*data/this.tTime;
            if (this.auto_timebarmove) {
              $("#prog_p").css("width", progressP + "%");
              $("#prog_pBtn").css("left", progressP-1 + "%");
            }
            // console.log(data);
            // console.log(this);
            // console.log(Math.floor(data*10));
            const index = this.lyricPoint.indexOf(Math.floor(data*10));
            // console.log(index);
            if (index != -1) {
                this.changeLyrics(index);
                console.log("change: " + index);
            }
        }
    },
    methods: {
        mobileCheck: function() {
            let check = false;
            (function(a){
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
        changeLyrics: function(num) {
            const compArr = this.musicInfo.lyrics;
            $(".lyrics").css("opacity", 0);
            setTimeout(() => {
              this.lyricsThis = this.musicInfo.lyrics[num].text;
              setTimeout(() => {
                $(".lyrics").css("opacity", 1);
              }, 50);
            }, 200);
        },
        refreshState: function() {
          // console.log(this.songid);
          this.songId = this.$store.state.songPlayer.songId;
          setTimeout(() => {
            refreshState();
          }, 100);
        }
    },
    created() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.payload && mutation.payload.songId) {
          this.songId = mutation.payload.songId;
        }
      })
    },
    mounted() {
        
        let vId = this.songId;
        const video = document.createElement('video');
        const this_out = this;

        let prev = vId;

        function chkcng() {
          if (prev != this_out.songId) {
            prev = this_out.songId;
            playLoad();
          }
          setTimeout(() => {
            chkcng();
          }, 100);
        }

        $(document).ready(() => {
          chkcng();
          console.log(prev);
          console.log(this_out.songId);
          if (this_out.songId != "") {
            playLoad();
          }
        })

        

        function playLoad() {
          console.log(this_out.songId);
          reqMInfo(this_out.songId)
          .then((resultMusic) => {
              this_out.musicInfo = resultMusic;
              const filtered = [];
              if (this_out.musicInfo.lyricsId) {
                this_out.musicInfo.lyrics.forEach(element => {
                  filtered.push(Math.floor(element.time/100));
                });
              }
              console.log(this_out.musicInfo);
              this_out.lyricPoint = filtered;
              // document.getElementById("imgArea").style.backgroundImage = this_out.musicInfo.songImg;
              this_out.img = this_out.musicInfo.songImg;
              setTimeout(() => {
                  this_out.$store.commit("songStat", { stat: true });
                  startPlay();
              }, 150);
          })
        }
        

        // console.log(this.musicInfo.lyrics);


        // music play functions

        // load media

        console.log(this.songId);

        function startPlay() {
            // video.src = this_out.musicInfo.youtube.url;
            // console.log(this_out);
            video.src = this_out.musicInfo.ytInfo.setData.url;
            // video.src = `https://www.youtube.com/watch?v=${this_out.musicInfo.ytInfo.song.videoId}`;
            // video.autoplay = true;
            video.load();
            video.controls = true;
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


        // music controller functions
        $("#progBar").on({
          mousedown: function(event) {
            // changeBtnLoc(event);
            console.log("mousedown");
            console.log(event.offsetX);
            // console.log(event.offsetX);
            // document.getElementById("progBar").addEventListener("mousemove", dotControlCng); 
          },
          mouseup: function(event) {
            // console.log(video.currentTime);
            // console.log(event.offsetX);
            // console.log((event.offsetX/$("#prog_pBtn").width()));
            console.log(`ct: ${video.currentTime}`);
            console.log(`cp: ${event.offsetX}`);
            console.log(`width: ${$("#progBar").width()}`);
            console.log(`cpercent: ${(event.offsetX)/($("#progBar").width())*100}`);
            video.currentTime = ((event.offsetX)/($("#progBar").width()))*video.duration;
            // document.getElementById("progBar").removeEventListener("mousemove", dotControlCng); 
            console.log("mouseup");
            // console.log(video)
          }
        });

        // function changeBtnLoc(event) {
        //   $("#prog_pBtn").css("left", event.offsetX);
        //   setTimeout(() => {
        //     if ($("#progBar").on('mousedown')) {
        //       changeBtnLoc(event);
        //     }
        //   }, 100);
        // }
        // $("#progBar").on('click', function(event) {
        //   // move song position
          
        //   // get cursor location 
        //   console.log(event.pageX);

        //   $("#prog_pBtn").css("left", event.pageX);
        // })
        $('.controller').on('click', function() {
            controllerFnc();          
        });
        $(document).on('keyup', function(e) {
            // console.log(e.which);
            if (e.which == 32) {
              // mobile disable
                if (!this_out.mobileCheck()) controllerFnc();
            }
        });
        $(".controller").click(() => {
            console.log("clicked");
        });


        function dotControlCng(x) {
          this_out.auto_timebarmove = false;
          var positionLeft = x.offsetX;
          // var positionTop = x.clientY;
          console.log(positionLeft);
          $("#prog_pBtn").css("left", positionLeft - 10 + "px");
          // console.log(video.controller);
          video.currentTime = (positionLeft/$("#prog_pBtn").width()/video.duration)
          console.log(video.currentTime);
          console.log(positionLeft/$("#prog_pBtn").width()/video.duration);
          this_out.auto_timebarmove = true;
        }


        function controllerFnc(isFirst) {
            console.log(video);
            $(".controller").toggleClass('pause play');
            // console.log(this_out.status);
            if(this_out.$store.state.songPlayer.status) {
                this_out.$store.state.songPlayer.status = false;
                video.pause();
            } else {
                this_out.$store.state.songPlayer.status = true;
                video.play();
            }
        }


        // lyrics sync functions

        // checkLyrics();

    }
}
</script>

<style>
@media (max-width: 500px) {
  #bottomPlayer {
    width: 100% !important;
    position: fixed !important;
  }
  #bottomPlayer .imgArea {
    left: 0px !important;
  }
  #bottomPlayer .songTitle {
    left: 140px !important;
  }
  #bottomPlayer .lyrics {
    left: 140px !important;
  }
}
#bottomPlayer {
  width: 500px;
  height: 120px;
  /* border: 1px solid black; */
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.49);
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
}

.imgArea {
  width: 80px;
  height: 80px;
  /* border: 1px solid black; */
  border-radius: 40px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.49);
  top: 50%;
  left: 5%;
  position: absolute;
  transform: translateX(50%) translateY(-50%);
  background-size: cover;
}
#bottomPlayer .songTitle {
  top: 25px;
  left: 180px;
  position: relative;
  font-size: 20px;
  font-weight: 500;
}
#bottomPlayer .artist {
  top: 5px;
  right: 0px;
  position: absolute;
  font-size: 15px;
  font-weight: 300;
}
#bottomPlayer .lyrics {
  top: 70px;
  left: 180px;
  position: absolute;
  font-size: 15px;
  font-weight: 300;
}
#bottomPlayer .progBar {
  width: 100%;
  height: 5px;
  background-color: rgb(236, 236, 236);
}
#bottomPlayer .progBar .progCol {
  width: 0%;
  height: 100%;
  background-color: rgb(9, 17, 88);
}
#bottomPlayer .progBar .progBtn {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  position: absolute;
  background-color: rgb(9, 17, 88);
}

</style>