<template>
  <div class="isMediaTrue">
      <svg class="iconQ" xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 0 512 512" width="512px" ><g><link type="text/css" id="dark-mode" rel="stylesheet" href="" class="active-path" style=""/><style type="text/css" id="dark-mode-custom-style" class="active-path"/><path d="m277.332031 384c0 11.78125-9.550781 21.332031-21.332031 21.332031s-21.332031-9.550781-21.332031-21.332031 9.550781-21.332031 21.332031-21.332031 21.332031 9.550781 21.332031 21.332031zm0 0" data-original="#000000" class="active-path" fill="#1265C3"/><path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" data-original="#000000" class="active-path" fill="#1265C3"/><path d="m256 314.667969c-8.832031 0-16-7.167969-16-16v-21.546875c0-20.308594 12.886719-38.507813 32.042969-45.269532 25.492187-8.980468 42.625-36.140624 42.625-55.851562 0-32.363281-26.304688-58.667969-58.667969-58.667969s-58.667969 26.304688-58.667969 58.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16c0-49.984375 40.664063-90.667969 90.667969-90.667969s90.667969 40.683594 90.667969 90.667969c0 35.585938-28.097657 73.367188-63.980469 86.039062-6.398438 2.238282-10.6875 8.316407-10.6875 15.101563v21.527344c0 8.832031-7.167969 16-16 16zm0 0" data-original="#000000" class="active-path" fill="#1265C3"/></g> </svg>
      <p class="text" id="mediaTypeQuest"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaType: []
    }
  },
  props: ['mediaTypeText'],
  watch: {
    mediaTypeText() {
      $(".isMediaTrue").css("opacity", "0");
      console.log("this.props.mediaTypeText");
      console.log(this.$props);
      this.mediaType = this.$props.mediaTypeText.split(",");
      let text = "혹시 검색하신 키워드가 ";
      if (this.mediaType.length != 0) {
        this.mediaType.forEach((element, index) => {
          if (text != "혹시 검색하신 키워드가 ") text += " 이거나 ";
          text += element;
          if (index == this.mediaType.length-1) {
            text += " 인가요?";
            document.getElementById("mediaTypeQuest").innerText = text;
            $(".isMediaTrue").css("opacity", "1");
          }
        });
      }
    }
  }
}
</script>

<style>
.isMediaTrue {
  opacity: 0;
  position: relative;
  width: 100%;
  height: 60px;
  border: 1px solid rgb(15, 63, 141);
  border-radius: 6px;
  transition: all .4s ease;
}
.iconQ {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}
.isMediaTrue #mediaTypeQuest {
  position: absolute;
  top: 50%;
  left: 90px;
  transform: translateY(-50%);
  color: rgb(21, 53, 105);
}
</style>