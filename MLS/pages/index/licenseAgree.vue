<template>
  <div class="wrapper">
      <div class="titleArea">
        <p class="title">1. 약관 승인</p>
        <p class="semiTitle">아래 약관을 읽고 승인해주세요</p>
      </div>
      <div class="line-design"></div>
      <div class="licAgree">
          <div class="agreeChk">
              <label for="agreeChker"></label>
              <input type="checkbox" id="agreeChker"/>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper {
    width: 100%;
    height: 100px;
    /* border: 1px solid purple; */
}
.wrapper .titleArea {
    position: absolute;
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
}
.wrapper .titleArea p {
    font-family: "Noto Sans KR";
    color: #0F326A;    
}
.wrapper .titleArea p.title {
    font-size: 30px;
    font-weight: 500;
}
.wrapper .titleArea p.semiTitle {
    font-size: 15px;
    font-weight: 300;
}


.wrapper .line-design {
    position: absolute;
    top: 120px;
    width: 100%;
    height: 1px;
    background-color: #0F326A;
}
.licAgree {
    width: 85%;
    height: 260px;
    border: 1px solid purple;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 150px;
}
.licAgree .agreeChk {
    width: 200px;
    height: 100%;
    border: 1px solid red;
}

.licAgree .agreeChk label {
    padding: 10px 10px 10px 10px;
    border: 1px solid black;
}

</style>