<template>
  <div class="navBar">
      <p class="serviceTitle">Base</p>
      <div class="playList">
          <p class="playListTitle">플레이리스트</p>
          <ul class="playListContUl">
            <li
            v-for="(listCont, index) in playList"
            :key="index"
            @click="movePlaylist(listCont.url)"
            >{{listCont.listName}}</li>
          </ul>
      </div>
      <div class="record">
          <p class="recordTitle">재생기록</p>
          <ul class="recordContUl">
            <li onclick="location.href = '/service/record'">최근 재생기록</li>
            <li onclick="location.href = '/service/record/location'">위치기반 재생기록</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        movePlaylist: function(url) {
            location.href = url;
        }
    },
    data() {
        return {
            playList: [
                {
                    listName: "HelloWorldListA",
                    listLength: 5,
                    listBase: "Melon",
                    url: "playList/melonWorldListA"
                },
                {
                    listName: "HelloWorldListA",
                    listLength: 5,
                    listBase: "Melon",
                    url: "playList/melonWorldListA"
                },
                {
                    listName: "HelloWorldListA",
                    listLength: 5,
                    listBase: "Melon",
                    url: "playList/melonWorldListA"
                },
                {
                    listName: "HelloWorldListA",
                    listLength: 5,
                    listBase: "Melon",
                    url: "playList/melonWorldListA"
                },
                {
                    listName: "HelloWorldListA",
                    listLength: 5,
                    listBase: "Melon",
                    url: "playList/melonWorldListA"
                },
                {
                    listName: "HelloWorldListA",
                    listLength: 5,
                    listBase: "Melon",
                    url: "playList/melonWorldListA"
                },
                {
                    listName: "HelloWorldListA",
                    listLength: 5,
                    listBase: "Melon",
                    url: "playList/melonWorldListA"
                }
            ]
        }
    }
}
</script>

<style>
* {
    font-family: "Noto Sans KR";
    transition: all .4s ease;
}



.navBar {
    width: 280px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* border: 1px solid black; */
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.49);
}
.navBar .serviceTitle {
    position: absolute;
    top: 80px;
    left: 70px;
    font-size: 45px;
    font-weight: 700;
    font-family: "Noto Sans KR";
    color: #0F326A;
}


.navBar .playList {
    position: absolute;
    top: 250px;
    right: 20px;
    /* border: 1px solid black; */
    width: 78%;
    height: 250px;
}
.navBar .playListContUl {
    position: absolute;
    top: 60px;
    /* left: 50px; */
    /* border: 1px solid black; */
    width: 80%;
    height: 50%;
    overflow-y: auto;
}
.navBar .playList .playListTitle {
    position: absolute;
    font-size: 20px;
    font-weight: 500;
    color: #0F326A;
}
.navBar .playList li {
    list-style: none;
    /* position: absolute; */
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 30px;
    color: #0F326A;
    cursor: pointer;
}



.navBar .record {
    position: absolute;
    top: 550px;
    right: 20px;
    /* border: 1px solid black; */
    width: 78%;
    height: 250px;
}
.navBar .recordContUl {
    position: absolute;
    top: 60px;
    /* left: 50px; */
    /* border: 1px solid black; */
    width: 80%;
    height: 50%;
    overflow-y: auto;
}
.navBar .record .recordTitle {
    position: absolute;
    font-size: 20px;
    font-weight: 500;
    color: #0F326A;
}
.navBar .record li {
    list-style: none;
    /* position: absolute; */
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 30px;
    color: #0F326A;
    cursor: pointer;
}
</style>