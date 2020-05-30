<template>
  <div>
      <isMediaComp :mediaTypeText="mediaTypeText"></isMediaComp>
      <div class="artists" id="artists">
      </div>
      <div class="songObjs">
        <div class="songObj" v-for="(indivSong, index) in searchResult.melonSearch" :key="index">
          <svg version="1.1" id="lg_imgA" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
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
          </svg>
          <div class="songCover" style="background-size: contain"
          :style="{backgroundImage: `url(${indivSong.song.songImg})`}">
            <div class="songInfo">
              <p class="songTitle"></p>
              <p class="songArtist"></p>
            </div>
          </div>
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
    data() {
      return {
        searchResult: [],
        mediaTypeText: "",
        isArtistYT: false
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
  height: 300px;
  border: 1px solid black;
  border-radius: 15px;
  position: relative;
  top: 20px;
  overflow-x: hidden;
}
.songObjs .songObj {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 120px;
}
.songObjs #lg_imgA {
  width: 120px;
  position: absolute;
  z-index: 2;
}
.songObjs .songCover {
  width: 120px;
  height: 120px;
  border: 1px solid black;
  position: absolute;
  left: 30px;
  background-color: white;
  z-index: 5;
}
</style>