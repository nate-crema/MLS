<template>
  <div>
    <navbar-side></navbar-side>
    <nuxt-child/>
    <bottPlayer class="bottom-player" :playerId="songId"></bottPlayer>
  </div>
</template>

<script>

import serviceNavBar from "~/components/serviceNavBar";
import bottPlayer from '~/components/bottPlayer';

export default {
  components: {
    "navbar-side": serviceNavBar,
    bottPlayer
  },
  data() {
    return {
      songId: this.$store.state.songPlayer.songId
    }
  }
}
</script>

<style>

</style>