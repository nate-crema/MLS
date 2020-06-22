<template>
<div class="loginArea">
  <p class="serviceSubTitle">빠르게 이어지는 <br> 나만의 플레이리스트</p>
  <p class="serviceName">Base</p>
  <div class="authorize">
      <div class="phoneNum">
        <svg  class="phoneNumSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512px" height="512px"><g transform="matrix(1 0 0 1 0 0)"><link type="text/css" id="dark-mode" rel="stylesheet" href="" class="active-path" style=""/><style type="text/css" id="dark-mode-custom-style"/><g>
            <g>
                <path d="M298.667,25.6h-85.333c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h85.333    c4.71,0,8.533-3.823,8.533-8.533C307.2,29.423,303.377,25.6,298.667,25.6z" data-original="#000000" class="active-path" fill="#11306A"/>
            </g>
            </g><g>
                <g>
                    <path d="M358.4,25.6h-8.533c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h8.533    c4.71,0,8.533-3.823,8.533-8.533C366.933,29.423,363.11,25.6,358.4,25.6z" data-original="#000000" class="active-path" fill="#11306A"/>
                </g>
            </g><g>
                <g>
                    <path d="M266.598,435.2H245.41c-12.979,0-23.543,10.564-23.543,23.543v4.122c0,12.979,10.564,23.535,23.535,23.535h21.188    c12.979,0,23.543-10.556,23.543-23.535v-4.122C290.133,445.764,279.569,435.2,266.598,435.2z M273.067,462.865    c0,3.567-2.901,6.468-6.468,6.468H245.41c-3.575,0-6.477-2.901-6.477-6.468v-4.122c0-3.575,2.901-6.477,6.477-6.477h21.18    c3.576,0,6.477,2.901,6.477,6.477V462.865z" data-original="#000000" class="active-path" fill="#11306A"/>
                </g>
            </g><g>
                <g>
                    <path d="M370.227,0H141.781c-17.007,0-30.848,13.841-30.848,30.848v450.304c0,17.007,13.841,30.848,30.848,30.848h228.437    c17.007,0,30.848-13.841,30.848-30.839V30.848C401.067,13.841,387.226,0,370.227,0z M384,481.152    c0,7.595-6.178,13.781-13.773,13.781H141.781c-7.603,0-13.781-6.187-13.781-13.773V30.848c0-7.595,6.178-13.781,13.781-13.781    h228.437c7.603,0,13.781,6.187,13.781,13.781V481.152z" data-original="#000000" class="active-path" fill="#11306A"/>
                </g>
            </g><g>
                <g>
                    <path d="M392.533,51.2H119.467c-4.71,0-8.533,3.823-8.533,8.533v358.4c0,4.71,3.823,8.533,8.533,8.533h273.067    c4.71,0,8.533-3.823,8.533-8.533v-358.4C401.067,55.023,397.244,51.2,392.533,51.2z M384,409.6H128V68.267h256V409.6z" data-original="#000000" class="active-path" fill="#11306A"/>
                </g>
            </g></g>
        </svg>
        <p id="phoneNumPH" class="placeHolderInput">핸드폰 번호 입력</p>
        <input id="phoneNumIN" type="number"/>
        <p class="msg"></p>
      </div>
      <div class="authCode">
        <svg class="authCodeSvg" xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="-1 0 512 512" width="512px"><g><link type="text/css" id="dark-mode" rel="stylesheet" href="" class="active-path" style=""/><style type="text/css" id="dark-mode-custom-style" class="active-path"/><path d="m195 362h-20c-19.300781 0-35 15.699219-35 35v80c0 19.300781 15.699219 35 35 35h20c19.300781 0 35-15.699219 35-35v-80c0-19.300781-15.699219-35-35-35zm5 115c0 2.757812-2.242188 5-5 5h-20c-2.757812 0-5-2.242188-5-5v-80c0-2.757812 2.242188-5 5-5h20c2.757812 0 5 2.242188 5 5zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m75 482h-15v-105c0-8.285156-6.714844-15-15-15h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h15v90h-15c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m475 362h-20c-19.300781 0-35 15.699219-35 35v80c0 19.300781 15.699219 35 35 35h20c19.300781 0 35-15.699219 35-35v-80c0-19.300781-15.699219-35-35-35zm5 115c0 2.757812-2.242188 5-5 5h-20c-2.757812 0-5-2.242188-5-5v-80c0-2.757812 2.242188-5 5-5h20c2.757812 0 5 2.242188 5 5zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m355 482h-15v-105c0-8.285156-6.714844-15-15-15h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h15v90h-15c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m195 181h-20c-19.300781 0-35 15.699219-35 35v80c0 19.300781 15.699219 35 35 35h20c19.300781 0 35-15.699219 35-35v-80c0-19.300781-15.699219-35-35-35zm5 115c0 2.757812-2.242188 5-5 5h-20c-2.757812 0-5-2.242188-5-5v-80c0-2.757812 2.242188-5 5-5h20c2.757812 0 5 2.242188 5 5zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m75 301h-15v-105c0-8.285156-6.714844-15-15-15h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h15v90h-15c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m335 181h-20c-19.300781 0-35 15.699219-35 35v80c0 19.300781 15.699219 35 35 35h20c19.300781 0 35-15.699219 35-35v-80c0-19.300781-15.699219-35-35-35zm5 115c0 2.757812-2.242188 5-5 5h-20c-2.757812 0-5-2.242188-5-5v-80c0-2.757812 2.242188-5 5-5h20c2.757812 0 5 2.242188 5 5zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m495 301h-15v-105c0-8.285156-6.714844-15-15-15h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h15v90h-15c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m55 0h-20c-19.300781 0-35 15.699219-35 35v80c0 19.300781 15.699219 35 35 35h20c19.300781 0 35-15.699219 35-35v-80c0-19.300781-15.699219-35-35-35zm5 115c0 2.757812-2.242188 5-5 5h-20c-2.757812 0-5-2.242188-5-5v-80c0-2.757812 2.242188-5 5-5h20c2.757812 0 5 2.242188 5 5zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m215 120h-15v-105c0-8.285156-6.714844-15-15-15h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h15v90h-15c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m475 0h-20c-19.300781 0-35 15.699219-35 35v80c0 19.300781 15.699219 35 35 35h20c19.300781 0 35-15.699219 35-35v-80c0-19.300781-15.699219-35-35-35zm5 115c0 2.757812-2.242188 5-5 5h-20c-2.757812 0-5-2.242188-5-5v-80c0-2.757812 2.242188-5 5-5h20c2.757812 0 5 2.242188 5 5zm0 0" data-original="#000000" class="active-path" fill="#11306A"/><path d="m355 120h-15v-105c0-8.285156-6.714844-15-15-15h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h15v90h-15c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0" data-original="#000000" class="active-path" fill="#11306A"/></g> </svg>
        <div class="inputArea">
            <p class="inputNum inputPassCode PassCodeA" name="passCodeUnset"></p>
            <p class="inputNum inputPassCode PassCodeB" name="passCodeUnset"></p>
            <p class="inputNum inputPassCode PassCodeC" name="passCodeUnset"></p>
            <p class="inputNum inputPassCode PassCodeD" name="passCodeUnset"></p>
            <h2 class="numCharSpliter">+</h2>
            <p class="inputChar inputPassCode PassCodeE" name="passCodeUnset"></p>
            <div name="inputCharShowerUnset"></div>
        </div>
      </div>
  </div>
  <nuxt-link :to="to" id="nuxt-link-next" hidden>alpha</nuxt-link>
