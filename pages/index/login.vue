<template>
  <div>
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


        // mobile distinguition

        window.mobileCheck = function() {
            let check = false;
            (function(a){
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        };

        // mobile distinguition


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
                            axios.post('/api/user/login', {
                                pn: document.getElementById("phoneNumIN").value
                            })
                            .then(({data}) => {
                                console.log(data);
                                if (data == true) {
                                    this_out.isSend = true;
                                    this_out.pn = document.getElementById("phoneNumIN").value;
                                    setTimeout(() => {
                                        document.getElementById("phoneNumIN").attributes[1].value = "text";
                                        document.getElementById("phoneNumIN").attributes[1].value = "text";
                                        document.getElementById("phoneNumIN").value = "비밀번호를 입력해주세요.";
                                        $(".authCode").css("display", "unset");
                                        setTimeout(() => {
                                            if (mobileCheck()) {
                                                const inputPW = prompt("비밀번호를 입력하세요 (숫자 4자리 + 한글단어 1개)");
                                                login(this_out.pn, inputPW);
                                            } else {
                                                $(".authCode").css("opacity", "1");
                                                // alert(mobileCheck());
                                                // if (mobileCheck()) $("#fakeInput").click();
                                                $("#authCodePH").click();
                                            }
                                        }, 500);
                                    }, 500);
                                } else{
                                    document.getElementById("phoneNumIN").type = "text";
                                    // document.getElementById("phoneNumIN").value = "등록되지 않은 전화번호입니다.";
                                    document.getElementById("phoneNumIN").style.color = "#9c0c0c";
                                    // setTimeout(() => {
                                    //     location.reload();
                                    // }, 500);   
                                    setTimeout(() => {
                                        document.getElementById("phoneNumIN").value = "이 번호로 회원가입을 진행합니다.";
                                        document.getElementById("phoneNumIN").style.color = "#0540ad";
                                        this_out.to="/register";
                                        setTimeout(() => {
                                            document.getElementById("nuxt-link-next").click();
                                        }, 3000);
                                    }, 100);
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

            function login(pn, SndBnyCode) {
                this_out.$store.dispatch("login", {
                    pn,
                    SndBnyCode
                })
                .then((result) => {
                    if (result == true) {
                        this_out.to = "/service/main";
                        setTimeout(() => {
                            document.getElementById("phoneNumIN").value = "인증되었습니다!";
                            document.getElementById("phoneNumIN").style.color = "#0f6a43";
                        }, 500);
                        setTimeout(() => {
                            // document.getElementById("nuxt-link-next").click();   
                            location.href = this_out.to;
                        }, 1000);
                    } else {
                        console.log("esrdgf");
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
            }


            $("p.inputPassCode[name=\"passCodeSetted\"]").click(() => {
                // if (mobileCheck()) {
                //     $("#fakeInput").click();
                //         } else {
                    if (this_out.isInputing == -1) {
                        document.getElementsByName("passCodeSetted")[0].style.backgroundColor = "rgba(4, 0, 255, 0.1)";
                        this_out.isInputing++;
                    } else {
                        document.getElementsByName("passCodeSetted")[this_out.isInputing].style.backgroundColor = "rgba(4, 0, 255, 0.1)";
                    }
                // }
            })

            let beforeTimestamp = 0;

            $(window).keydown((e) => {
                console.log(e);
                console.log(this_out.isInputing);
                const keyInfo = e.originalEvent;
                if (keyInfo.key == "Enter") {
                    $("input#phoneNumIN").focusout();
                    setTimeout(() => {
                        $(".inputNum").click();
                    }, 100);
                }

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
                                    // this_out.$store.dispatch('registered', this_out.inputData);
                                    setTimeout(() => {
                                    document.getElementsByName("passCodeSetted")[4].style.backgroundColor = "#3b804761";
                                    setTimeout(() => {
                                        setTimeout(() => {
                                            login(this_out.pn, this_out.inputData);
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
                            try {
                                let cont = document.getElementById(idName).innerText;
                                let assembled = Hangul.assemble(cont + keyInfo.key);
                                if (assembled == cont) console.log("same");
                                else document.getElementById(idName).innerText = assembled;
                                // console.log(cont);
                                // document.getElementsByName("passCodeSetted")[4].innerText = cont;
                            } catch(e) {
                                console.error(e);
                                alert("보안 알고리즘에 오류가 발생하였습니다. 다시 시도해주세요.");
                                location.reload();
                            }
                        }
                    }
                }
            })
        })
    }
}
</script>

<style>

/* authorize */

.authorize {
  width: 600px;
  height: 200px;
  /* position: absolute; */
  /* top: 180px; */
  /* left: 150px; */
  /* border: 1px solid black; */
}
.authorize .phoneNum {
    position: absolute;
    width: 100%;
    height: 50%;
}
.authorize .phoneNum .phoneNumSvg {
    position: absolute;
    top: 15px;
    width: 40px;
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




@media (max-width: 1200px) {
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

/* authorize */


</style>