<template>
  <div>
      <div class="songDetail">
        <nuxt-link class="backPageRed"
        :to="`/service/search/searchQuery?searchKey=${searchKey}`"> &lt; 검색 결과로 이동</nuxt-link>
        <div class="songTitle">
          <p id="songTitle" class="songTitleText">{{searchResult.songTitle}}</p>
          <p id="songArtist" class="songArtistText">{{searchResult.artist}}</p>
        </div>
        <div class="songImage">
          <div class="lpMiddle" id="lpMiddle">
            <div class="lpMiddleC" id="lpMiddleC"></div>
          </div>
          <div class="lpImgCover"></div>
          <img id="lpCover"
          :src="searchResult.songImg"/>
        </div>
        <div class="playSong">
          <div class="playSongN">
            <p class="text" @click="playSongNow()">지금 바로 재생: {{countService ? `${counterService}로 설정됨` : "음원 집계설정 필요"}}</p>
          </div>
          <div class="playSongL">
            <p class="text">나중에 들을 음악에 추가</p>
          </div>
        </div>
        <div class="songCont">
          <ul class="dTitle">
            <li class="album" id="album">앨범</li>
            <li class="openDate" id="openDate">발매일</li>
            <li class="genre" id="genre">장르</li>
          </ul>
          <ul class="dCont">
            <li class="album" id="album">{{searchResult.albumTitle}}</li>
            <li class="openDate" id="openDate">{{searchResult.openDate ? searchResult.openDate : "?"}}</li>
            <li class="genre" id="genre">{{searchResult.genre ? searchResult.genre : "?"}}</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios';
import isMediaComp from '~/components/isMedia';

export default {

    components: {
      isMediaComp
    },
    methods: {
      playSongNow: function() {
        const songId = this.searchResult.songIdB;
        location.href = `/player/${songId}`;
      },
      musicSelected: function(element) {
        console.log(element.target.id);
      },
      mouseOver: function(element) {
        // console.log(this);
        // console.log(element.relatedTarget.classList);
        // console.log(Object.keys(this));
      }
    },
    beforeMount() {
      const songId = location.search.split("?")[1].split("=")[1].split("&")[0];
      const this_out = this;
      this_out.searchKey = location.search.split("&")[1].split("=")[1];
      axios.post("/api/songDetail", {
        reqService: "BASE_WEB_ARCHITEC",
        songId
      })
      .then(({data}) => {
        console.log(data);
        this_out.searchResult = data;
      })
    },
    data() {
      return {
        searchResult: {},
        mediaTypeText: "",
        isArtistYT: false,
        searchKey: ""
      }
    },
    mounted() {

      
      const this_out = this;
      

      $(document).ready(() => {
          function startAnimation() {
              $(".songCover").css("width","0");
              $(".songCover").css("height","0");
              $(".selectedObjF").css("width", $(widnow).width());
              $(".selectedObjF").css("height", $(widnow).height());
          }
          const songId = location.search.split("?")[1].split("=")[1];
          // axios.post("/api/songDetail", {
          //   reqService: "BASE_WEB_ARCHITEC",
          //   songId
          // })
          // .then(({data}) => {
          //   console.log(data);
          // })


          const colorThief = new ColorThief();
          const img = document.getElementById("lpCover");

          // Make sure image is finished loading
          if (img.complete) {
            setTimeout(() => {
              const colorMains = colorThief.getColor(img);
              const colorPallets = colorThief.getPalette(img, 5);
              const setColor = colorMains.toString();
              // const setColor = colorPallets[3];
              // let setColor = "";
              // for (const color of colorMains) {
              //   console.log(color);
              //   setColor += 255 - (color * 1) + ",";
              // }
              // setColor = setColor.slice(0,-1);
              console.log(setColor);
              console.log(colorMains);
              // console.log(colorPallets);
              // console.log(document.getElementById("songTitle").style.textDecorationColor);
              $("#songTitle").css("color", `rgba(${setColor})`);
              $("#songArtist").css("color", `rgba(${setColor})`);
              $("#lpMiddle").css("background-color", `rgba(${setColor})`);
              $(".songCont").css("color", `rgba(${setColor})`);
              $(".playSong").css("color", `rgba(${setColor})`);
              // $(".songCont").css("background-color", `rgba(${setColor})`);
              // $("#lpMiddleC").css("background-color", `rgba(${colorMains.toString()})`);
            }, 2000);
          } else {
            image.addEventListener('load', function() {
              console.log(colorThief.getColor(img));
            });
          }
      })

      $(document).ready(() => {
        resizeAction();
      })

      $(window).resize(() => {
          resizeAction();
      })

      function resizeAction() {
          // $("div.songDetail").css("width", $(window).width()-350);
          $("div.songDetail").css("height", $(window).height()-200);
          // $("div.musicCont").css("height", $(window).height()-80);
      }


      
    }
}
</script>

<style>
.songDetail {
  width: 100%;
  /* height: 300px; */
  /* background-color: rgba(0, 0, 0, 1); */
  /* border: 1px solid black; */
}
.songDetail .backPageRed {
  font-size: 15px;
  font-weight: 300;
  color: #0F326A;
  text-decoration: none;
  position: relative;
  top: 20px;
  left: 20px;
}
.songDetail .songTitle {
  position: relative;
  width: 80%;
  height: auto;
  top: 50px;
  left: 20px;
  /* border: 1px solid black; */
}
.songDetail .songTitle .songTitleText {
  font-size: 35px;
  font-weight: 500;
  color: black;
  position: relative;
}
.songDetail .songTitle .songArtistText {
  font-size: 15px;
  font-weight: 300;
  color: black;
  position: relative;
  top: 20px;
}

.songDetail .songImage {
  width: 250px;
  height: 250px;
  position: relative;
  /* border: 1px solid black; */
  top: 120px;
  left: 20px;
  border-radius: 130px;
  overflow-x: hidden;
  overflow-y: hidden;
}
.songDetail .songImage img {
  width: 100%;
  height: 100%;
}
.songDetail .songImage .lpMiddle {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: rgba(125, 35, 24);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.songDetail .songImage .lpMiddle .lpMiddleC {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: rgb(234, 234, 234);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.songDetail .songImage .lpImgCover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
}


.songDetail .songCont {
  width: 450px;
  height: 200px;
  border: 1px solid black;
  position: absolute;
  left: 350px;
  top: 220px;
}
.songDetail .songCont .dTitle {
  position: absolute;
  top: 0px;
  left: 10px;
  font-size: 20px;
  font-weight: 500;
}
.songDetail .songCont .dTitle li {
  list-style: none;
  line-height: 60px;
}

.songDetail .songCont .dCont {
  position: absolute;
  top: 0px;
  left: 120px;
  font-size: 20px;
  font-weight: 300;
}
.songDetail .songCont .dCont li {
  list-style: none;
  line-height: 60px;
}


.songDetail .playSong {
  width: 400px;
  height: auto;
  border: 1px solid black;
  position: absolute;
  top: 520px;
  font-size: 18px;
  font-weight: 300;
  line-height: 40px;
}
.songDetail .playSong .playSongN, .playSongL {
  cursor: pointer;
}

</style>