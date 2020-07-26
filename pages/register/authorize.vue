<template>
  <div class="wrapper">
      <div class="titleArea">
        <p class="title">2. 사용자 인증</p>
        <p class="semiTitle">서비스를 사용하기 위하여 본인인증을 진행합니다</p>
      </div>
      <div class="line-design"></div>
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
            <p id="authCodePH" class="placeHolderInput">인증번호 입력</p>
            <input id="authCodeIN" type="number"/>
          </div>
      </div>
      <nuxt-link :to="to" id="nuxt-link-next" hidden>Welcome</nuxt-link>
  </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            isSend: false,
            pn: "",
            to: "/"
        }
    },
    mounted() {
        const this_out = this;
        $(document).ready(() => {
            console.log(this_out.$store.state.userInfo);
            if (this_out.$store.state.userInfo.pn) {
                this_out.to = "/register/register";
                setTimeout(() => {
                    document.getElementById("nuxt-link-next").click();   
                }, 500);
            }

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
                        if (pn.length != 11) {
                            alert("입력 형식에 맞지 않습니다. 전화번호는 11자리 입니다.");
                            document.getElementById("phoneNumIN").value = "";
                            $("#phoneNumPH").css("opacity", "0");
                            document.getElementById("phoneNumIN").focus();
                        } else if (pn.substr(0, 3) != "010") {
                            alert("올바르지 않은 전화번호 입니다.");
                            document.getElementById("phoneNumIN").value = "";
                            $("#phoneNumPH").css("opacity", "0");
                            document.getElementById("phoneNumIN").focus();
                        } else {
                            axios.post('/api/user/sms', {
                                to: document.getElementById("phoneNumIN").value
                            })
                            .then(({data}) => {
                                if (data == true) {
                                    this_out.isSend = true;
                                    this_out.pn = document.getElementById("phoneNumIN").value;
                                    setTimeout(() => {
                                        document.getElementById("phoneNumIN").attributes[1].value = "text";
                                        document.getElementById("phoneNumIN").attributes[1].value = "text";
                                        document.getElementById("phoneNumIN").value = "전송이 완료되었습니다";
                                        $(".authCode").css("opacity", "1");
                                        $("#authCodePH").click();
                                    }, 500);
                                } else if (data == "duplicate") {
                                    document.getElementById("phoneNumIN").setAttribute("type", "text");
                                    document.getElementById("phoneNumIN").value = "이미 등록된 전화번호입니다. 로그인 해주세요";
                                    document.getElementById("phoneNumIN").style.color = "#9c0c0c";
                                    setTimeout(() => {
                                        location.href = "/login";
                                    }, 800);
                                } else {
                                    alert(data);
                                    document.getElementById("phoneNumIN").setAttribute("type", "text");
                                    document.getElementById("phoneNumIN").value = "오류가 발생했습니다. 다시 시도해주세요.";
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
                        }
                    }
                }
                
            })

            $("#authCodePH").click(() => {
                document.getElementById("authCodeIN").focus();
            })
            $("input#authCodeIN").focus(() => {
                if (this_out.isSend) {
                    $("#authCodePH").css("opacity", "0");
                    document.getElementById("authCodeIN").focus();
                    setTimeout(() => {    
                        $("#authCodePH").css("display", "none");
                        $("#authCodePH").css("z-index", "150");
                    }, 120);
                }
            })
            $("input#authCodeIN").focusout(() => {
                // console.log("sergd");
                var code = document.getElementById("authCodeIN").value;
                // console.log(code);
                if (!code) {
                    setTimeout(() => {    
                        $("#authCodePH").css("z-index", "200");
                        $("#authCodePH").css("display", "unset");
                    }, 100);
                    setTimeout(() => {    
                        $("#authCodePH").css("opacity", "1");
                    }, 120);
                } else {
                    if (code.length != 4) {
                        alert("입력 형식에 맞지 않습니다. 인증코드는 4자리 입니다.");
                        document.getElementById("authCodeIN").value = "";
                        document.getElementById("authCodeIN").focus();
                    } else {
                        axios.post('/api/user/sms', {
                            to: this_out.pn,
                            code: document.getElementById("authCodeIN").value,
                        })
                        .then(({data}) => {
                            if (data == true) {
                                this_out.to = "/register/register";
                                setTimeout(() => {
                                    document.getElementById("authCodeIN").attributes[1].value = "text";
                                    document.getElementById("authCodeIN").value = "인증되었습니다!";
                                    document.getElementById("authCodeIN").style.color = "#0f6a43";
                                    document.getElementById("phoneNumIN").value = "인증되었습니다!";
                                    document.getElementById("phoneNumIN").style.color = "#0f6a43";
                                    this_out.$store.dispatch("authed", {pn: this_out.pn + ""})
                                    .then(() => {
                                        console.log("sefg");
                                        document.getElementById("nuxt-link-next").click();   
                                    })
                                }, 500);
                            } else {
                                document.getElementById("phoneNumIN").value = "인증번호가 일치하지 않습니다. 다시 시도해주세요.";
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
                    }
                }
            })

            // function msgWrite(cont, color) {
            //     $(".msg").css("opacity", "0");
            //     setTimeout(() => {
            //         document.getElementsByClassName("msg")[0].innerHTML = cont;
            //         document.getElementsByClassName("msg")[0].style.color = color;
            //     }, 100);
            //     setTimeout(() => {
            //         $(".msg").css("opacity", "1");
            //     }, 200);
            // }
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



.authorize {
  width: 500px;
  height: 200px;
  position: absolute;
  top: 180px;
  left: 150px;
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
    width: 100%;
    height: 50%;
    opacity: 0.3;
}
.authorize .authCode .authCodeSvg {
    width: 45px;
    height: auto;
}
.authorize .authCode .placeHolderInput {
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
.authorize .authCode input#authCodeIN {
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
}
.authorize .authCode input#authCodeIN:focus {
    outline: none;
    border-bottom: 1px solid #0F326A;
}




@media (max-width: 700px) {
  .authorize {
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>