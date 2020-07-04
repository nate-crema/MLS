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
        $("div.musicCont").css("width", $(window).width()-350);
        $("div.musicCont").css("height", $(window).height()-80);
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
  right: 20px;
  overflow-y: auto;
}
</style>