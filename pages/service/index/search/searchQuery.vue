<template>
  <div>
      <isMediaComp :mediaTypeText="mediaTypeText"></isMediaComp>
      <!-- <div class="artists" id="artists">
      </div> -->
      <div class="songObjs" v-if="searchResult.melon">
        <div class="songObj" v-for="(indivSong, index) in searchResult.melon.data" :key="index">
          <!-- <svg version="1.1" id="lg_imgA" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
            <circle cx="50.79" cy="50.79" r="36.79"/>
            <g opacity="0.13">
              <path fill="#FFFFFF" d="M62.62,15.94C58.91,14.68,54.93,14,50.79,14s-8.11,0.68-11.82,1.94l11.82,34.85L62.62,15.94z"/>
              <path fill="#FFFFFF" d="M38.97,85.65c3.71,1.26,7.69,1.94,11.82,1.94s8.11-0.68,11.82-1.94L50.79,50.79L38.97,85.65z"/>
            </g>
            <circle fill="#FFF9C9" cx="50.79" cy="50.79" r="14.23"/>
            <circle opacity="0.81" fill="#FFFFFF" cx="50.79" cy="50.79" r="4.16"/>
            <circle fill="none" stroke="#000000" stroke-width="0.75" stroke-miterlimit="10" cx="50.79" cy="50.79" r="31.7"/>
            <circle fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" cx="50.79" cy="50.79" r="36.79"/>
          </svg> -->
          <svg version="1.1" id="lg_imgA" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" enable-background="new 0 0 100 100" xml:space="preserve"
          :class="`songObjs_${index}_lp id_${indivSong.songIdB}_lp`">
              <g id="prefix__lp" transform="translate(-2 -5)">
                  <circle id="prefix__타원_7" cx="63.759" cy="63.759" r="63.759" data-name="타원 7" transform="translate(14 14)"/>
                  <g id="prefix__그룹_34" data-name="그룹 34" opacity="0.13" transform="translate(57.274 14)">
                      <path id="prefix__패스_7" d="M79.957 17.362a64.138 64.138 0 0 0-40.987 0l20.485 60.4z" class="prefix__cls-2" data-name="패스 7" transform="translate(-38.97 -14)"/>
                      <path id="prefix__패스_8" d="M38.97 111.2a64.086 64.086 0 0 0 40.97 0L59.455 50.79z" class="prefix__cls-2" data-name="패스 8" transform="translate(-38.97 12.969)"/>
                  </g>
                  <circle id="prefix__타원_10" cx="54.938" cy="54.938" r="54.938" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.75px" data-name="타원 10" transform="translate(22.821 22.821)"/>
                  <g filter="url(#prefix__타원_11)" transform="translate(2 5)">
                      <circle id="prefix__타원_11-2" cx="63.759" cy="63.759" r="63.759" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6px" data-name="타원 11" transform="translate(12 9)"/>
                  </g>
              </g>
          </svg>
          <div class="background-lpTop" style="background-size: contain"
          :style="{backgroundImage: `url(${indivSong.song.songImg})`}"
          :class="`songObjs_${index}_lp`">
          </div>
          <div class="lpFTop"
          :class="`songObjs_${index}_lp`">
            <div class="smallLpFTop"></div>
          </div>
          <div class="songCover" @mouseover="mouseOver" @click="musicSelected"
          :class="`songObjs_${index} id_${indivSong.songIdB}_contBox`"
          :id="indivSong.songIdB">
            <div class="songInfo">
              <p class="songTitle">{{indivSong.song.songTitle.length > 6 ? indivSong.song.songTitle.substr(0, 5) + "..." : indivSong.song.songTitle}}</p>
              <p class="songArtist">{{indivSong.artist.artistName.length > 6 ? indivSong.artist.artistName.substr(0, 5) + "..." : indivSong.artist.artistName}}</p>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link :to="to" id="nuxt-link-next" hidden>alpha</nuxt-link>
  </div>
</template>

<script>

import axios from 'axios';
import isMediaComp from '~/components/isMedia';
// import router from 'vue-router';

