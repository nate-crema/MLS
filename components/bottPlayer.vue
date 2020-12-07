<template>
  <div id="bottomPlayer">
    <div class="coverBP" v-if="!$store.state.songPlayer.isOpen">
        <div class="progBar" id="progBar" @click="playPMove()">
          <div class="progBtn" id="prog_pBtn"></div>
          <div class="progCol" id="prog_p"></div>
        </div>
        <div class="imgArea" id="imgArea"
        :style="{backgroundImage: `url(${musicInfo.songImg ? musicInfo.songImg : '/resource/cd.svg'})`}"></div>
        <p class="songTitle">{{musicInfo.songTitle ? (musicInfo.songTitle.length > 13 ? musicInfo.songTitle.substr(0, 10) + "..." : musicInfo.songTitle) : "음악을 선택해보세요!"}}</p>
        <p class="lyrics">{{musicInfo.songTitle ? (lyricsThis ? lyricsThis : "가사가 없는 노래입니다.") : "선택하는 즉시 자동재생 됩니다."}}</p>
        <div class="playArea">
        </div>
        <div class="playControlArea">
          <img 
          :src="isPlay ? '/img/pause.svg' : '/img/play-button.svg'" class="pause controller" @click="controllerFnc(null)"/>
          <!-- <div class="playControl play">
            <span class="left"></span>
            <span class="right"></span>
          </div> -->
          <div class="repeatControlWrap" id="repeatController" @click="RCClick()"> 
            <img class="repeatControl uRepeat" src="/img/uRepeat.svg" v-if="isRepeat == 0"/>
            <img class="repeatControl RepeatOne" src="/img/repeatOne.svg" v-else-if="isRepeat == 1"/>
            <img class="repeatControl Repeat" src="/img/repeat.svg" v-else/>
            <!-- :src="isRepeat == 0 ? (isRepeat == 1 ? '/img/repeatOne.svg' : '/img/repeat.svg') : '/img/uRepeat.svg'"/> -->

          </div>
          
          <div class="openControlWrap" id="openController" @click="OCClick()"> 
            <img class="openControl uOpen" src="/img/playerUOpen.svg"/>
          </div>

          <div class="groupEditorWrap" id="groupController" @click="groupController()">
            <img class="groupEditor uOpen" src="/img/adjust.png"/>
          </div>
        </div>
    </div>
    <div class="coverBP" v-else>
        <div class="designGradBar Play" v-if="isPlay"></div>
        <div class="designGradBar Pause" v-else-if="musicInfo.songTitle != undefined"></div>
        <img src="/img/musicNote.svg" class="musicNoteSvg"/>
        <div class="openControlWrap" id="openController" @click="OCClick()">
          <img class="openControl Open" src="/img/playerOpen.svg"/>
        </div>
        <p class="playInfo" v-if="isPlay">현재 재생중: {{musicInfo.artist > 6 ? musicInfo.artist.substr(0,3) + "..." : musicInfo.artist}} - {{musicInfo.songTitle.length > 9 ? musicInfo.songTitle.substr(0, 6) + "..." : musicInfo.songTitle}}</p>
        <p class="playInfo" v-else-if="musicInfo.songTitle != undefined">일시 정지됨: {{musicInfo.artist > 6 ? musicInfo.artist.substr(0,3) + "..." : musicInfo.artist}} - {{musicInfo.songTitle.length > 9 ? musicInfo.songTitle.substr(0, 6) + "..." : musicInfo.songTitle}}</p>
        <p class="playInfo" v-else>현재 재생중인 노래 없음</p>
        <div class="specArea">
          <ul class="selector">
            <li class="selectOption lyricsAll" id="lyricsAll" @click="specAreaSel">전체 가사</li>
            <!-- <li class="selectOption albumInfo" id="albumInfo" @click="specAreaSel">앨범 정보</li>
            <li class="selectOption cover" id="cover" @click="specAreaSel">커버</li> -->
          </ul>
          <div class="designBar"></div>
          <div class="contents" id="contentsSA">

          </div>
        </div>
    </div>
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
            auto_timebarmove: true,
            videoPID: "",
            isPlay: this.$store.state.status,
            // playlist: this.$store.state.playlist,
            playingPlaylistN: 0,
            specAreaSelV: "",
            isRepeat: 0,
            isspecAreaSelVactivate: false
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
        },
        isPlay(data) {
          if (!data) {
            document.getElementById(this.videoPID).pause();
            this.$store.commit("songStat", {stat: false});
          } else {
            document.getElementById(this.videoPID).play();
            this.$store.commit("songStat", {stat: true});
          }
        },
        songId(newVal, oldVal) {
          this.playLoad()
        },
        specAreaSelV(data) {
          // console.log(data);
          if (data != "") this.specAreaSel(null, data);
        }
    },
    methods: {
        // mobile check
        mobileCheck: function() {
            let check = false;
            (function(a){
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
        // lyrics change due to time
        changeLyrics: function(num) {
            const compArr = this.musicInfo.lyrics;
            $(".lyrics").css("opacity", 0);
            setTimeout(() => {
              this.lyricsThis = this.musicInfo.lyrics[num].text;
              if (this.specAreaSelV == "lyricsAll") {
                const lyricEl = document.getElementById(`lyric_${num}`);
                $(`.lyric`).css("font-size", "16px");
                $(`.lyric`).css("font-weight", "300");
                lyricEl.style.fontSize = "20px";
                lyricEl.style.fontWeight = "500";
                // auto scroll
                const domElRelPosition = lyricEl.getBoundingClientRect();
                const lyricElN = document.getElementById(`lyric_${num+1}`);
                // console.log(domElRelPosition);
                console.log(`scroll: ${num*20}`)
                if (lyricElN != null) {
                  const domElRelPositionN = lyricElN.getBoundingClientRect();
                  document.getElementById("contentsSA").scrollTo(0, num*(domElRelPositionN.top - domElRelPosition.top));
                }
              } else if (
                (
                  this.lyricsThis.includes("연주중") ||
                  this.lyricsThis.includes("간주중")
                ) && this.musicInfo.lyrics[num+1].time - this.musicInfo.lyrics[num].time >= 10000) this.playlistNotice();
              setTimeout(() => {
                $(".lyrics").css("opacity", 1);
              }, 50);
            }, 200);
        },
        // song data state refresh
        refreshState: function() {
          // console.log(this.songid);
          this.songId = this.$store.state.songPlayer.songId;
          setTimeout(() => {
            refreshState();
          }, 100);
        },
        // music repeat functions
        RCClick: function() {
          const this_out = this;
          console.log(`RCClick: ${this.isRepeat}`);
          console.log(`playlist: ${Object.keys(this.$store.state.songPlayer.playlist).length}`);
          if (this.isRepeat == 0) {
            if (Object.keys(this.$store.state.songPlayer.playlist).length > 1) this.isRepeat = 2;
            else this.isRepeat = 1;
          } else if (this.isRepeat == 1) {
            this.isRepeat = 0;
          } else {
            this.isRepeat = 1;
          }
        },
        // music player extend functions
        OCClick: function() {
          const this_out = this;
          console.log(`isPOpen: ${this.$store.state.songPlayer.isOpen}`)
          $(".coverBP").css("opacity", "0")
          setTimeout(() => {
            if (this.$store.state.songPlayer.isOpen) {
              document.getElementById("contentsSA").innerHTML = "";
              this_out.specAreaSelV = "";
              this_out.isspecAreaSelVactivate = false;
              $("#bottomPlayer").css("height", "120px");
              setTimeout(() => {
                $("#repeatController").css("top", "60px");
                $("#repeatController").css("left", "50%");
                $("#repeatController").css("width", "30px");
                $("#repeatController").css("height", "30px"); 
                $("#openController").css("top", "60px");
                $("#openController").css("left", "unset");
                $("#openController").css("width", "30px");
                $("#openController").css("height", "30px"); 
                if ($(window).width() < 850) {
                  $("#repeatController").css("display", "none"); 
                  $("#openController").css("display", "none"); 
                  $("#repeatController").css("opacity", "0"); 
                  $("#openController").css("opacity", "0"); 
                  $("#repeatController").css("opacity", "0"); 
                  $("#openController").css("opacity", "0"); 
                }
              }, 100);
              // $("#imgArea").css("width", "80px");
              // $("#imgArea").css("height", "80px");
              // $("#imgArea").css("border-radius", "40px");
              // $("#imgArea").css("box-shadow", "0 3px 6px 0 rgba(0, 0, 0, 0.49)");
            } else {
              $("#bottomPlayer").css("height", "500px");
              setTimeout(() => {
                $(".designBar").css("width", "3px");
                $(".designBar").css("height", "20px");
                $(".designBar").css("top", "5px");
                $(".designBar").css("left", "30px");
                if ($(window).width() < 850) {
                  if ($(window).width() < 850) {
                    $("#repeatController").css("display", "unset"); 
                    $("#openController").css("display", "unset"); 
                    $("#repeatController").css("opacity", "1"); 
                    $("#openController").css("opacity", "1");
                    $("#contentsSA").css("opacity", "1"); 
                    $("#contentsSA").css("display", "unset"); 
                  }
                }
              }, 100);
              this_out.isspecAreaSelVactivate = true;
              // $("#imgArea").css("width", "100%");
              // $("#imgArea").css("height", "100%");
              // $("#imgArea").css("border-radius", "0");
              // $("#imgArea").css("box-shadow", "unset");
              // $("#imgArea").css("left", "0");
              // $("#imgArea").css("transform", "translateY(-50%)");
            }
            this.$store.commit("cPOpen");
            $(".coverBP").css("opacity", "1");
          }, 400);
        },
        // music play management
        controllerFnc: function(isFirst) {
            // this.isPlay == true ? this.isPlay = false : this.isPlay = true;
            console.log(`isPlay: ${this.isPlay} || videoPID: ${this.videoPID}`)
            if (this.isPlay) {
              document.getElementsByClassName("controller")[0].attributes.src = '/img/pause.svg';
            } else {
              document.getElementsByClassName("controller")[0].attributes.src = '/img/play-button.svg';
            }
            // $(".controller").toggleClass('pause play');
            // console.log(this.status);
            if(this.isPlay) {
                document.getElementById(this.videoPID).pause();
                this.isPlay = false;
            } else {
                document.getElementById(this.videoPID).play();
                this.isPlay = true;
                this.getMusicTime();
            }
        },
        // music player load
        playLoad: function() {
          const this_out = this;
          console.log(this_out.songId);
          this.reqMInfo(this_out.songId)
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
                  this_out.$store.commit("playlist", {
                    fnc: true,
                    cont: this_out.musicInfo.songIdB
                  })
                  this_out.startPlay();
              }, 150);
          })
          .catch((e) => {
            this.$store.commit('alertCont', {
              type: "warning",
              cont: `음악재생 준비중 오류가 발생하였습니다. 다시 시도해주세요.`,
              time: 5000
            });
          })
        },
        // get music media information
        reqMInfo: function(vId) {
            return new Promise((resolve, reject) => {
                axios.post("/api/player/getSongInfo", {
                  songId: vId,
                  reqService: "BASE_WEB_ARCHITEC_PLY_MINI"
                })
                .then(({data}) => {

                    resolve(data);
                })
                .catch((e) => {
                    reject(e);
                })
            })
        },
        // get music progress time
        getMusicTime: function() {
            var this_out = this;

            this_out.curTime = document.getElementById(this_out.videoPID).currentTime;
            this_out.tTime = document.getElementById(this_out.videoPID).duration;
            // console.log(`Object.keys(this_out.$store.state.songPlayer.playlist).length: ${Object.keys(this_out.$store.state.songPlayer.playlist).length}`);
            if (this_out.curTime == this_out.tTime) {
              if (this_out.isRepeat == 1) {
                this_out.curTime = 0;
                document.getElementById(this_out.videoPID).play();
                this.isPlay = true;
              } else if (this_out.isRepeat == 2) {
                if (++this_out.playingPlaylistN >= Object.keys(this_out.$store.state.songPlayer.playlist).length) this_out.playingPlaylistN = 0;
                const songIdB = Object.keys(this_out.$store.state.songPlayer.playlist)[this_out.playingPlaylistN];
                this_out.songId = songIdB;
                this_out.musicInfo = this_out.$store.state.songPlayer.playlist[songIdB];
                this_out.startPlay();
                // document.getElementById(this.videoPID).play();
                this.isPlay = true;
              } else if (Object.keys(this_out.$store.state.songPlayer.playlist).length > 0) {
                if (this_out.playingPlaylistN+1 > Object.keys(this_out.$store.state.songPlayer.playlist).length) {
                  this.isPlay = false;
                  this_out.playingPlaylistN = 0;
                } else {
                  const songIdB = Object.keys(this_out.$store.state.songPlayer.playlist)[++this_out.playingPlaylistN];
                  console.log(this_out.playingPlaylistN);
                  this_out.songId = songIdB;
                  this_out.musicInfo = this_out.$store.state.songPlayer.playlist[songIdB];
                  console.log(this_out.$store.state.songPlayer.playlist);
                  this_out.startPlay();
                  document.getElementById(this.videoPID).play();
                  this.isPlay = true;
                }
              } else {
                  this.isPlay = false;
              }
            }
            // if (this.$store.state.songPlayer.status) {
              setTimeout(() => {
               this_out.getMusicTime();
              }, 100);
            // }
        },
        // play start
        startPlay: function() {
            console.log(`music start: ${this.musicInfo.songIdB}`);
            const this_out = this;
            // document.getElementById(videoPID).src = this_out.musicInfo.youtube.url;
            // console.log(this_out);
            document.getElementById(this_out.videoPID).src = this_out.musicInfo.ytInfo.setData.url;
            // document.getElementById(videoPID).src = `https://www.youtube.com/watch?v=${this_out.musicInfo.ytInfo.song.videoId}`;
            // document.getElementById(videoPID).autoplay = true;
            document.getElementById(this_out.videoPID).load();
            document.getElementById(this_out.videoPID).controls = true;
            setTimeout(() => {
                this_out.controllerFnc();
            }, 500);
            console.log(document.getElementById(this_out.videoPID));
            this_out.getMusicTime();
        },
        // play position move
        playPMove: function() {
            console.log(`ct: ${document.getElementById(this.videoPID).currentTime}`);
            console.log(`cp: ${event.offsetX}`);
            console.log(`width: ${$("#progBar").width()}`);
            console.log(`cpercent: ${(event.offsetX)/($("#progBar").width())*100}`);
            document.getElementById(this.videoPID).currentTime = ((event.offsetX)/($("#progBar").width()))*document.getElementById(this.videoPID).duration;
            // document.getElementById("progBar").removeEventListener("mousemove", dotControlCng); 
            console.log("mouseup");
            // console.log(video)
        },
        // 'specific' area: select obj check
        specAreaSel: function(event, variable) {
          if (!this.isspecAreaSelVactivate) {
            return false;
          }
          console.log(`variable: ${variable}`);
          // console.log("alpha");
          const wrapper = document.getElementById("contentsSA");
          let id;
          if (variable) id = variable;
          else id = event.target.getAttribute("id");
          this.specAreaSelV = id;
          let left, length;
          document.getElementById("contentsSA").style.opacity = 0;
          wrapper.innerHTML = "";
          setTimeout(() => {
            document.getElementById("contentsSA").style.opacity = 1;
            console.log(`id: ${id}`);
            switch(id) {
              case "albumInfo":
                left = "145px";
                length = "70px";
                break;
              case "cover":
                left = "240px";
                length = "45px";
                break;
              case "lyricsAll":
              default:
                left = "40px";
                length = "75px";
                if (this.musicInfo.lyricsId) {
                  // add lyrics in document
                  this.musicInfo.lyrics.forEach((value, index) => {
                    var lyric = document.createElement("p");
                    lyric.setAttribute("class", "lyric");
                    lyric.setAttribute("id", `lyric_${index}`);
                    lyric.style.opacity = 0;
                    lyric.textContent = value.text;
                    if (!document.getElementById(`lyric_${index}`)) wrapper.appendChild(lyric);
                    console.log(`append: ${index}`); 
                    setTimeout(() => {
                      document.getElementById(`lyric_${index}`).style.opacity = 1;
                    }, 15*index);
                  })
                }
                break;
            }
            if (id && id != "") {
              $(".designBar").css("width", length);
              $(".designBar").css("height", "2px");
              $(".designBar").css("top", "30px");
              $(".designBar").css("left", left); 
            }
          }, 50);
        },
        // next-play notice
        playlistNotice: function() {
          if (this.$store.state.songPlayer.playlist.length > 0 && this.$store.state.songPlayer.playlist[this.playingPlaylistN+1] != undefined) {
            this.reqMInfo($store.state.songPlayer.playlist[this.playingPlaylistN+1])
            .then((resultMusic) => {
              const innerText = $(".coverBP .lylics").innerText;
              $(".coverBP #imgArea").css("opacity", "0");
              $(".coverBP .songTitle").innerText="다음 재생곡";
              $(".coverBP .lylics").innerText=resultMusic.songTitle;
            })
          }
        },
        // mobile - make controller hide
        groupController: function() {
          const this_out = this;
          if ($(window).width() < 850) {
            $("#bottomPlayer .controller").css("display", "unset");
            $("#bottomPlayer .repeatControlWrap").css("display", "unset");
            $("#bottomPlayer .openControlWrap").css("display", "unset");
            $("#bottomPlayer #groupController").css("opacity", "0");
            $("#bottomPlayer .songTitle").css("opacity", "0");
            $("#bottomPlayer .lyrics").css("opacity", "0");
            setTimeout(() => {
              $("#bottomPlayer .controller").css("opacity", "1");
              $("#bottomPlayer .repeatControlWrap").css("opacity", "1");
              $("#bottomPlayer .openControlWrap").css("opacity", "1");
              $("#bottomPlayer #groupController").css("display", "none");
              $("#bottomPlayer .songTitle").css("display", "none");
              $("#bottomPlayer .lyrics").css("display", "none");
              setTimeout(() => {
                $("#bottomPlayer .controller").css("opacity", "0");
                $("#bottomPlayer .repeatControlWrap").css("opacity", "0");
                if (!this_out.$store.state.songPlayer.isOpen) {
                  $("#bottomPlayer .openControlWrap").css("opacity", "0");
                  $("#bottomPlayer .playInfo").css("opacity", "0");
                } else {
                  setTimeout(() => {
                    $("#bottomPlayer .openControlWrap").css("opacity", "1");
                    $("#bottomPlayer .playInfo").css("opacity", "1");
                  }, 500);
                }
                $("#bottomPlayer #groupController").css("display", "unset");
                $("#bottomPlayer .songTitle").css("display", "unset");
                $("#bottomPlayer .lyrics").css("display", "unset");
                setTimeout(() => {
                  $("#bottomPlayer .controller").css("display", "none");
                  $("#bottomPlayer .repeatControlWrap").css("display", "none");
                  if (!this_out.$store.state.songPlayer.isOpen) {
                    $("#bottomPlayer .openControlWrap").css("display", "none");
                    $("#bottomPlayer .playInfo").css("display", "none");
                  } else {
                    setTimeout(() => {
                      $("#bottomPlayer .openControlWrap").css("display", "unset");
                      $("#bottomPlayer .playInfo").css("display", "unset");
                    }, 500);
                  }
                  $("#bottomPlayer #groupController").css("opacity", "1");
                  $("#bottomPlayer .songTitle").css("opacity", "1");
                  $("#bottomPlayer .lyrics").css("opacity", "1");
                }, 100);
              }, 2000);
            }, 100);
          }
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

        // console.log(this_out.controllerFnc());


        // getUID

        const getUid = function (length, isNumOnly) {
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

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const videoPID = getUid(20, false);
        console.log(`videoPID: ${videoPID}`);
        video.setAttribute("id", videoPID);
        this_out.videoPID = videoPID;


        document.getElementsByTagName("head")[0].appendChild(video);


        

        $(document).ready(() => {
          // for test!
          // this.$store.commit("playSong", {songId: "BasecGwEQB"})
        })
        // console.log(this.songId)
        $(document).on('keyup', function(e) {
            // console.log(e.which);
            if (e.which == 32) {
              // mobile disable
                if (!this_out.mobileCheck()) this_out.controllerFnc();
            }
        });
    }
}
</script>

