<template>
  <div>
      <div class="hello">
          <p class="hello-A">{{welcomeText}}</p>
          <div class="inputObj">
              <input type="text" name="userName"/>
              <div class="inputUBar"></div>
          </div>
          <div class="prevServiceWrap">
            <label
            class="serviceObj"
            v-for="(obj, index) in serviceList"
            :key="index"
            :for="obj.id"
            :id="index + obj.name">
                <input type="checkbox"
                :id="obj.id"
                :value="obj.id"
                v-model="selectedServiceArr"
                hidden />
                <div class="imgWrap">
                <img
                :src="obj.icon" />
                </div>
                <p class="serviceName">{{obj.name}}</p>
            </label>
            <div class="serviceObj notUse halfDsn">
                <p class="serviceName">이용중인 서비스 없음</p>
            </div>
            <div class="serviceObj Use halfDsn">
                <p class="serviceName">다음 ></p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            welcomeText: "alpha",
            userName: "",
            welcomeAPlayed: false,
            selectedServiceArr: [],
            selectedServiceArrOld: [],
            serviceList: [
                {
                    name: "Melon",
                    id: "Melon",
                    icon: "https://t1.daumcdn.net/cfile/tistory/99CC063F5CF5C5080D"
                },
                {
                    name: "Bugs",
                    id: "Bugs",
                    icon: "https://file.bugsm.co.kr/wbugs/common/header/logo_bugs.png?_t_s_=20200306-2211"
                },
                {
                    name: "Youtube (Music)",
                    id: "youtubeMusic",
                    icon: "https://pbs.twimg.com/profile_images/1148296104611635201/VlnAnBaz_400x400.jpg"
                },
                {
                    name: "Genie",
                    id: "Genie",
                    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/fe/68/e2/fe68e24e-bbca-cfc6-406d-55eae66bc26d/source/256x256bb.jpg"
                }
            ]
        }
    },
    watch: {
        selectedServiceArr: function() {
            let added = this.selectedServiceArr.filter(x => !this.selectedServiceArrOld.includes(x));
            let removed = this.selectedServiceArrOld.filter(x => !this.selectedServiceArr.includes(x));
            // console.log("#" + added);
            this.selectedServiceArrOld = this.selectedServiceArr;
            console.log(added);
            if (added.length != 0) {
                $(".serviceObj[for='" + added[0] + "'] .imgWrap img").toggleClass("checked");
                $(".serviceObj[for='" + added[0] + "']").toggleClass("checkedWrapObj");
            } else {
                $(".serviceObj[for='" + removed[0] + "'] .imgWrap img").toggleClass("checked");
                $(".serviceObj[for='" + removed[0] + "']").toggleClass("checkedWrapObj");
            }
        }
    },
    mounted() {
        const this_out = this;
        $(document).ready(() => {
            welcomeA();
            // welcomeB();

            $(".serviceObj.notUse").click(() => {
                this_out.selectedServiceArr = [];
                $(".serviceObj").removeClass("checked");
                alert("현재 단계에서 서비스를 연동하지 않습니다. 추후 마이페이지에서 등록하실 수 있습니다.");
            })

            $("div.serviceObj.Use.halfDsn").click(() => {
                document.getElementsByClassName("prevServiceWrap")[0].style.opacity = "0.4";
                setTimeout(() => {
                    document.getElementsByClassName("prevServiceWrap")[0].style.display = "none";
                }, 500);
            })



            $(".serviceObj").click(() => {
                console.log();
            })

            document.getElementsByName("userName")[0].onkeypress = (e) => {
                var keyCode = e.which ? e.which : e.keyCode;
                if(keyCode == 32) return false;
            };

            $(window).keydown((e) => {
                if (this_out.welcomeAPlayed) {
                    if (e.originalEvent.key == "Enter") {
                        const inputName = document.getElementsByName("userName")[0].value;
                        if (inputName && inputName != "") {
                            $(".inputObj").css("opacity", "0.4");
                            document.getElementsByName("userName")[0].setAttribute("readOnly", "");
                            this_out.userName = inputName;
                            changeText(inputName + "님, 안녕하세요!", 600, {
                                "font-size": "25px",
                                "font-size": "20px",
                                "top": "40%"
                            });
                            setTimeout(() => {
                                $(".inputObj").css("opacity", "0");
                                $(".inputObj").css("width", "50%");
                                setTimeout(() => {
                                    document.getElementsByClassName("inputObj")[0].remove();
                                    welcomeB();
                                }, 300);
                            }, 1500);
                        }
                    }
                }
            })

            // $(".serviceObj").click(() => {
            //     console.log(this);
            // })
        })

        function welcomeA() {
            this_out.welcomeText = "안녕하세요!";
            setTimeout(() => {
                changeText("Base 사용을 환영합니다!", 600, {
                    "font-size": "25px"
                });
            }, 1500);
            setTimeout(() => {
                changeText("당신의 이름은 무엇인가요?", 600, {
                    "font-size": "28px"
                });
                setTimeout(() => {
                    $(".hello-A").css("font-size", "20px");
                    $(".hello-A").css("top", "40%");
                    $(".inputObj").css("opacity", "1");
                    document.getElementsByName("userName")[0].focus()
                    this_out.welcomeAPlayed = true;
                }, 1500);
            }, 4000);
        }

        function welcomeB() {
            console.log("welcomeB");
            $(".prevServiceWrap").css("display", "unset");
            setTimeout(() => {
                $(".prevServiceWrap").css("opacity", "0.7");
            }, 500);
            changeText("사용하시던 기존 음악 서비스를 선택해주세요!", 600, {
                "font-size": "18px",
                "top": "20%"
            })

            setTimeout(() => {
                changeText("해당되는 모든 옵션을 선택", 600, {
                    "font-size": "18px",
                    "top": "20%"
                })
                setTimeout(() => {
                    changeText("없다면 '없음' 선택", 600, {
                        "font-size": "18px",
                        "top": "20%"
                    })
                }, 4500);
            }, 8000);
        }

        function changeText(text, time, opt) {
            Object.keys(opt).includes("top") ? $(".hello-A").css("top", 40-(Object.values(opt)[Object.keys(opt).indexOf("top")].replace("%", ""))*1 + "%") : $(".hello-A").css("top", "40%")
            $(".hello-A").css("opacity", "0");
            setTimeout(() => {
                $(".hello-A").css("top", "70%");
                this_out.welcomeText = text;
                if (opt) {
                    Object.keys(opt).forEach((element, index) => {
                        $(".hello-A").css(element, Object.values(opt)[index]);
                    })
                }
            }, 250);
            setTimeout(() => {
                Object.keys(opt).includes("top") ? $(".hello-A").css("top", Object.values(opt)[Object.keys(opt).indexOf("top")]) : $(".hello-A").css("top", "50%")
                $(".hello-A").css("opacity", "1");
            }, time);
        }
    }
}
</script>

