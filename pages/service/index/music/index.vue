<template>
  <div>
      riogdfjsiojo
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
          function startAnimation() {
              $(".songCover").css("width","0");
              $(".songCover").css("height","0");
              $(".selectedObjF").css("width", $(widnow).width());
              $(".selectedObjF").css("height", $(widnow).height());
          }
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
  height: 150px;
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