export default {

    components: {
      isMediaComp
    },
    methods: {
      musicSelected: function(element) {
        const clickedId = element.currentTarget.id;
        console.log(clickedId);
        
        // transition animation

        

        let this_out = this;
        this.$store.commit("playSong", {songId: clickedId})
        console.log(this_out.searchResult.melon.data);
        
        function designChange(q, index) {
          console.log(index);
          setTimeout(() => {
            console.log(".songObjs_" + q);
            $(`.songObjs_${q}`).css("width", "100%");
            $(`.songObjs_${q}`).css("height", "100%");
            $(`.songObjs_${q}`).css("box-shadow", "none");
            $(`.songObjs_${q}`).css("box-shadow", "none");
            $(`.songObjs_${q} .songTitle`).css("opacity", "0");
            $(`.songObjs_${q} .songArtist`).css("opacity", "0");
            $(`.songObjs_${q}_lp`).css("opacity", "0");
            setTimeout(() => {
              $(`.songObjs_${q} .songTitle`).css("display", "none");
              $(`.songObjs_${q} .songArtist`).css("display", "none");
            }, 200);
            if (q < index) designChange(++q, index);
          }, 5);
        }

        setTimeout(() => {
          designChange(0, this_out.searchResult.melon.data.length);
          setTimeout(() => {
            $(".searchObj").css("transition", "all .4s cubic-bezier(0.08, 0.93, 0.58, 1)");
            setTimeout(() => {
              $(".searchObj").css("opacity", "0");
              $(".searchObj").css("top", "150px");
              this_out.to=`/service/music?musicId=${clickedId}&searchKey=${document.getElementsByClassName("searchTitle")[0].innerText.split("\"")[1]}`;
              setTimeout(() => {
                console.log(clickedId);
                console.log($("#nuxt-link-next"));
                document.getElementById("nuxt-link-next").click();
              }, 100);
            }, 10);
          }, 500);
        }, 100);

        

      },
      mouseOver: function(element) {
        // console.log(this);
        // console.log(element.relatedTarget.classList);
        // console.log(Object.keys(this));
      }
    },
    data() {
      return {
        searchResult: [],
        mediaTypeText: "",
        isArtistYT: false,
        to: "/"
      }
    },
    mounted() {

      
      const this_out = this;

      

      $(document).ready(() => {
        document.getElementsByClassName("searchTitle")[0].innerHTML = "\"" + decodeURI(document.location.search.replace("?searchKey=", "")) + "\"에 대한 검색결과입니다!"
        document.getElementById("searchData").value = decodeURI(document.location.search.replace("?searchKey=", ""));

        axios.post('/search/api/searchQuery', {
          searchOption: "*",
          searchQuery: decodeURI(document.location.search.replace("?searchKey=", ""))
        })
        .then(({data}) => {
          console.log(data);
            this_out.searchResult = data;
            if (data.isMedia) {
              console.log("data.mediaType");
              console.log(data.MediaType);
              this_out.mediaTypeText = data.MediaType.toString();
              $("#isMediaTrue").css("display", "unset");
              $("#isMediaTrue").css("opacity", "1");
            }
            // let isArtistYT = false;
            if (data.ytSearch.length > 0) {
              console.log("sef");
              data.ytSearch.forEach((element) => {
                // console.log(element);
                if (element.artists) {
                  this_out.isArtistYT=true;
                  ArtistOBJM("yt", element.artists);
                }
              })
            }
            
        })

        $(".musicSelector").click(function() {console.log("hi")})

        function ArtistOBJM(service, data) {
          data.forEach((element, index) => {
            const data = document.createElement("div");
            if (service == "yt") {
              data.className = "artist " + index;
              data.id = element.ArtistName;
              data.style.backgroundImage = `url(${element.thumbnails[3].url})`;
              data.style.backgroundSize = "100%";
              const artistName = document.createElement("p");
              console.log(element);
              artistName.innerText = element.ArtistName;
              artistName.className = "artistName";
              data.appendChild(artistName);


              document.getElementById("artists").appendChild(data);
              console.log(data);
            }
          })
        }

        $(".searchBtn").css("display", "block");
        setTimeout(() => {
            $(".searchBtn").css("opacity", "1");
        }, 10);
        $(".searchObj").css("top", "30%");
        $(".searchArea").css("width", "50%");
        $(".searchArea").css("height", "50px");
        $(".searchBtn").css("width", "50px");
        $(".searchBtn").css("height", "50px");
        $("#searchData").css("font-size", "17px");
        setTimeout(() => {
          $(".searchArea").css("top", "55px");
          $(".searchArea").css("left", "0px");
          $(".searchArea").css("transform", "unset");
        }, 100);

        $("#searchData").focusin(() => {
          $(".searchArea").css("width", "70%");
        })

        $("#searchData").focusout(() => {
          $(".searchArea").css("width", "50%");
        })


      })


      
    }
}
</script>

<style>
.artists {
  width: 100%;
  height: 300px;
  border: 1px solid rgb(15, 63, 141);
  border-radius: 15px;
  position: relative;
  top: 20px;
  overflow-x: auto;
}
.artists .artist {
  width: 200px;
  height: 200px;
  /* border: 1px solid black; */
  display: inline-block;
  margin: 0px 20px 0px 20px;
  border-radius: 40px;
  position: relative;
  top: 60%;
  transform: translateY(-50%);
}
.artists .artist .artistName {
  text-align: center;
  font-size: 15px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 20px;
  white-space: nowrap;
  overflow-x: auto;
}

.songObjs {
  width: 100%;
  margin: auto;
  height: 500px;
  /* border: 1px solid black; */
  border-radius: 15px;
  position: relative;
  top: 20px;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0);
}
.songObjs .songObj {
  position: relative;
  display: inline-block;
  width: 230px;
  height: 250px;
}
.songObjs .background-lpTop {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50px;
  z-index: 100;
  top: 23px;
  left: 25px;
}
.songObjs #lg_imgA {
  top: 0;
  left: 0;
  width: 120px;
  position: absolute;
  z-index: 2;
}
.songObjs .songCover {
  width: 140px;
  height: 140px;
  /* border: 1px solid black; */
  position: absolute;
  top: 0px;
  left: 60px;
  background-color: white;
  z-index: 200;
  border-radius: 9px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.49);
  cursor: pointer;
}
.songObjs .songCover:hover {
  width: 160px;
  height: 160px;
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.songCover:hover .songObjs {
  background-color: black;
}
.songObjs .songCover .songInfo {
  /* border: 1px solid black; */
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.songObjs .songCover .songInfo .songTitle {
  font-size: 16px;
  font-weight: 500;
}
.songObjs .songCover .songInfo .songArtist {
  font-size: 12px;
  font-weight: 300;
}
.songObjs .lpFTop {
  width: 65px;
  height: 65px;
  border-radius: 35px;
  background-color: rgb(17, 80, 180);
  z-index: 150;
  position: absolute;
  top: 40px;
  left: 43px;
}
.songObjs .lpFTop .smallLpFTop {
  width: 42px;
  height: 42px;
  border-radius: 30px;
  background-color: rgb(201, 201, 201);
  z-index: 150;
  position: absolute;
  top: 12px;
  left: 10px;
}
</style>