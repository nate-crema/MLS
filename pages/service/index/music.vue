<template>
  <div>
      <nuxt-child class="musicCont"/>
  </div>
</template>

<script>

export default {
  mounted() {
    $(document).ready(() => {
        resizeAction();
    })

    $(window).resize(() => {
        resizeAction();
    })

    function resizeAction() {
        if ($(window).width() <= 500 ) {
            $("div.musicCont").css("width", $(window).width());
            $("div.musicCont").css("height", $(window).height()+250);
        } else {
            $("div.musicCont").css("width", $(window).width()-350);
            $("div.musicCont").css("height", $(window).height()-80);
        }
    }
  }
}
</script>

<style>
.musicCont {
  position: absolute;
  top: 80px;
  width: 80%;
  height: 100%;
  left: 50px;
  /* overflow-y: hidden; */
  overflow-y: auto;
}
</style>