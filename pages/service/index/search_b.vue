<template>
  <div>
    <navbar-side></navbar-side>
    <div class="search">
        <div class="searchObj">
            <p class="searchTitle">제목/아티스트/가사를 검색해보세요! ;)</p>
            <div class="searchArea">
                <!-- Material input -->
                <div class="md-form">
                <!-- <input type="text" id="searchData" v-model="inputDataUri"/> -->
                <input type="text" id="form1" class="form-control">
                <label for="form1">Example label</label>
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

      function resizeAction() {
          $("div.search").css("width", $(window).width()-350);
          $("div.search").css("height", $(window).height());
      }

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
    width: 80%;
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