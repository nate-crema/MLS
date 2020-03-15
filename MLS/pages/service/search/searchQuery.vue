<template>
  <div>
      
  </div>
</template>

<script>

import axios from 'axios';

export default {
    mounted() {

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
          console.log(data)
      })
    }
}
</script>

<style>

</style>