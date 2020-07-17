<template>
  <div id="loginArea">
      <div class="titleArea">
          <p class="subTitleA subtitle">빠르게 이어지는</p>
          <p class="subTitleB subtitle">나만의 플레이리스트</p>
          <p class="title">BASE</p>
      </div>
      <img class="welcomeImg" src="/img/welcome.svg"/>
      <nuxt-child class="loginAreaC"/>
  </div>
</template>

<script>
export default {
    mounted() {
        $(document).ready(() => {
            resizeWindow();
        })

        $(window).resize(() => {
            resizeWindow();
        })

        function resizeWindow() {
            $("body").width($(window).width());
            $("body").height($(window).height());
            $(".routeArea").css("height", $("body").height()-400 + "px");
            // alert($(".routeArea").height())
        }
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
    font-weight: 300;
    transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
}




#loginArea {
    width: 100%;
    height: 100%;
    /* border: 1px solid black; */
}
#loginArea .titleArea {
    /* border: 1px solid black; */
    width: 300px;
    height: 200px;
    font-size: 24px;
    font-weight: 300;
    position: absolute;
    top: 150px;
    left: 200px;
    color: #0F326A;
    z-index: 100;
}
#loginArea .titleArea .title {
    font-family: "BaseFontB";
    font-size: 40px;
    margin-top: 20px;
}
#loginArea img.welcomeImg {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    width: 700px;
    height: auto;
    z-index: 0;
}

.loginAreaC {
    position: absolute;
    top: 400px;
    left: 200px;
}


/* responsive design */
@media (max-width: 1200px) {
    #loginArea .titleArea {
        left: 50%;
        transform: translateX(-50%);
    }
    #loginArea img.welcomeImg {
        opacity: 0.4 !important;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
    }
    #loginArea .loginAreaC {
        width: 60%;
        height: fit-content;
        left: 50%;
        transform: translateX(-50%);
    }
}
@media (max-width: 800px) {
    #loginArea .loginAreaC {
        width: 90%;
        height: fit-content;
        left: 50%;
        transform: translateX(-50%);
    }
}


</style>