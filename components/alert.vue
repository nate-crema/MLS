<template>
    <div class="alertArea"
    :class="setups.type"
    :style="{backgroundColor: setups.backgroundColor}">
        <p class="alertCont">{{alertCont.cont}}</p>
        <div class="selector" v-if="setups.isSelector">
            <div class="selectObj"
            :v-for="(selectObj, index) in alertCont.selectObj"
            :key="index">
                <p class="selectObjText"
                :id="selectObj.key">{{selectObj.value}}</p>
            </div>
        </div>
        <div class="alertTime">
        </div>
    </div>
</template>

<script>
import { store, mapState } from 'vuex';
export default {
    store: store,
    mounted() {
        this.refreshState();

        // setInterval(() => {
        //   this.$store.state.n++
        // }, 1000)
        // this.$store.watch(() => this.$store.getters.getN, n => {
        //   console.log('watched: ', n)
        // })
    },
    data() {
        return {
            setups: {
                type: "small",
                backgroundColor: "rgba(9, 61, 146, 0.6)",
                backgroundColorM: "rgba(1, 65, 167, 0.7)",
                isSelector: false
            },
            alertCont: {}
        }  
    },
    methods: {
        // song data state refresh
        refreshState: function() {
            const this_out = this;
            // console.log(`data: ${JSON.stringify(this.$store.state.alertCont)}`);
            this.alertCont = this.$store.state.alertCont;
            setTimeout(() => {
                this_out.refreshState();
            }, 100);
        }
    },
    watch: {
        alertCont (val, oldVal) {
            if (val != oldVal) {
                if (val.type) {
                    switch(val.type) {
                        case "warning":
                            this.setups.backgroundColor = "rgba(146, 9, 9, 0.6)";
                            this.setups.backgroundColorM = "rgba(180, 20, 9, 0.8)";
                            break;
                        case "selector":
                            this.setups.backgroundColor = "rgba(9, 61, 146, 0.6)";
                            this.setups.isSelector = true;
                            this.setups.type = "big";
                            break;
                        case "notice":
                        default:
                            this.setups.backgroundColor = "rgba(9, 61, 146, 0.6)";
                            this.setups.backgroundColorM = "rgba(1, 65, 167, 0.7)";
                            break;
                    }
                    if (val.type == "selector") {
                        $(".alertArea.small").css("display", "unset");
                        $(".alertArea.small .alertTime").css("width", "100%");
                        setTimeout(() => {
                            $(".alertArea.small .alertTime").css("transition", `all ${val.time ? val.time/1000 : 5}s cubic-bezier(0.24, 0.76, 0.25, 1)`);
                            $(".alertArea.small").css("bottom", "30px");
                            $(".alertArea.small .alertTime").css("width", "0%");
                        }, 100);
                    } else {
                        // $(".alertArea.small").css("opacity", "1");
                        $(".alertArea.small").css("display", "unset");
                        $(".alertArea.small .alertTime").css("width", "100%");
                        setTimeout(() => {
                            $(".alertArea.small .alertTime").css("transition", `all ${val.time ? val.time/1000 : 5}s cubic-bezier(0.24, 0.76, 0.25, 1)`);
                            $(".alertArea.small").css("bottom", "30px");
                            $(".alertArea.small .alertTime").css("width", "0%");
                            setTimeout(() => {
                                $(".alertArea.small .alertTime").css("transition", `all .01s cubic-bezier(0.24, 0.76, 0.25, 1)`);
                                $(".alertArea.small").css("bottom", "-100px");
                                setTimeout(() => {
                                    $(".alertArea.small").css("display", "none");
                                }, 150);
                            }, val.time ? val.time : 5000);
                        }, 100);
                    }
                }
            }
        }
    }
}
</script>

<style>
.alertArea {
    display: none;
    background-color: rgba(9, 61, 146, 0.6);
    border-radius: 2px;
    position: absolute;
    transition: all .4s cubic-bezier(0.24, 0.76, 0.25, 1)
}
.alertArea.small {
    width: 420px;
    height: 70px;
    bottom: -100px;
    left: 20px;
}
.alertArea.big {
    width: 300px;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.alertArea .alertTime {
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 65, 167, 0.7);
}
.alertArea .alertCont {
    z-index: 20;
    font-size: 16px;
    width: 80%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    color: white;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
}

.alertArea .selector {
    width: 100%;
    height: 100%;
}


@media(max-width: 500) {
    .alertArea.big {
        width: 40%;
        height: 60%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>