<style>
/* @media (max-width: 500px) {
  .songTitle, .lyrics {
    width: 50px;
  }
} */
@media (max-width: 850px) {
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
  #bottomPlayer .openControlWrap {
    right: 7% !important;
    display: none;
  }
  #bottomPlayer .repeatControlWrap {
    right: 15% !important;
    display: none;
  }
  #bottomPlayer .play, .pause {
    right: 24% !important;
    display: none;
  }
  #bottomPlayer .groupEditorWrap {
    display: unset;
  }
}
#bottomPlayer {
  width: 600px;
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
  transition: all .4s cubic-bezier(0.19, 1, 0.22, 1);
}

.imgArea {
  width: 80px;
  height: 80px;
  /* border: 1px solid black; */
  border-radius: 40px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.49);
  top: 25px;
  left: 5%;
  position: absolute;
  transform: translateX(50%);
  background-size: cover;
  transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 1;
}
#bottomPlayer .songTitle {
  top: 25px;
  left: 180px;
  position: relative;
  font-size: 20px;
  font-weight: 500;
  opacity: 1;
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
  transition: all .4s cubic-bezier(0.3, 0.97, 0, 1.01);
  opacity: 1;
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


#bottomPlayer .playControlArea {
  position: absolute;
  width: 250px;
  height: 90%;
  top: 60px; /* !important */
  right: 0px; /* !important */
  /* border: 1px solid black; */
  transform: translateY(-50%);
}


