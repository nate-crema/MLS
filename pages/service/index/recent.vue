<template>
  <div>
      <div class="recentTop">
          <p class="text">최근목록</p>
      </div>
      <div class="logList" v-if="log.length > 0">
        <div class="listCont" v-for="(logIndiv, index) in log"
        :key="index">
          <p class="listNum">{{index+1}}</p>
          <div class="songImgWrap">
            <img class="songImg"
            :src="logIndiv.songImg"/>
          </div>
          <p class="songTitle">{{logIndiv.songTitle}}</p>
          <p class="listenTime">{{new Date(logIndiv.playDate).toString().split("GMT")[0]}}에 들음</p>
        </div>
      </div>
      <img class="backgroundImgRecent" src="/img/undraw_timeline_9u4u.svg">
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      log: []
    }
  },
  mounted() {
    const this_out = this;
    Axios.post("/api/song/record", {
      cusId: this_out.$store.state.userInfo.cusId
    })
    .then(({data}) => {
      this_out.log = data.data.reverse();
      console.log(this_out.log);
    })
    .catch((e) => {
      console.error(e);
    })
  }
}
</script>

<style>
.recentTop {
  position: absolute;
  width: 180px;
  top: 100px;
  left: 100px;
  font-size: 30px;
  font-weight: 500;
  color: #0F326A;
}
.backgroundImgRecent {
  position: absolute;
  top: 150px;
  right: 20px;
  width: 50%;
  height: 50%;
  opacity: 0.4;
}


/* loglist */
.logList {
  width: 80%;
  height: 50%;
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  /* border: 1px solid black; */
  overflow-y: auto;
}
.logList .listCont {
  width: 100%;
  height: 100px;
  /* border: 1px solid black; */
  position: relative;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.49);
}
.logList .listCont .listNum {
  font-size: 24px;
  font-weight: 500;
  color: #0F326A;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
}
.logList .listCont .songImgWrap {
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100px;
  border-radius: 50px; 
}
.logList .listCont .songImgWrap .songImg {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.logList .listCont .songTitle {
  font-size: 17px;
  font-weight: 500;
  color: #05265c;
  margin-top: 35px;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 220px;
  margin-top: 0;
}
.logList .listCont .listenTime {
  font-size: 17px;
  position: absolute;
  transform: translateY(-50%);
  left: 220px;
  top: 60%;
  color: #1b63d8;
}
</style>