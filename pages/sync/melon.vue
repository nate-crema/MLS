<template>
  <div>
      <div class="hello">
          <p class="hello-A">{{welcomeText}}</p>
          <div class="addedLinks">

          </div>
          <div class="inputObj">
              <input type="text" name="link" v-model="link"/>
              <div class="inputUBar"></div>
          </div>
          <div class="btnNext">다음 단계로 ></div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            link: "",
            welcomeText: "melon",
            userName: "",
            welcomeAPlayed: false,
            links: [],
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
    mounted() {
        const this_out = this;
        $(document).ready(() => {
            welcomeA();

            document.getElementsByName("link")[0].onkeypress = (e) => {
                var keyCode = e.which ? e.which : e.keyCode;
                if(keyCode == 32) return false;
            };

            $(window).keydown((e) => {
                // console.log(e.originalEvent.key);
                // console.log(this_out.welcomeAPlayed);
                if (this_out.welcomeAPlayed) {
                    if (e.originalEvent.key == ";") {
                        objecterize();
                        return false;
                    } else if (e.originalEvent.key == "Enter") {
                        InputFnc();
                    }
                }
            })

            // $(".serviceObj").click(() => {
            //     console.log(this);
            // })
        })

        function welcomeA() {
            this_out.welcomeText = "melon 설정";
            setTimeout(() => {
                changeText("연결할 melon 재생목록 링크를 입력해주세요", 600, {
                    "font-size": "26px"
                });
            }, 1200);
            setTimeout(() => {
                changeText("여러 재생목록 입력시 세미콜론(;)으로 구분해주세요", 600, {
                    "font-size": "25px"
                });
                setTimeout(() => {
                    $(".hello-A").css("font-size", "20px");
                    $(".hello-A").css("top", "40%");
                    $(".inputObj").css("opacity", "1");
                    document.getElementsByName("link")[0].focus();
                    this_out.welcomeAPlayed = true;
                }, 1500);
            }, 3500);
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

        function InputFnc() {
            const link = this_out.link;

            // https://www.melon.com/mymusic/playlist/mymusicplaylistview_inform.htm?plylstSeq=472664284

            const linkData = link.split("?")[1];
            console.log(linkData);
        }

        function objecterize() {

            console.log(this_out.link);

            if (!this_out.link || this_out.link == "") {
                document.getElementsByName("link")[0].value = "";
                return false;
            } else {
                const inputLink = this_out.link;
                const acceptArr = [
                     "https://www.melon.com/mymusic/playlist/mymusicplaylistview_inform.htm",
                     "https://www.melon.com/mymusic/playlist/mymusicplaylist_list.htm"
                ]
                if (acceptArr.includes(inputLink.split("?")[0])) {


                    if (inputLink.split("?")[0] == acceptArr[1]) if (!confirm("입력된 링크는 계정 전체 재생목록입니다. 모든 재생목록을 동기화하시겠습니까?")) return false;

                    const htmlObject = document.createElement("div");
                    const extlink = this_out.links;
                    htmlObject.setAttribute("class", "linkObj link_" + extlink.length);

                    const pObject = document.createElement("p")
                    pObject.appendChild(document.createTextNode(this_out.link));
                    htmlObject.appendChild(pObject);


                    console.log(htmlObject);

                    this_out.links.push(this_out.link);
                    document.getElementsByName("link")[0].value = "";
                    document.getElementsByClassName("addedLinks")[0].appendChild(htmlObject);
                } else {
                    alert("올바르지 않은 링크");
                }
            }
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
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 1px solid black; */
    width: 50%;
    height: 70%;
}
.hello p.hello-A {
    width: fit-content;
    height: fit-content;
    font-size: 40px;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: #0aa51d;
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
    background-color: #0aa51d;
    border-radius: 1px;
}

.hello .addedLinks {
    width: 80%;
    height: 35%;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -20%);
    overflow-y: auto;
    /* overflow-x: auto; */
    /* border: 1px solid purple; */
}
.hello .addedLinks p {
    font-size: 15px;
    font-weight: 300;
    font-family: "Noto Sans KR";  
    white-space: nowrap;  
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.hello .addedLinks .linkObj {
    width: 98%;
    height: 50px;
    border-radius: 15px;
    background-color: rgba(5, 172, 19, 0.212);
    box-shadow: 3px 3px 2px #0aa51d;
    position: relative;
    overflow-x: auto;
    padding: 20px;
    margin-top: 20px;
}
.hello .btnNext {
    width: 100px;
    height: 40px;
    border-radius: 4px;
    /* border: 1px solid #0a4911; */
    box-shadow: 3px 3px 2px #0a4911;
    position: absolute;
    top: 120%;
    right: 80px;
    font-size: 13px;
    font-weight: 300;
    font-family: "Noto Sans KR";
    text-align: center;
    padding-top: 8px;
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;
}
.hello .btnNext:hover {
    background-color: rgba(30, 255, 0, 0.301);
}
.hello .btnNext:active {
    box-shadow: inset 3px 3px 2px #0a4911;
}

</style>