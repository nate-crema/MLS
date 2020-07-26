<template>
  <div id="playlistM" hidden>
    <div id="playlistList">
      <p class="plistNT">재생목록에 추가</p>
      <div class="spinner spinner3"></div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    const this_out = this;
    $(document).ready(() => {
      // Axios.post("/api/playlist/detail")
      // .then(({data}) => {
      //   this_out.list = data;
      // })
    })
  }
}
</script>

<style>
#playlistM {
    /* width: 100%;
    height: 100%; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 1px solid black; */
    background-color: rgba(0, 0, 0, 0.1);
}
#playlistM #playlistList {
  width: 350px;
  height: 200px;
  /* background-color: rgba(0, 0, 0, 0.8); */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#playlistM #playlistList .plistNT {
  font-size: 20px;
  color: white;
  position: absolute;
  top: 30px;
  left: 30px;
}
</style>