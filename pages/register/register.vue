<template>
  <div class="wrapper">
      <div class="titleArea">
        <p class="title">3. 시스템 등록</p>
        <p class="semiTitle">Base에 회원정보를 등록합니다</p>
      </div>
      <div class="line-design"></div>
      <div class="passCode">
        <p class="passCodeP">인증코드</p>
        <div class="inputArea">
          <p class="inputNum inputPassCode PassCodeA" name="passCodeUnset"></p>
          <p class="inputNum inputPassCode PassCodeB" name="passCodeUnset"></p>
          <p class="inputNum inputPassCode PassCodeC" name="passCodeUnset"></p>
          <p class="inputNum inputPassCode PassCodeD" name="passCodeUnset"></p>
          <h2 class="numCharSpliter">+</h2>
          <p class="inputChar inputPassCode PassCodeE" name="passCodeUnset"></p>
        </div>
        <div name="inputCharShowerUnset"></div>
      </div>
      <nuxt-link :to="to" id="nuxt-link-next" hidden>alpha</nuxt-link>
  </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
          isInputing: -1,
          inputData: "",
          to: "/"
        }
    },
    watch: {
      isInputing: function() {
        // console.log("sequence: " + this.isInputing);
        // console.log("data: " + this.inputData);
      }
    },
    mounted() {
        console.log(this.$store.state.userInfo);
        const Hangul = window.Hangul;
        const this_out = this;
        $(document).ready(() => {

          // authorize check

          if (!this_out.$store.state.userInfo.pn) {
            this_out.to = "/register/authorize";
            setTimeout(() => {
              document.getElementById("nuxt-link-next").click();
            }, 500);
          } else if (Object.keys(this_out.$store.state.userInfo).length > 1) {
            this_out.to = "/sync/Google";
            setTimeout(() => {
              document.getElementById("nuxt-link-next").click();
            }, 500);
          }

          // input security

          function makeInputId() {
            let idName = "";
            const possibility = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_~!@#$%^&*()+";
            for (var i = 0; i < 10; i++) {
              idName += possibility.charAt(Math.floor(Math.random()*possibility.length));
            }
            return idName;
          }

          setInputId(document.getElementsByName("passCodeUnset"));
          const idName = setInputId(document.getElementsByName("inputCharShowerUnset"), true);

          function setInputId(passCodeArr, isSave) {

            // console.log(passCodeArr);
            if (passCodeArr.length == 0) return false;
            else {
              if (isSave == true) {
                // console.log(passCodeArr[0]);
                const docId = makeInputId();
                passCodeArr[0].setAttribute("id", docId);
                passCodeArr[0].style.width="70px";
                passCodeArr[0].style.height="90px";
                passCodeArr[0].style.position="absolute";
                passCodeArr[0].style.right="0";
                passCodeArr[0].style.top="50%";
                passCodeArr[0].style.transform="translateY(-50%)";
                passCodeArr[0].style.textAlign="center";
                passCodeArr[0].style.paddingTop="30px";
                passCodeArr[0].style.fontFamily="Noto Sans KR";
                passCodeArr[0].style.fontWeight="300";
                // passCodeArr[0].setAttribute("name", "inputCharShowerSetted");
                passCodeArr[0].setAttribute("name", "");
                // setInputId(document.getElementsByName("passCodeUnset"));
                return docId;
              } else {
                // console.log(passCodeArr[0]);
                const docId = makeInputId();
                passCodeArr[0].setAttribute("id", docId);
                passCodeArr[0].setAttribute("name", "passCodeSetted");
                setInputId(document.getElementsByName("passCodeUnset"));
              }
            }
          }

          $("p.inputPassCode[name=\"passCodeSetted\"]").click(() => {
            if (this_out.isInputing == -1) {
              document.getElementsByName("passCodeSetted")[0].style.backgroundColor = "rgba(4, 0, 255, 0.1)";
              this_out.isInputing++;
            } else {
              document.getElementsByName("passCodeSetted")[this_out.isInputing].style.backgroundColor = "rgba(4, 0, 255, 0.1)";
            }
          })

          let beforeTimestamp = 0;
          let isEntered = false;


          $(window).keydown((e) => {
            if (!location.href.includes("/register/register")) return true;
            // console.log(e);
            // console.log(this_out.isInputing);
            const keyInfo = e.originalEvent;

            // console.log(e.timeStamp);
            // console.log(beforeTimestamp);

            if ((e.timeStamp - beforeTimestamp) < 10 && (e.timeStamp - beforeTimestamp) > -10) {
              console.log("Request Depricated");
              beforeTimestamp = e.timeStamp;
              return false;
            } 
            beforeTimestamp = e.timeStamp;


            // if backspace 

            if (keyInfo.key == "Backspace") {
              if (this_out.isInputing > -1) {
                if (this_out.isInputing < 4) {
                  this_out.inputData = this_out.inputData.substr(0, this_out.inputData.length-1);
                  document.getElementsByName("passCodeSetted")[this_out.isInputing].style.backgroundColor = "rgb(255, 255, 255)";
                  document.getElementsByName("passCodeSetted")[--this_out.isInputing].style.backgroundColor = "rgba(4, 0, 255, 0.1)";
                } else {
                  if (document.getElementById(idName).innerText == "") {
                    this_out.inputData = this_out.inputData.substr(0, this_out.inputData.length-1);
                    document.getElementsByName("passCodeSetted")[this_out.isInputing].style.backgroundColor = "rgb(255, 255, 255)";
                    document.getElementsByName("passCodeSetted")[--this_out.isInputing].style.backgroundColor = "rgba(4, 0, 255, 0.1)";
                  } else {
                    // console.log(document.getElementById(idName).innerText.substr(0, document.getElementById(idName).innerText.length-1));
                    document.getElementById(idName).innerText = document.getElementById(idName).innerText.substr(0, document.getElementById(idName).innerText.length-1);
                  }
                }
              }
            } else {
              if (this_out.isInputing > -1 && this_out.isInputing < 4) {
                const possibility = "0123456789";
                if (possibility.includes(keyInfo.key) && keyInfo.code.replace("Digit", "") != keyInfo.code) {
                  // 연속 동일숫자 입력여부 확인
                  // console.log(this_out.inputData.substr(this_out.inputData.length-1, 1)*1);
                  // console.log(keyInfo.key + "" == this_out.inputData.substr(this_out.inputData.length-1, 1));
                  if (this_out.inputData.substr(this_out.inputData.length-1, 1) == keyInfo.key + "") {
                    alert("직전 입력 숫자와 같은 숫자를 입력하실 수 없습니다.");
                  // 연속숫자 입력여부 확인
                  } else if (this_out.isInputing != 0 && ((this_out.inputData.substr(this_out.inputData.length-1, 1)*1)+1 == keyInfo.key || (this_out.inputData.substr(this_out.inputData.length-1, 1)*1)-1 == keyInfo.key)) {
                    alert("직전 입력 숫자와 연속된 숫자를 입력하실 수 없습니다.");
                  } else {
                    document.getElementsByName("passCodeSetted")[this_out.isInputing].style.backgroundColor = "#3b804761";
                    this_out.inputData += keyInfo.code.replace("Digit", "");
                    document.getElementsByName("passCodeSetted")[++this_out.isInputing].style.backgroundColor = "rgba(4, 0, 255, 0.1)";
                  }
                  // console.log(this_out.inputData);
                } else {
                  alert("앞 4자리는 숫자만 입력 가능합니다.");
                }
              } else if (this_out.isInputing >= 4 && this_out.isInputing < 7) {
                // this_out.isInputing++;
                const possibilityA = "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅃㅉㄸㄲㅆ";
                const possibilityB = "ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅔㅐㅖㅒ"
                if (!possibilityA.includes(keyInfo.key) && !possibilityB.includes(keyInfo.key)) {
                  if (keyInfo.key != "Shift" && keyInfo.key != "Alt" && keyInfo.key != "CapsLock" && keyInfo.key != "Enter") {
                    let inputERD;
                    if ("0123456789".includes(keyInfo.key)) inputERD = "숫자";
                    else if ("abcdefghijklmnopqrstuvwxyz".includes(keyInfo.key)) inputERD = "영어";
                    else inputERD = "올바르지 않은 입력키";
                    alert("한국어 자/모음만 입력 가능합니다. 현재 " + inputERD + "가 입력되었습니다.");
                  } else if (keyInfo.key == "Enter") {

                    if (isEntered) {
                      alert("등록중입니다! 잠시만 기다려주세요");
                      return false;
                    } else isEntered = true;

                    // passCode Input Complete
                    const dissolve = Hangul.d(document.getElementById(idName).innerText, true); ;
                    const totalOK = dissolve.every(function(element, index) {
                      // console.log(index);
                      let isOKA = false;
                      let isOKB = false;
                      // console.log(possibilityA.includes(element[0]));
                      // console.log(possibilityB.includes(element[1]));
                      // console.log(element[0]);
                      // console.log(element[1]);
                      // console.log(element[1]);
                      if (possibilityA.includes(element[0])) isOKA = true;
                      if (element[1] != undefined && possibilityB.includes(element[1])) isOKB = true;
                      if (!isOKA || !isOKB) {
                        return false;
                      } else {
                        return true;
                      }
                    })
                    if (totalOK) {
                      // passed
                      this_out.inputData += document.getElementById(idName).innerText;
                      document.getElementsByName("passCodeSetted")[4].style.backgroundColor = "#3b804761";
                      this_out.$store.dispatch('registered', {passwd: this_out.inputData})
                      .then(() => {
                        setTimeout(() => {
                          this_out.to = "/sync/Google";
                          setTimeout(() => {
                            document.getElementById("nuxt-link-next").click();
                          }, 500);
                        }, 100);
                      })
                      // console.log(this_out);
                    } else {
                      alert("마지막 인증문자열의 내용이 조건과 일치하지 않습니다.");
                      location.reload();
                    }
                  }
                } else {
                  let cont = document.getElementById(idName).innerText;
                  let assembled = Hangul.assemble(cont + keyInfo.key);
                  if (assembled == cont) console.log("same");
                  else document.getElementById(idName).innerText = assembled;
                  // console.log(cont);
                  // document.getElementsByName("passCodeSetted")[4].innerText = cont;
                }

                if (this_out.isInputing == 6) {
                }
              } else {
                
              }
              // if (keyInfo.code.includes("F") && keyInfo.replace("F", "")*1 != NaN) {
              //   alert(keyInfo.key + "는 허용되지 않는 입력키입니다");
              // }
            }
            // console.log(Object.keys(e));
            // if (e.key == "Backspace") {
              
            // } else {
              
            // }
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



.passCode {
  width: 750px;
  height: 200px;
  position: absolute;
  top: 180px;
  left: 150px;
  /* border: 1px solid black; */
}
.passCode .passCodeP {
  font-size: 25px;
  font-weight: 300;
  font-family: "Noto Sans KR";
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
}

.passCode .inputArea {
  width: fit-content;
  height: fit-content;
  /* border: 1px solid red; */
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.passCode .inputArea .inputPassCode[name="passCodeSetted"] {
  width: 70px;
  height: 90px;
  border: 1px solid rgb(17, 26, 66);
  border-radius: 7px;
  display: inline-block;
  margin-left: 5px;
  background-color: rgb(255, 255, 255);
  transition: all .3s cubic-bezier(0.05, 0.82, 0.54, 0.87);
  cursor: text;
}
.passCode .inputArea .inputPassCode[name="passCodeSetted"]:hover {
  background-color: rgb(245, 245, 245);
}
.passCode .inputArea .numCharSpliter {
  position: absolute;
  top: 50%;
  right: 90px;
  transform: translateY(-50%);
}
.passCode .inputArea .inputPassCode[name="passCodeSetted"].inputChar {
  margin-left: 50px;
}




@media (max-width: 700px) {
  .passCode {
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>