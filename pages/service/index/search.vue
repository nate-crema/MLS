<template>
  <div>
    <div class="search">
        <div class="searchObj">
            <p class="searchTitleM">검색</p>
            <p class="searchTitle">제목/아티스트/가사를 검색해보세요! ;)</p>
            <div class="searchArea">
                <input type="text" id="searchData" v-model="inputDataUri"/>
                <div class="searchBtn" id="searchCmd">
                    <nuxt-link :to="'/service/search/searchQueryN?searchKey=' + encodeURI(inputDataUri)" hidden id="hiddenClicker"></nuxt-link>
                    <svg xmlns="http://www.w3.org/2000/svg" height="512px" version="1.1" viewBox="-1 0 136 136.21852"
                      width="512px">
                      <g>
                        <link type="text/css" id="dark-mode" rel="stylesheet" href="" class="active-path" />
                        <style type="text/css" id="dark-mode-custom-style" class="active-path" />
                        <g id="surface1">
                        <path d="M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 " style=" fill-rule:nonzero;fill-opacity:1;" data-original="#000000" class="active-path" stroke="#FFFFFF" fill="#FFFFFF"/>
                        </g></g>
                    </svg>
                </div>
            </div>
            <nuxt-child class="searchResult"/>
        </div>
        <img src="/img/undraw_location_search_bqps.svg" class="backgroundImgS"/>
    </div>    
  </div>
</template>

<script>
import axios from 'axios';
import serviceNavBar from "~/components/serviceNavBar";

export default {
    components: {
         "navbar-side": serviceNavBar
    },
    data() {
        return {
            inputDataUri: ""
        }
    },
    methods: {
        mobileCheck: function() {
            let check = false;
            (function(a){
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
        search: function() {
            let this_out = this;
            document.getElementsByClassName("searchTitle")[0].innerHTML = "\"" + decodeURI(document.location.search.replace("?searchKey=", "")) + "\"에 대한 검색결과입니다!"
            document.getElementById("searchData").value = decodeURI(document.location.search.replace("?searchKey=", ""));

            axios.post('/api/search/searchQuery', {
                searchOption: "*",
                searchQuery: decodeURI(document.location.search.replace("?searchKey=", "")),
                cusId: this_out.$store.state.userInfo.cusId
            })
            .then(({data}) => {
            let alligned = data;
            // numOfRes 기준 정렬
            alligned.melon.data.sort(function (a, b) {
                if (a.numOfRes > b.numOfRes) {
                return 1;
                }
                if (a.numOfRes < b.numOfRes) {
                return -1;
                }
                // a must be equal to b
                return 0;
            });
            // console.log(alligned);
            this_out.searchResult = alligned;
                // if (alligned.isMedia) {
                //     console.log("data.mediaType");
                //     console.log(alligned.MediaType);
                //     this_out.mediaTypeText = alligned.MediaType.toString();
                //     $("#isMediaTrue").css("display", "unset");
                //     $("#isMediaTrue").css("opacity", "1");
                // }
                // let isArtistYT = false;
                if (alligned.ytSearch.length > 0) {
                console.log("sef");
                alligned.ytSearch.forEach((element) => {
                    // console.log(element);
                    if (element.artists) {
                    this_out.isArtistYT=true;
                    ArtistOBJM("yt", element.artists);
                    }
                })
                }
                
            })
        }
    },
    mounted() {
        $(document).ready(() => {
            resizeAction();
            $(document).on('keyup', function(e) {
                console.log(e.which);
                if (e.which == 13) {
                    $("#searchCmd").click();
                }
            });
        })

        $(window).resize(() => {
            resizeAction();
        })

        const this_out = this;

        function resizeAction() {
            // console.log("sefrg");
            // alert(this_out.mobileCheck());
            if ($(window).width() <= 850) {
                $("div.search").css("width", "100%");
                $("div.search").css("left", "0");
                $("div.search").css("height", $(window).height());
            } else {
                $("div.search").css("width", $(window).width()-350);
                $("div.search").css("left", "50px");
                $("div.search").css("height", $(window).height());
            }
            // $("div.bottom-player").css("width", $(window).width()-280);
            
        }

        $("#searchData").on("propertychange change keyup paste input", () => {
            // console.log(document.getElementById("searchData").value);
            if (document.getElementById("searchData").value == "") {
                $(".searchBtn").css("opacity", "0");
                setTimeout(() => {
                    $(".searchBtn").css("display", "none");
                }, 300);
            }
            else {
                $(".searchBtn").css("display", "block");
                setTimeout(() => {
                    $(".searchBtn").css("opacity", "1");
                }, 10);
            }
        })

        $("#searchCmd").click(() => {
            document.getElementById("hiddenClicker").click();
            // this_out.search();
            // if (location.href.includes('/search/searchQuery')) {
            //     setTimeout(() => {
            //         location.reload();
            //     }, 100);
            //     }
        });
    }
}
</script>

<style>
.search {
    position: absolute;
    top: 0;
    left: 50px;
    /* border: 1px solid black; */
}
.search .searchObj {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 300px;
    /* border: 1px solid purple; */
}
.search .searchObj .searchTitleM {
    font-size: 40px;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: rgb(15, 63, 141);
}
.search .searchObj .searchTitle {
    font-size: 16px;
    font-weight: 300;
    font-family: "Noto Sans KR";
    color: rgb(15, 63, 141);
    margin-top: 20px;
}
.search .searchObj .searchArea {
    width: 100%;
    height: 80px;
    border: 1.6px solid rgb(15, 63, 141);
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 40px;
}
.search .searchObj .searchArea input {
    width: 90%;
    height: 99%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border-radius: 40px; */
    border: none;
    font-size: 27px;
    background-color: rgba(0, 0, 0, 0);
    transition: all .4s cubic-bezier(0, 1.13, 0.6, 1);
}
.search .searchObj .searchArea input:focus {
    outline: none;
    font-size: 33px;
}

.search .searchObj .searchArea .searchBtn {
    position: absolute;
    top: -2px;
    right: 0;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: rgb(15, 63, 141);
    display: none;
    opacity: 0;
    transition: all .5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    cursor: pointer;
}
.search .searchObj .searchArea .searchBtn svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
}


.search .searchObj .searchResult {
    position: absolute;
    top: 150px;
    width: 100%;
    height: 100%;
    border: 1px solid black;
}


.search .backgroundImgS {
    width: 650px;
    height: auto;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -200;
}
</style>