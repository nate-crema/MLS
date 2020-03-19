<template>
  <div>
      <div class="songObj" v-for="(songInfo, index) in searchResult['노래']"
      :key="index">
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
        <div class="songCover">
          <div class="songInfo">
            <p class="songTitle"></p>
            <p class="songArtist"></p>
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
        searchResult: []
      }
    },
    mounted() {

      const this_out = this;

      $(document).ready(() => {
        document.getElementsByClassName("searchTitle")[0].innerHTML = "\"" + decodeURI(document.location.search.replace("?searchKey=", "")) + "\"에 대한 검색결과입니다!"
        document.getElementById("searchData").value = decodeURI(document.location.search.replace("?searchKey=", ""));
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


      
      axios.post('/api/search', {
          searchKey: decodeURI(document.location.search.replace("?searchKey=", ""))
      })
      .then(({data}) => {
          console.log(data);
          this_out.searchResult = data;
      })
    }
}
</script>

<style>

</style>