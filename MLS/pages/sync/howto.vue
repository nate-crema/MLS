<template>
  <div>
      <div class="hello">
          <p class="hello-A">{{welcomeText}}</p>
          <div class="inputObj">
              <input type="text" name="userName"/>
              <div class="inputUBar"></div>
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
            welcomeAPlayed: false
        }
    },
    mounted() {
        const this_out = this;
        $(document).ready(() => {
            welcomeA();

            document.getElementsByName("userName")[0].onkeypress = (e) => {
                var keyCode = e.which ? e.which : e.keyCode;
                if(keyCode == 32) return false;
            };

            $(window).keydown((e) => {
                if (this_out.welcomeAPlayed) {
                    if (e.originalEvent.key == "Enter") {
                        const inputName = document.getElementsByName("userName")[0].value;
                        if (inputName && inputName != "") {
                            $(".inputObj").css("opacity", "0.6");
                            document.getElementsByName("userName")[0].setAttribute("readOnly", "");
                            this_out.userName = inputName;
                            changeText(inputName + "님, 안녕하세요!", 600, {
                                "font-size": "25px",
                                "font-size": "20px",
                                "top": "40%"
                            });
                        }
                    }
                }
            })
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

        function changeText(text, time, opt) {
            $(".hello-A").css("top", "40%");
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
                $(".hello-A").css("top", "50%");
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
    border: 1px solid black;
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
</style>