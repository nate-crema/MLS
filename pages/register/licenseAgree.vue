<template>
  <div class="wrapper">
      <div class="titleArea">
        <p class="title">1. 약관 승인</p>
        <p class="semiTitle">아래 약관을 읽고 승인해주세요</p>
      </div>
      <div class="line-design"></div>
      <div class="licAgree">
          <div class="agreeChk">
              <div class="checkboxWrap">
                  <input id="i2" type="checkbox">
                  <label for="i2">개인정보 이용약관, 서비스 약관을 확인하였으며,<br>해당 약관에 동의합니다</label>
                </div>
                <nuxt-link to="/register/authorize" id="nuxt-link-next" hidden>sfdg</nuxt-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted() {
        $(document).ready(() => {
            $("label[for='i2']").click(() => {
                setTimeout(() => {
                    if (document.getElementById("i2").checked) {
                        document.getElementById("nuxt-link-next").click();
                    }
                }, 500);
            })
        })
    }
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
    width: 300px;
    height: 100%;
    border: 1px solid red;
}
.licAgree .agreeChk label[for="i2"] {
    font-size: 15px;
}







/* checkbox design */
/* Reference: https://codepen.io/hansmaad/pen/qaGrQL */

.checkboxWrap {
  position: relative;
  margin: 1em 0;
  text-align: left;
}
.checkboxWrap.checkboxWrap-inline {
  display: inline-block;
}
.checkboxWrap label {
  cursor: pointer;
  display: block;
  line-height: 1.25em;
  vertical-align: top;
  clear: both;
  padding-left: 1px;
  padding-top: 20px;
}
.checkboxWrap label:not(:empty) {
  /* padding-left: 0.75em; */
}
.checkboxWrap label:before, .checkboxWrap label:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
}
.checkboxWrap label:before {
  width: 1.25em;
  height: 1.25em;
  background: #fff;
  border: 2px solid rgba(0, 0, 0, 0.54);
  border-radius: 0.125em;
  cursor: pointer;
  transition: background .3s;
}
.checkboxWrap input[type="checkbox"] {
  outline: 0;
  visibility: hidden;
  width: 1.25em;
  margin: 0;
  display: block;
  float: left;
  font-size: inherit;
}
.checkboxWrap input[type="checkbox"]:checked + label:before {
  background: #184c79;
  border: none;
}
.checkboxWrap input[type="checkbox"]:checked + label:after {
  transform: translate(0.25em, 0.3365384615em) rotate(-45deg);
  width: 0.75em;
  height: 0.375em;
  border: 0.125em solid #fff;
  border-top-style: none;
  border-right-style: none;
}
.checkboxWrap input[type="checkbox"]:disabled + label:before {
  border-color: rgba(0, 0, 0, 0.26);
}
.checkboxWrap input[type="checkbox"]:disabled:checked + label:before {
  background: rgba(0, 0, 0, 0.26);
}

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  background: #f0f0f0;
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 16px;
}

section {
  background: white;
  margin: 0 auto;
  padding: 4em;
  max-width: 800px;
}
section h1 {
  margin: 0 0 2em;
}



</style>