<template>
  <div class="index">
    <div class="scrollToLogin">
        <p class="loginLoad">스크롤하여 더보기</p> 
        <nuxt-link id="toMainA" to="/service/main/mainA"  style="display: none;">rgtr</nuxt-link>
        <img class="arrowDImg" src="/img/arrowD.svg"/>
    </div>
    <div class="extender"></div>  
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
/* scroll layer */
.extender {
  width: 100%;
  height: 300px;
  /* border: 1px solid black; */
  position: absolute;
  bottom: -10px;
}
.scrollToLogin {
    position: absolute;
    top: unset;
    bottom: 200px;
    left: 100px;
    color: #0F326A;
    width: 200px;
    opacity: 0;
    /* border: 1px solid black; */
}
.scrollToLogin .loginLoad {
  font-size: 17px;
  font-weight: 300;
  position: absolute;
  left: 40px;
}
.scrollToLogin .arrowDImg {
    width: 20px;
    height: auto;
    margin-top: 10px;
    position: absolute;
    top: 0;
    left: 0px;
}
</style>