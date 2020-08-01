<template>
  <div>
    <navbar-side></navbar-side>
    <nuxt-child class="vueBlocks" />
    <bottPlayer class="bottom-player" :playerId="songId"></bottPlayer>
    <playlistEditor></playlistEditor>
  </div>
</template>

<script>

import serviceNavBar from "~/components/serviceNavBar";
import bottPlayer from '~/components/bottPlayer';
import playlistEditor from '~/components/playlistEditor';

export default {
  middleware: "auth",
  components: {
    "navbar-side": serviceNavBar,
    bottPlayer,
    playlistEditor
  },
  data() {
    return {
      songId: this.$store.state.songPlayer.songId
    }
  },
  mounted() {
    $(document).ready(() => {
        resizeWindowM();
    })

    $(window).resize(() => {
        resizeWindowM();
    })

    function resizeWindowM() {
        console.log("resized");
        // $(".vueBlocks").css("left", $(window).width()-280 + "px");
        if ($(window).width() <= 850) {
          $(".vueBlocks").css("width", $(window).width() + "px");
          $(".vueBlocks").css("left", "0px");
        } else {
          $(".vueBlocks").css("width", $(window).width()-280 + "px");
          $(".vueBlocks").css("left", "280px"); 
        }
        $(".vueBlocks").css("height", $(window).height() + "px");
        // alert($(".routeArea").height())
    }
  }
}
</script>

<style>
.vueBlocks {
  position: absolute;
  top : 0;
  left: 280px;
  width: 100%;
}

@media (max-width: 850px) {
  .vueBlocks {
    left: 0px;
  }
}
</style>