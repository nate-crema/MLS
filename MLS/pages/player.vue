<template>
    <div class="playArea">
        <div class="albumCover playerSections">
            <div class="albumCoverWrap"></div>
            <img :src="musicInfo.melon.coverUri" class="albumCover" id="coverUri"/>
        </div>
        <div class="contArea playerSections">
            <div class="songInfo">
                <p calss="songTitle">{{musicInfo.title}}</p>
                <p calss="songAlbum">{{musicInfo.melon.ALBUMNAME}}</p>
                <p calss="songArtist">{{musicInfo.artist}}</p>
            </div>
            <div class="lyrics">
            </div>
            <div class="playControl">
                <div class="progress">
                </div>
                <div class="controller pause">
                    <span class="leftPauser"></span>
                    <span class="rightPauser"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {

    data() {
        return {
            musicInfo: {
                title: "마음을 드려요",
                artist: "IU",
                melon: {
                    SONGID: 32378104,
                    ALBUMID: 10388744,
                    ALBUMNAME: '사랑의 불시착 OST Part 11',
                    coverUri: "https://cdnimg.melon.co.kr/cm2/album/images/103/88/744/10388744_20200214175740_500.jpg?edbdd3b688c5f2725769dbcf9ad270b0/melon/quality/80/optimize"
                },
                lylics: [
                    { time: 1, text: '마음을 드려요 - 아이유' },
                    { time: 16595, text: '당신에게 드릴 게 없어서' },
                    { time: 25027, text: '나의 마음을 드려요' },
                    { time: 33467, text: '그대에게 받은 게 많아서' },
                    { time: 41707, text: '표현을 다 할 수가 없어요' },
                    { time: 50275, text: '나지막한 인사에' },
                    { time: 54507, text: '수많은 내 마음 고이 담아' },
                    { time: 59211, text: '그대에게로 건네면' },
                    { time: 63491, text: '내 마음 조금 알까요' },
                    { time: 68019, text: '어떤 이유로 만나' },
                    { time: 72331, text: '나와 사랑을 하고' },
                    { time: 76419, text: '어떤 이유로 내게 와' },
                    { time: 81115, text: '함께 있어준 당신' },
                    { time: 84947, text: '부디 행복한 날도' },
                    { time: 89235, text: '살다 지치는 날도' },
                    { time: 93403, text: '모두 그대의 곁에 내가' },
                    { time: 99707, text: '있어줄 수 있길' },
                    { time: 106601, text: ' - 연주중 - ' },
                    { time: 119062, text: '어떤 소식 보다 더' },
                    { time: 123342, text: '애타게 기다려지는 그대' },
                    { time: 127964, text: '엇갈리지 않게 여기' },
                    { time: 132060, text: '기다릴게요' },
                    { time: 136221, text: '눌러 적은 편지에' },
                    { time: 140468, text: '수많은 그리움 고이 담아' },
                    { time: 145221, text: '그대 내게로 올 때면' },
                    { time: 149388, text: '그 손에 쥐어줄게요' },
                    { time: 153789, text: '어떤 이유로 만나' },
                    { time: 157932, text: '나와 사랑을 하고' },
                    { time: 162292, text: '어떤 이유로 내게 와' },
                    { time: 166956, text: '함께 있어준 당신' },
                    { time: 170892, text: '부디 행복한 날도' },
                    { time: 175148, text: '살다 지치는 날도' },
                    { time: 179349, text: '모두 그대의 곁에 내가' },
                    { time: 185516, text: '있어줄 수 있길' },
                    { time: 189849, text: '네 번의 모든 계절들과' },
                    { time: 194064, text: '열두 달의 시간을 너와' },
                    { time: 198392, text: '숨이 차게 매일' },
                    { time: 203112, text: '사랑하며 함께 할게' },
                    { time: 211040, text: '어떤 이유로 만나' },
                    { time: 215337, text: '우리 사랑을 했던' },
                    { time: 219472, text: '지금 이 순간처럼' },
                    { time: 223552, text: '매일 바라보며' },
                    { time: 227048, text: '애써주기를' },
                    { time: 228441, text: '부디 행복한 날도' },
                    { time: 232290, text: '살다 지치는 날도' },
                    { time: 236689, text: '모두 그대의 곁에 내가' },
                    { time: 242673, text: '있어줄 수 있길' },
                    { time: 249369, text: '부디' },
                    { time: 254273, text: '추억만 남지 않길 너완' },
                    { time: 265273, text: ' ' }
                ],
            }
        }
    },
    mounted() {

        const sizeCalculation = function() {
            $(".playArea").height($(window).height());

            var img = new Image();
            img.src = document.getElementById("coverUri").getAttribute("src");
            img.onload = function() {
                let propWidth = this.width*$(window).height()/this.height;
                // console.log(propWidth > $(window).width());
                console.log($(window).width());
                // console.log(propWidth);
                if (propWidth > $(window).width()) {
                    $("#coverUri").css("height", "unset");
                    $("#coverUri").css("width", $(window).width());
                    propWidth = $(window).width();
                    $(".playArea").css("dissplay", "grid");
                    $(".playArea").css("grid-template-columns", "unset");
                    $(".playArea").css("grid-template-rows", "200px auto");
                    $(".contArea").css("top", "300px");
                    $(".contArea").css("width", "100%");
                    $(".contArea").css("left", "0");
                    $(".contArea").css("right", "unset");
                } else {
                    $(".contArea").css("top", "unset");
                    $(".contArea").css("left", "unset");
                    $(".contArea").css("right", "0");
                    $(".playArea").css("dissplay", "unset");
                    $("#coverUri").css("width", "unset");
                    $("#coverUri").css("height", $(window).height());
                    // $(".playArea").css("grid-template-columns", propWidth + "px auto")
                    // $(".playArea").css("grid-template-columns", "auto 500px");
                    // $(".playArea").css("grid-template-rows", "unset");
                }
                $(".albumCoverWrap").css("height", $("#coverUri").height());
                $(".albumCoverWrap").css("width", $("#coverUri").width());
                // console.log(propWidth);
            }

            const colorThief = new ColorThief();
            const coverImg = document.getElementById("coverUri");

            // Make sure image is finished loading
            if (coverImg.complete) {
                colorThief.getColor(coverImg);
            } else {
                image.addEventListener('load', function() {
                    colorThief.getColor(coverImg);
                });
            }

        }

        $(document).ready(() => {
            sizeCalculation();
        })

        $(window).resize(() => {
            sizeCalculation();
        })
        $('.controller').on('mousedown', function() {
        $(this).toggleClass('pause play');
        });

        $(document).on('keyup', function(e) {
            // console.log(e.which);
            if (e.which == 32) {
                console.log(';asedrfhg');
                $('.controller').toggleClass('pause play');
            }
        });
    }
}
</script>