</div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

import axios from 'axios';

export default {
    data() {
        return {
            isInputing: -1,
            inputData: "",
            to: ""
        }
    },
  mounted() {
        console.log(this.$store.state.isAuthorized);
        console.log(this.$store.state.isRegistered);
        const this_out = this;
        $(document).ready(() => {

            $("#phoneNumPH").click(() => {
                document.getElementById("phoneNumIN").focus();
            })
            $("input#phoneNumIN").focus(() => {
                if (!this_out.isSend) {
                    $("#phoneNumPH").css("opacity", "0");
                    document.getElementById("phoneNumIN").focus();
                    setTimeout(() => {    
                        $("#phoneNumPH").css("display", "none");
                        $("#phoneNumPH").css("z-index", "150");
                    }, 120);
                } else {
                    $("input#authCodeIN").focus();
                }
            })
            $("input#phoneNumIN").focusout(() => {
                if (!this_out.isSend) {
                    // console.log("sergd");
                    var pn = document.getElementById("phoneNumIN").value;
                    // console.log(pn);
                    if (!pn) {
                        setTimeout(() => {    
                            $("#phoneNumPH").css("z-index", "200");
                            $("#phoneNumPH").css("display", "unset");
                        }, 100);
                        setTimeout(() => {    
                            $("#phoneNumPH").css("opacity", "1");
                        }, 120);
                    } else {
                        // if (pn.length != 11) {
                        //     alert("입력 형식에 맞지 않습니다. 전화번호는 11자리 입니다.");
                        //     document.getElementById("phoneNumIN").value = "";
                        //     $("#phoneNumPH").css("opacity", "0");
                        //     document.getElementById("phoneNumIN").focus();
                        // } else if (pn.substr(0, 3) != "010") {
                        //     alert("올바르지 않은 전화번호 입니다.");
                        //     document.getElementById("phoneNumIN").value = "";
                        //     $("#phoneNumPH").css("opacity", "0");
                        //     document.getElementById("phoneNumIN").focus();
                        // } else {
                            axios.post('/api/login', {
                                pn: document.getElementById("phoneNumIN").value
                            })
                            .then(({data}) => {
                                if (data == true) {
                                    this_out.isSend = true;
                                    this_out.pn = document.getElementById("phoneNumIN").value;
                                    setTimeout(() => {
                                        document.getElementById("phoneNumIN").attributes[1].value = "text";
                                        document.getElementById("phoneNumIN").attributes[1].value = "text";
                                        document.getElementById("phoneNumIN").value = "비밀번호를 입력해주세요.";
                                        $(".authCode").css("display", "unset");
                                        setTimeout(() => {
                                            $(".authCode").css("opacity", "1");
                                            $("#authCodePH").click();
                                        }, 500);
                                    }, 500);
                                } else{
                                    document.getElementById("phoneNumIN").value = "등록되지 않은 전화번호입니다.";
                                    document.getElementById("phoneNumIN").style.color = "#9c0c0c";
                                    setTimeout(() => {
                                        location.reload();
                                    }, 500);   
                                }
                            })
                            .catch((e) => {
                                document.getElementById("phoneNumIN").value = "오류가 발생했습니다. 다시 시도해주세요.";
                                document.getElementById("phoneNumIN").style.color = "#9c0c0c";
                                setTimeout(() => {
                                    location.reload();
                                }, 500);  
                            })
                        // }
                    }
                }
                
            })

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
            console.log(document.getElementsByName("inputCharShowerUnset"));
            const idName = setInputId(document.getElementsByName("inputCharShowerUnset"), true);
            console.log(idName);

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
                        console.log(docId);
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

            $(window).keydown((e) => {
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
                            document.getElementsByName("passCodeSetted")[this_out.isInputing].style.backgroundColor = "#3b804761";
                            this_out.inputData += keyInfo.code.replace("Digit", "");
                            document.getElementsByName("passCodeSetted")[++this_out.isInputing].style.backgroundColor = "rgba(4, 0, 255, 0.1)";
                        } else {
                            alert("앞 4자리는 숫자만 입력 가능합니다.");
                        }
                    } else if (this_out.isInputing >= 4 && this_out.isInputing < 7) {
                        // this_out.isInputing++;
                        const possibilityA = "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅃㅉㄸㄲㅆ";
                        const possibilityB = "ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅔㅐㅖㅒ"
                        if (!possibilityA.includes(keyInfo.key) && !possibilityB.includes(keyInfo.key)) {
                            if (keyInfo.key == "Enter") {
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
                                    this_out.$store.dispatch('registered', this_out.inputData);
                                    setTimeout(() => {
                                    document.getElementsByName("passCodeSetted")[4].style.backgroundColor = "#3b804761";
                                    setTimeout(() => {
                                        setTimeout(() => {
                                            axios.post('/api/login', {
                                                pn: this_out.pn,
                                                SndBnyCode: this_out.inputData,
                                            })
                                            .then(({data}) => {
                                                console.log(data);
                                                if (data == true) {
                                                    this_out.to = "/service/main";
                                                    setTimeout(() => {
                                                        document.getElementById("phoneNumIn").value = "인증되었습니다!";
                                                        document.getElementById("phoneNumIn").style.color = "#0f6a43";
                                                    }, 500);
                                                    setTimeout(() => {
                                                        document.getElementById("nuxt-link-next").click();   
                                                        // location.href = "/service";
                                                    }, 1000);
                                                } else{
                                                    document.getElementById("phoneNumIN").value = "회원정보를 확인할 수 없습니다.";
                                                    document.getElementById("phoneNumIN").style.color = "#9c0c0c";
                                                    setTimeout(() => {
                                                        location.reload();
                                                    }, 1200);   
                                                }
                                            })
                                            .catch((e) => {
                                                alert(e);
                                                document.getElementById("phoneNumIN").value = "오류가 발생했습니다. 다시 시도해주세요.";
                                                document.getElementById("phoneNumIN").style.color = "#9c0c0c";
                                                setTimeout(() => {
                                                    location.reload();
                                                }, 1000);  
                                            })
                                        }, 500);
                                    }, 500);
                                    }, 500);
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
                    }
                }
            })
        })
    }
}
</script>

