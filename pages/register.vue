<template>
  <div class="mainPage">
      <div class="area-a">
        <p>빠르게 이어지는</p>
        <p>나만의 플레이리스트</p>
        <p class="serviceName">Base</p>
      </div>
      <transition name="slide">
        <nuxt-child class="routeArea"/>
      </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(() => {
      resizeWindow();
      if (location.pathname == "/register" || location.pathname == "/register/") {
        location.href="/register/licenseAgree";
      }
    })

    $(window).resize(() => {
      resizeWindow();
    })

    function resizeWindow() {
      $("body").width($(window).width());
      $("body").height($(window).height());
      $(".routeArea").css("height", $("body").height()-300 + "px");
      // alert($(".routeArea").height())
    }
  } 
}
</script>

<style>

* {
  transition: all .5s ease;
}

.mainPage {
  width: 100%;
  height: 100%;
}
.mainPage .area-a {
  position: absolute;
  top: 80px;
  left: 100px;
  width: 400px;
  height: 300px;
  /* border: 1px solid purple; */
}
.mainPage .area-a p {
  font-size: 25px;
  font-family: "Noto Sans KR";
  font-weight: 300;
  color: #0F326A;
}
.mainPage .area-a .serviceName {
  font-size: 40px;
  font-weight: 700;
  margin-top: 10px;
  /* position: absolute;
  top: -15px;
  left: 270px; */
}
.mainPage .routeArea {
  position: absolute;
  width: 100%;
  top: 300px;
  /* bottom: 10px; */
}


@media (max-width: 700px) {
  .mainPage .area-a {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 450px) {
  .mainPage .area-a {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 300px;
    /* border: 1px solid purple; */
  }
}

</style>