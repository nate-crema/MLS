<template>
    <div>
        <nuxt-link to="/licenseAgree">
            <div class="startBtn">
                <p>시작하기 ></p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.mainPage .startBtn {
  font-size: 20px;
  font-weight: 500;
  color: #0F326A;
  padding: 20px 60px 20px 60px;
  border: 1px solid #0F326A;
  width: 220px;
  height: 70px;
  position: absolute;
  top: 300px;
  right: 100px;
  text-align: right;
  transition: all .2s cubic-bezier(0.17, -0.01, 0, 1.03);
  border-radius: 13px;
}
.mainPage .startBtn:hover {
  background-color: #0F326A;
  color: white;
  padding-right: 26px;
}

@media (max-width: 700px) {
  .mainPage .startBtn {
    right: unset;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>