#bottomPlayer .play, .pause {
  width: 24px;
  height: auto;
  position: absolute;
  left: 40px;
  top: 50px;
}


#bottomPlayer .repeatControlWrap {
  position: absolute;
  top: 60px; /* !important */
  left: 50%; /* !important */
  transform: translate(-50%, -50%); /* !important */
  width: 30px; /* !important */
  height: 30px; /* !important */
  /* border: 1px solid black; */
  transition: none;
}
#bottomPlayer .repeatControlWrap .repeatControl {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

#bottomPlayer .openControlWrap {
  z-index: 10000;
  position: absolute;
  top: 60px;
  right: 30px;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  /* border: 1px solid black; */
  transition: none;
}
#bottomPlayer .openControlWrap .openControl {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

#bottomPlayer .groupEditorWrap {
  /* display: none; */
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(-50%, -50%);
}
#bottomPlayer .groupEditorWrap .groupEditor {
  /* display: none; */
  width: 100%;
  height: auto;
  position: absolute;
}


.coverBP {
  transition: all .3s ease;
  opacity: 1;
  width: 100%;
  height: 100%;
  position: absolute;
}


/* bottPlayer: open Design */

div.designGradBar {
  width: 100%;
  height: 7px;
  position: absolute;
  top: -7px;
}
div.designGradBar.Play {
  box-shadow: 0px 10px 60px rgb(24, 84, 195);
}
div.designGradBar.Pause {
  box-shadow: 0px 10px 60px rgb(195, 24, 24);
}

