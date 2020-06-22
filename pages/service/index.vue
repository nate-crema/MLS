<template>
  <div>
    <navbar-side></navbar-side>
    <nuxt-child/>
  </div>
</template>

<script>

import serviceNavBar from "~/components/serviceNavBar";

export default {
  components: {
    "navbar-side": serviceNavBar
  }
}
</script>

<style>

</style>