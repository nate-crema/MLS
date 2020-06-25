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
              console.log(colorMains);
              // console.log(document.getElementById("songTitle").style.textDecorationColor);
              $("#songTitle").css("color", `rgba(${colorMains.toString()})`);
              $("#songArtist").css("color", `rgba(${colorMains.toString()})`);
              $("#lpMiddle").css("background-color", `rgba(${colorMains.toString()})`);
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
</style>