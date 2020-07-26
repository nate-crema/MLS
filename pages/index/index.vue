<template>
    <div class="scrollToLogin">
        <p class="loginLoad">스크롤하여 로그인</p>
        <nuxt-link id="toLogin" to="/login"  style="display: none;">rgtr</nuxt-link>
        <img class="arrowDImg" src="/img/arrowD.svg"/>
    </div>
</template>

<script>
export default {
    mounted() {
        let isC = false;
        $(document).ready(() => {
            sizeCalc();
            $(document).bind("mousewheel", function(e) {
                // console.log(`${e.originalEvent.wheelDelta < 0} / ${!isC} / ${location.pathname}`);
                if ((location.pathname == "/new" || location.pathname == "/") && !isC && e.originalEvent.wheelDelta < 0) {
                    isC = true;
                    document.getElementById("toLogin").click();
                    $(window).scrollTop();
                    $("#loginArea").css("height", $(window).height());
                }
                // alert("srgtf")
                // console.log(this);
            })
        })
        $(window).resize(() => {
            sizeCalc();
        })
        function sizeCalc() {
            $("#loginArea").css("height", $(window).height()+100);
        }
    }
}
</script>

<style>
.scrollToLogin {
    position: absolute;
    top: unset;
    bottom: 150px;
    /* left: 0; */
    /* border: 1px solid black; */
}
.scrollToLogin .arrowDImg {
    width: 20px;
    height: auto;
    margin-top: 20px;
}
</style>