<template>
  <div class="mainA">
  </div>
</template>

<script>
export default {
    mounted() {
        $(document).ready(() => {
            resizeWindow();
            cngBeforeDesingA();
        })

        $(window).resize(() => {
            resizeWindow();
        })

        function resizeWindow() {
            $(".mainA").width($(".main.vueBlocks").width());
            $(".mainA").height($(".main.vueBlocks").height());
        }

        function cngBeforeDesingA() {
            $(".welcome").css("top", "12%");
            $(".welcome .textA").css("font-size", "40px");
            $(".welcome .textB").css("margin-top", "10px");
            $(".backgroundImg").css("opacity", "0.2");
        }
        
    }
}
</script>

<style>
.mainA {
    position: absolute;
    top: 0;
    left: 0;
    bottom: unset !important;
    border: 1px solid black;
}
</style>