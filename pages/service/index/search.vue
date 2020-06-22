<template>
  <div>
    <div class="search">
        <div class="searchObj">
            <p class="searchTitle">제목/아티스트/가사를 검색해보세요! ;)</p>
            <div class="searchArea">
                <input type="text" id="searchData" v-model="inputDataUri"/>
                <div class="searchBtn" id="searchCmd">
                    <nuxt-link :to="'/service/search/searchQuery?searchKey=' + encodeURI(inputDataUri)" hidden id="hiddenClicker"></nuxt-link>
                    <svg xmlns="http://www.w3.org/2000/svg" height="512px" version="1.1" viewBox="-1 0 136 136.21852"
                      width="512px">
                      <g>
                        <link type="text/css" id="dark-mode" rel="stylesheet" href="" class="active-path" />
                        <style type="text/css" id="dark-mode-custom-style" class="active-path" />
                        <g id="surface1">
                        <path d="M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 " style=" fill-rule:nonzero;fill-opacity:1;" data-original="#000000" class="active-path" stroke="#FFFFFF" fill="#FFFFFF"/>
                        </g></g>
                    </svg>
                </div>
            </div>
            <nuxt-child class="searchResult"/>
        </div>
    </div>
  </div>
</template>

<script>

import serviceNavBar from "~/components/serviceNavBar";

export default {
    components: {
         "navbar-side": serviceNavBar
    },
    
  data() {
      return {
          inputDataUri: ""
      }
  },
  mounted() {
      $(document).ready(() => {
          resizeAction();
      })

      $(window).resize(() => {
          resizeAction();
      })

      function resizeAction() {
          $("div.search").css("width", $(window).width()-350);
          $("div.search").css("height", $(window).height());
      }

      $("#searchData").on("propertychange change keyup paste input", () => {
        // console.log(document.getElementById("searchData").value);
        if (document.getElementById("searchData").value == "") {
            $(".searchBtn").css("opacity", "0");
            setTimeout(() => {
                $(".searchBtn").css("display", "none");
            }, 300);
        }
        else {
            $(".searchBtn").css("display", "block");
            setTimeout(() => {
                $(".searchBtn").css("opacity", "1");
            }, 10);
        }
      })

      $("#searchCmd").click(() => {
          document.getElementById("hiddenClicker").click();
          if (location.href.includes('/search/searchQuery')) {
              setTimeout(() => {
                  location.reload();
              }, 100);
            }
      });
  }
}
</script>

<style>
.search {
    position: absolute;
    top: 0;
    right: 0;
    /* border: 1px solid black; */
}
.search .searchObj {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 300px;
    /* border: 1px solid purple; */
}
.search .searchObj .searchTitle {
    font-size: 20px;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: rgb(15, 63, 141);
}
.search .searchObj .searchArea {
    width: 100%;
    height: 80px;
    border: 1.6px solid rgb(15, 63, 141);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 40px;
}
.search .searchObj .searchArea input {
    width: 90%;
    height: 99%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border-radius: 40px; */
    border: none;
    font-size: 27px;
    background-color: rgba(0, 0, 0, 0);
    transition: all .4s cubic-bezier(0, 1.13, 0.6, 1);
}
.search .searchObj .searchArea input:focus {
    outline: none;
    font-size: 33px;
}

.search .searchObj .searchArea .searchBtn {
    position: absolute;
    top: -2px;
    right: 0;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: rgb(15, 63, 141);
    display: none;
    opacity: 0;
    transition: all .5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    cursor: pointer;
}
.search .searchObj .searchArea .searchBtn svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
}


.search .searchObj .searchResult {
    position: absolute;
    top: 150px;
    width: 100%;
    height: 100%;
}
</style>