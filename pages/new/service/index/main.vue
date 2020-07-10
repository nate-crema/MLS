<template>
  <div>
    <div class="welcome">
      <p class="textA">{{textA}}</p>
      <p class="textB">{{textB}}</p>
    </div>
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
      textB: ""
    }
  },
  mounted() {
    $(document).ready(() => { 
      const this_out = this;
      const TimeInfo = Date().toString().split(" ");
      const DOW = TimeInfo[0]; // Day of the Week
      const Month = TimeInfo[1]; // Month
      const Day = TimeInfo[2]; // Day
      const Year = TimeInfo[3]; // Year
      const Time = TimeInfo[4]; // Time
      const HH = Time.split(":")[0]*1;
      const MM = Time.split(":")[1]*1;
      const SS = Time.split(":")[2]*1;
      // alert(HH);

      if (HH > 4 && HH <= 10) {
        this_out.textA = "좋은 아침입니다!";
        this_out.textB = `${userInfo.nickName}을 위한 음악을 들으며 아침을 시작해보세요!`;
      } else if (HH > 10 && HH <= 14) {
        this_out.textA = "나른한 점심이네요... 💤";
        this_out.textB = `${userInfo.nickName}을 위한 음악을 들으며 잠을 깨워보세요!`;
      } else if (HH > 14 && HH <= 18) {
        this_out.textA = "벌써 저녁이에요!";
        this_out.textB = `${userInfo.nickName}을 위한 음악을 들으며 마지마까지 힘내세요!`;
      } else if (HH > 18 && HH <= 22) {
        this_out.textA = "오늘 하루도 수고하셨습니다 :)";
        this_out.textB = `${userInfo.nickName}을 위한 음악을 들으며 하루를 마무리해보세요!`;
      } else if (HH > 22 && HH <= 4) {
        this_out.textA = "모두 안녕히 주무세요 ;)";
        this_out.textB = `${userInfo.nickName}을 위한 음악을 들으며 잠자리에 드는건 어떨까요?`;
      }
    })
  }
}
</script>

<style>
.welcome {
  width: 300px;
  height: 200px;
  position: absolute;
  top: 200px;
  left: 40px;
  border: 1px solid black;
}
</style>