img.musicNoteSvg {
  width: 30px;
  height: 35px;
  position: absolute;
  top: 50px;
  left: 50px;
}

p.playInfo {
  position: absolute;
  font-size: 20px;
  font-weight: 300;
  top: 50px;
  left: 120px;
}

.specArea {
  width: 100%;
  height: 350px;
  /* border: 1px solid black; */
  position: absolute;
  transform: translateX(-50%);
  bottom: 0;
  left: 50%;
}
.specArea .selector {
  list-style: none;
}
.specArea .selector li {
  float: left;
  margin-left: 30px;
  font-size: 18px;
  color:rgb(9, 17, 88);
  cursor: pointer;
}
.specArea .selector li:nth-child(1) {
  margin-left: 0;
}
.specArea div.designBar {
  width: 3px;
  height: 20px;
  background-color:rgb(9, 17, 88);
  border-radius: 1px;
  position: absolute;
  top: 5px;
  left: 30px;
  transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.specArea .contents {
  width: 80%;
  height: 300px;
  /* border: 1px solid black; */
  position: absolute;
  bottom: 0;
  /* background-color: black; */
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 1;
  transform: translateX(-50%);
  left: 50%;
  scroll-behavior: smooth;
}
.specArea .contents .lyric {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 300;
  /* color:rgb(9, 17, 88); */
}
</style>