<style>

* {
  transition: all .5s ease;
}

.loginArea {
  width: 550px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: 1px solid black; */
}
.loginArea .serviceSubTitle {
  font-size: 16px;
  font-weight: 300;
  color: #0F326A;
  position: absolute;
  /* top: 20px; */
  left: 0;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  font-family: "Noto Sans KR";
}
.loginArea .serviceName {
  font-size: 60px;
  font-weight: 700;
  color: #0F326A;
  position: absolute;
  top: 40px;
  left: 0;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  font-family: "Noto Sans KR";
}




.authorize {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 180px;
  /* left: 150px; */
  /* border: 1px solid black; */
}
.authorize .phoneNum {
    position: absolute;
    width: 100%;
    height: 50%;
}
.authorize .phoneNum .phoneNumSvg {
    width: 45px;
    height: auto;
}
.authorize .phoneNum .placeHolderInput {
    font-size: 25px;
    font-weight: 300;
    font-family: "Noto Sans KR";
    color: #0F326A;
    position: absolute;
    top: 15px;
    left: 75px;
    z-index: 200;
    transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);
}
.authorize .phoneNum input#phoneNumIN {
    font-size: 20px;
    font-weight: 300;
    font-family: "Noto Sans KR";
    color: #0F326A;
    border: none;
    position: absolute;
    top: 15px;
    left: 75px;
    background-color: rgba(0, 0, 0, 0);
    z-index: 199;
    width: 80%;
}
.authorize input[type='number']:focus {
    outline: none;
    border-bottom: 1px solid #0F326A !important;
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}