<style>

* {
    transition: all .3s cubic-bezier(0.24, 0.7, 0.4, 0.94);
}

.playArea {
    /* display: grid; */
    /* grid-template-columns: 70% auto; */
}

.playArea div.playerSections {
    border: 1px solid red;
}

.playArea .albumCover {

}

.playArea .albumCover .albumCoverWrap {
    background-color: white;
    position: absolute;
    opacity: 0.6;
    z-index: 20;
}


.playArea .contArea {
    z-index: 30;
    background-color: white;
    width: 450px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
}






/* Play/Pause Button Design */
/* References: https://codepen.io/s3739/pen/VwLwoQb */


.controller {
  border: 5px solid rgb(30, 70, 158);
  border-radius: 50%;
  margin: 20px;
  padding: 0px;
  width: 60px;
  height: 60px;
  font-size: 0;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
}
.controller,
.controller .leftPauser,
.controller .rightPauser,
.controller:before {
  display: inline-block;
  vertical-align: middle;
  transition: border 0.4s, width 0.4s, height 0.4s, margin 0.4s cubic-bezier(1, 0, 0, 1);
  /* transition-tiomig-function: cubic-bezier(1, 0, 0, 1); */
}
.controller:before {
  content: "";
  height: 50px;
}
.controller.pause .leftPauser,
.controller.pause .rightPauser {
  margin: 0;
  border-left: 4px solid rgb(30, 70, 158);
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
  height: 20.3px;
}
.controller.pause .leftPauser {
  border-right: 7px solid transparent;
}
.controller.play .leftPauser {
  margin-left: 8px;
  border-left: 25px solid rgb(30, 70, 158);
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
  border-right: 0px solid transparent;
  height: 25px;
}
.controller.play .rightPauser {
  margin: 0;
  border-left: 0 solid rgb(30, 70, 158);
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
  height: 0px;
}
.controller:hover {
  border-color: #0b1b3f;
}
.controller:hover .leftPauser,
.controller:hover .rightPauser {
  border-left-color: #0b1b3f;
}

</style>