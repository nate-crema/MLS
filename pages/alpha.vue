<template>
  <iframe src="https://www.melon.com" frameborder="0" style="width: 100%; height: 100%;"></iframe>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

import axios from 'axios';

export default {
  mounted() {
    var frame = document.getElementsByTagName("iframe")[0];
    var innerframe = frame.contentWindow || frame.contentDocument;
    console.log(innerframe);
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

