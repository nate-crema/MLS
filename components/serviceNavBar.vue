<template>
  <div class="navBar">
<<<<<<< Updated upstream
      <a href="/new/service/main" class="serviceTitle">Base</a>
      <!-- <nuxt-link to="/new/service/search" class="searchTitleNav">검색</nuxt-link> -->
      <a href="/new/service/search" class="searchTitleNav">검색</a>
=======
      <a href="/service/main" class="serviceTitle">Base</a>
      <!-- <nuxt-link to="/service/search" class="searchTitleNav">검색</nuxt-link> -->
      <a href="/service/search" class="searchTitleNav">검색</a>
>>>>>>> Stashed changes
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
          <p class="recordTitle">재생범주</p>
          <ul class="recordContUl">
            <!-- <li onclick="location.href = '/service/record'">최근 재생목록</li>
            <li onclick="location.href = '/service/record/location'">위치기반 재생목록</li> -->
            <li>최근 재생목록</li>
            <li>위치기반 재생목록</li>
          </ul>
      </div>
      <div class="logout">
          <p class="logoutText"
          v-on:click="this.logout">로그아웃</p>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        movePlaylist: function(url) {
            location.href = url;
        },
        logout: function() {
            console.log("sef");
            this.$store.dispatch("logout");
<<<<<<< Updated upstream
=======
            setTimeout(() => {
                location.reload();
            }, 200);
>>>>>>> Stashed changes
        },
        mobileCheck: function() {
            let check = false;
            (function(a){
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }
    },
    data() {
        return {
            playList: [
                // {
                //     listName: "HelloWorldListA",
                //     listLength: 5,
                //     listBase: "Melon",
                //     url: "playList/melonWorldListA"
                // },
                // {
                //     listName: "HelloWorldListA",
                //     listLength: 5,
                //     listBase: "Melon",
                //     url: "playList/melonWorldListA"
                // },
                // {
                //     listName: "HelloWorldListA",
                //     listLength: 5,
                //     listBase: "Melon",
                //     url: "playList/melonWorldListA"
                // },
                // {
                //     listName: "HelloWorldListA",
                //     listLength: 5,
                //     listBase: "Melon",
                //     url: "playList/melonWorldListA"
                // },
                // {
                //     listName: "HelloWorldListA",
                //     listLength: 5,
                //     listBase: "Melon",
                //     url: "playList/melonWorldListA"
                // },
                // {
                //     listName: "HelloWorldListA",
                //     listLength: 5,
                //     listBase: "Melon",
                //     url: "playList/melonWorldListA"
                // },
                // {
                //     listName: "HelloWorldListA",
                //     listLength: 5,
                //     listBase: "Melon",
                //     url: "playList/melonWorldListA"
                // }
            ]
        }
    },
    mounted() {
        const this_out = this;
        $(document).ready(() => {
            if ($(window).width() <= 500) {
                $(".navBar").css("display", "none");
            } else {
                $(".navBar").css("display", "resize");
            }
        })

        $(window).resize(() => {
            if ($(window).width() <= 500) {
                $(".navBar").css("display", "none");
            } else {
                $(".navBar").css("display", "resize");
            }
        })


        // play group: disable

        $(".record").click(() => {
            alert("현재 제공이 불가능한 서비스입니다.");
            return false;
        })
    }
}
</script>

<style>



/* logo font definition */

@font-face {
    font-family: "BaseFont";
    src: url("/font/Aquire-BW0ox.otf");
}
@font-face {
    font-family: "BaseFontB";
    src: url("/font/AquireBold-8Ma60.otf");
}
@font-face {
    font-family: "BaseFontL";
    src: url("/font/AquireLight-YzE0o.otf");
}

/* logo font definition */




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
    overflow-y: auto;
}
.navBar .serviceTitle {
    position: absolute;
    top: 80px;
    left: 70px;
    font-size: 45px;
    font-weight: 700;
    font-family: "BaseFontB";
    /* font-family: "Noto Sans KR"; */
    color: #0F326A;
    text-decoration: none;
}

.searchTitleNav {
    position: absolute;
    top: 200px;
    left: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #0F326A;
    text-decoration: none;
}


.navBar .playList {
    position: absolute;
    top: 280px;
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
    opacity: 0.2;
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

.navBar .logout {
    width: 100%;
    height: 50px;
    /* border: 1px solid black; */
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    bottom: 0;
}
.navBar .logout .logoutText {
    font-size: 20px;
    font-weight: 500;
    color: rgb(175, 25, 25);
    text-align: center;
    margin-top: 10px;
}
</style>