<template>
  <div class="main">
    <div class="welcome">
      <p class="textA">{{textA}}</p>
      <p class="textB">{{textB}}</p>
    </div>
    <img class="backgroundImg"
    :src="imgSrc">
    <nuxt-child class="childVue"/>
  </div>
</template>

<script>

import serviceNavBar from "~/components/serviceNavBar";

export default {
  components: {
    "navbar-side": serviceNavBar
  },
  data() {
    return {
      textA: "",
      textB: "",
      imgSrc: ""
    }
  },
  mounted() {
    const this_out = this;
    const userInfo = this_out.$store.state.userInfo;
    $(document).ready(() => { 
      const TimeInfo = Date().toString().split(" ");
      const DOW = TimeInfo[0]; // Day of the Week
      const Month = TimeInfo[1]; // Month
      const Day = TimeInfo[2]; // Day
      const Year = TimeInfo[3]; // Year
      // const Time = TimeInfo[4]; // Time
      const Time = "8:00:00";
      const HH = Time.split(":")[0]*1;
      const MM = Time.split(":")[1]*1;
      const SS = Time.split(":")[2]*1;
      // alert(HH);


      // alert(HH);

      if (HH > 4 && HH <= 10) {
        this_out.textA = "좋은 아침입니다!";
        this_out.textB = `"${userInfo.name}"님을 위한 음악을 들으며 아침을 시작해보세요!`;
        this_out.imgSrc = "/img/undraw_summer_jx06.svg";
      } else if (HH > 10 && HH <= 14) {
        this_out.textA = "나른한 점심이네요... 💤";
        this_out.textB = `"${userInfo.name}"님을 위한 음악을 들으며 잠을 깨워보세요!`;
        this_out.imgSrc = "/img/undraw_working_from_anywhere_ub67.svg";
      } else if (HH > 14 && HH <= 18) {
        this_out.textA = "벌써 저녁이에요!";
        this_out.textB = `"${userInfo.name}"님을 위한 음악을 들으며 마지막까지 힘내세요!`;
        this_out.imgSrc = "/img/undraw_moonlight_5ksn.svg";
      } else if (HH > 18 && HH <= 22) {
        this_out.textA = "오늘 하루도 수고하셨습니다 :)";
        // this_out.textB = `"${userInfo.name}"님을 위한 음악을 들으며 하루를 마무리해보세요!`;
        this_out.textB = `귀가길을 "${userInfo.name}"님을 위한 노래들과 함께하세요!`;
        this_out.imgSrc = "/img/undraw_coming_home_52ir.svg";
      } else if (HH > 22 || HH <= 4) {
        this_out.textA = "모두 안녕히 주무세요 ;)";
        this_out.textB = `"${userInfo.name}"님을 위한 음악을 들으며 잠자리에 드는건 어떨까요?`;
        this_out.imgSrc = "/img/undraw_sleep_analysis_o5f9.svg";
      }




      // design js

      setTimeout(() => {
        $(".textA").css("opacity", "1");
        setTimeout(() => {
          $(".textA").css("margin-top", "0px");
          setTimeout(() => {
            
            $(".textB").css("opacity", "1");
            if (location.pathname == "/new/service/main/"
            || location.pathname == "/new/service/main") {
              $(".backgroundImg").css("opacity", "1");
              setTimeout(() => {
                $(".scrollToLogin").css("opacity", "1");
              }, 500);
            }
          }, 300);
        }, 500);
      }, 500);



      // wheeling event listener

      let isC = false;

      $(document).bind("mousewheel", function(e) {
          // console.log(`${e.originalEvent.wheelDelta < 0} / ${!isC} / ${location.pathname}`);
          if (!isC && e.originalEvent.wheelDelta < 0) {
              isC = true;
              document.getElementById("toMainA").click();
              $(window).scrollTop();
          }
          // alert("srgtf")
          // console.log(this);
      })

    })
  }
}
</script>

<style>
.main {
  overflow-x: hidden;
  overflow-y: auto;
  transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.welcome {
  width: 550px;
  height: 200px;
  position: absolute;
  /* top: 500px; */
  top: 45%;
  left: 100px;
  /* border: 1px solid black; */
  color: #0F326A;
  z-index: 100;
}
.welcome .textA {
  font-size: 50px;
  font-weight: 500;
  opacity: 0;
  margin-top: 40px;
}
.welcome .textB {
  font-size: 16px;
  font-weight: 300;
  margin-top: 20px;
  opacity: 0;
}
.backgroundImg {
  width: 55%;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -100px;
  opacity: 0;
  z-index: 0;
}
.childVue {
  position: absolute;
  bottom: 0;
  width: fit-content;
  height: fit-content;
}

@media (max-width: 1300px) {
  .backgroundImg {
    opacity: 0.6 !important;
  }
}
</style>