<style>
* {
    transition: all .5s cubic-bezier(0.18, 0.65, 0.25, 1);
}
.hello {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 1px solid black; */
    width: 50%;
    height: 50%;
}
.hello p.hello-A {
    width: fit-content;
    height: fit-content;
    font-size: 40px;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: #0F326A;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .5s cubic-bezier(0, 0.99, 0.54, 1.01);
}

.hello .inputObj {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80px;
    /* border: 1px solid purple; */
    opacity: 0;
}
.hello .inputObj input {
    width: 100%;
    font-size: 25px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    text-align: center;
}
.hello .inputObj input:focus {
    outline: none;
}
.hello .inputObj .inputUBar {
    width: 100%;
    height: 2px;
    background-color: #0F326A;
    border-radius: 1px;
}


.hello .prevServiceWrap {
    width: 100%;
    height: 70%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    /* border: 1px solid purple; */
    overflow-y: auto;
    display: none;
    opacity: 0;
}
.hello .prevServiceWrap .serviceObj {
    width: 99%;
    height: 100px;
    /* border: 1px solid #0F326A; */
    border-radius: 20px;
    /* position: absolute; */
    display: block;
    background-color: rgba(0, 0, 0, 0.03);
    position: relative;
    transition: all .8s cubic-bezier(0.07, 1.2, 0.26, 0.87);
    cursor: pointer;
    box-shadow: 5px 5px 3px rgb(184, 173, 173);
}
.hello .prevServiceWrap .serviceObj.checkedWrapObj {
    /* background-color: rgb(214, 234, 243); */
    background-color: white;
    /* border: 1px solid black; */
    box-shadow: inset 5px 5px 3px rgb(184, 173, 173);
}
.hello .prevServiceWrap .serviceObj .imgWrap img.checked {
  /* background: #0088ff23; */
  opacity: 1;
}

.hello .prevServiceWrap .serviceObj:hover {
    background-color: rgb(223, 229, 248);
}

.hello .prevServiceWrap .serviceObj .imgWrap {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-color: rgb(245, 245, 245, 0.4);
    float: left;
    overflow-x: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
}
.hello .prevServiceWrap .serviceObj .imgWrap img {
    height: 80%;
    border-radius: 20px;
    opacity: 0.4;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.hello .prevServiceWrap .serviceObj .serviceName {
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 120px;
    transform: translateY(-50%);
}
.hello .prevServiceWrap .serviceObj.halfDsn {
    width: 49%;
    display: inline-block;
}
.hello .prevServiceWrap .serviceObj.halfDsn.Use {
    float: right;
    right: 5px;
}
.hello .prevServiceWrap .serviceObj.halfDsn .serviceName {
    font-size: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>