.authorize .authCode {
    position: absolute;
    top: 50%;
    opacity: 0;
    display: none;
    width: 100%;
    height: 50%;
    left: 0;
    /* border: 1px solid black; */
}
.authorize .authCode .authCodeSvg {
    width: 45px;
    height: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.authorize .authCode .passCodeP {
  font-size: 25px;
  font-weight: 300;
  font-family: "Noto Sans KR";
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
}

.authorize .authCode .inputArea {
  width: fit-content;
  height: fit-content;
  /* border: 1px solid red; */
  position: absolute;
  left: 60px;
  top: 0px;
  /* transform: translateY(-50%); */
}
.authorize .authCode .inputArea .inputPassCode[name="passCodeSetted"] {
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
.authorize .authCode .inputArea .inputPassCode[name="passCodeSetted"]:hover {
  background-color: rgb(245, 245, 245);
}
.authorize .authCode .inputArea .numCharSpliter {
  position: absolute;
  top: 50%;
  right: 90px;
  transform: translateY(-50%);
}
.authorize .authCode .inputArea .inputPassCode[name="passCodeSetted"].inputChar {
  margin-left: 50px;
}




@media (max-width: 700px) {
  .authorize {
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .authorize .authCode {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .loginArea {
      width: 80%;
  }
  .authorize .authCode .inputArea {
      top: 50%;
      transform: translateY(-50%);
  }
  .authorize .authCode .inputArea .numCharSpliter {
      right: 55px;
  }
  .authorize .authCode .inputArea .inputPassCode[name="passCodeSetted"] {
        width: 35px;
        height: 60px;
    }
  .authorize .authCode .inputArea div {
      padding-top: 18px !important;
      width: 35px !important;
      height: 60px !important;
  }
}
</style>

