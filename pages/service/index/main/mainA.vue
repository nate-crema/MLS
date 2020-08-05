<template>
  <div class="mainA">
      <div class="musicListArea">
          <div class="playlistObj base" @click="playlist('recent');">
              <img class="playlistImg" src="/img/playlist.svg"/>
              <p class="playlistT">Recent</p>
              <p class="playlistCont">최근재생</p>
              <img class="playlistAdd pListFncBtn" src="/img/playlistAddBtn.svg" @click="playlist('recent');"/>
              <img class="playlistPlay pListFncBtn" src="/img/listplayBtn.svg"/>
          </div>
          <div class="playlistObj base" @click="move('search')">
              <img class="playlistImg" src="/img/playlist.svg"/>
              <p class="playlistT">Search</p>
              <p class="playlistCont">Base<br>검색</p>
              <!-- <img class="playlistAdd pListFncBtn" src="/img/playlistAddBtn.svg" @click="playlist('ytrecm');"/>
              <img class="playlistPlay pListFncBtn" src="/img/listplayBtn.svg"/> -->
          </div>
          <div class="playlistObj melon" @click="playlist('KR_TOP100');">
              <img class="playlistImg" src="/img/playlist.svg"/>
              <p class="playlistT">Melon</p>
              <p class="playlistCont">한국 TOP100<br>{{new Date().getMonth()+1}}/{{new Date().getDate()}} {{new Date().getHours()}}시 기준</p>
              <img class="playlistAdd pListFncBtn" src="/img/playlistAddBtn.svg"/>
              <img class="playlistPlay pListFncBtn" src="/img/listplayBtn.svg"/>
          </div>
      </div>
      <div class="bar-contentDevide"></div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
    data() {
        return {
            playlists: []
        }
    },
    methods: {
        move: function() {
            location.href="/service/search";
        },
        playlist: function(position) {
            // console.log(this);
            let url = "";
            switch(position) {
                case "recent":
                    url="/service/recent";
                    break;
                case "ytrecm":
                    url="/service/playlist/ytRecommend";
                    break;
                case "KR_TOP100":
                    url="/service/playlist/top100";
                    break;
                default:
                    break;
            }
            console.log(location);
            console.log(location.href);
            location.href=url;
        }
    },
    mounted() {

        const this_out = this;
        // Axios.post('http://localhost:3000/api/search/top100')
        // .then(({data}) => {
        //     console.log(data);
        //     this_out.playlists = data;
        // });

        $(document).ready(() => {
            cngBeforeDesingA();
            setTimeout(() => {
                resizeWindow();
            }, 100);
        })

        $(window).resize(() => {
            resizeWindow();
        })

        function resizeWindow() {
            $(".mainA").width($(".main.vueBlocks").width()/4*3);
            $(".mainA").height($(".main.vueBlocks").height());
        }

        function cngBeforeDesingA() {
            console.log("Loded");
            $(".welcome").css("top", "12%");
            $(".welcome .textA").css("font-size", "40px");
            $(".welcome .textB").css("margin-top", "10px");
            if ($(window).width() < 1300) {
                $(".backgroundImg").css("opacity", "0.2");
            } else $(".backgroundImg").css("opacity", "0.2");
        }


        // wheeling event listener

        let isC = false;
 
        $(document).bind("mousewheel", function(e) {
            // console.log(`${e.originalEvent.wheelDelta < 0} / ${!isC} / ${location.pathname}`);
            if (!isC && e.originalEvent.wheelDelta < 0) {
                isC = true;
                document.getElementById("toMainA").click();
                $(window).scrollTop();
            } else if (isC && e.originalEvent.wheelDelta > 0) {
                isC = false;
                
            }
            // alert("srgtf")
            // console.log(this);
        })
    }
}
</script>

<style>
.mainA {
    position: absolute;
    top: 0;
    left: 0;
    bottom: unset !important;
    /* border: 1px solid black; */
}




.mainA .musicListArea {
    position: absolute;
    top: 300px;
    left: 100px;
    /* border: 1px solid black; */
    width: 80%;
    height: 220px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}

/* playlistObj */





.playlistObj {
    width: 200px;
    height: 200px;
    /* border: 1px solid black; */
    border-radius: 20px;
    position: relative;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.49);
    display: inline-block;
    /* float: left; */
    margin-right: 20px;
    overflow-x: hidden;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
.playlistObj.base {
    background-color: #009DFF2d;
    /* opacity: 11%; */
}
.playlistObj.youtube {
    background-color: #ff00002d;
    /* opacity: 11%; */
}
.playlistObj.melon {
    background-color: #0791252d;
    /* opacity: 11%; */
}

.playlistObj .playlistImg {
    position: absolute;
    top: 20px;
    left: 20px;
}
.playlistObj .playlistT {
    font-size: 50px;
    font-weight: 500;
    color: #0F326A;
    position: absolute;
    left: 110px;
    opacity: 0.4;
}
.playlistObj .playlistCont {
    font-size: 14px;
    font-weight: 300;
    color: #0F326A;
    position: absolute;
    left: 20px;
    bottom: 20px;
    /* opacity: 0.4; */
}
.playlistObj .pListFncBtn {
    position: absolute;  
    cursor: pointer; 
}
.playlistObj .playlistAdd {
    bottom: 20px;
    right: 60px;
}
.playlistObj .playlistPlay {
    bottom: 20px;
    right: 20px;
}



.bar-contentDevide {
    width: 50px;
    height: 3px;
    border-radius: 2px;
    background-color: #0F326A;
    position: absolute;
    bottom: 280px;
    left: 100px;
}
</style>