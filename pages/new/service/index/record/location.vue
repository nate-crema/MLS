<template>
<div>
  <navbar-side></navbar-side>
  <div class="controlBar">
    <ul class="timestamp">
      <li
      v-for="(time, index) in timestamp"
      :key="index"
      :style="{left: index*120 + 'px'}">
        <router-link
        :to="'?timestamp=' + time.date">
          {{time.date}}
        </router-link>
      </li>
    </ul>
  </div>
  <div class="mapDesignWrapper">
      <div id="mapNaver"></div>
  </div>
</div>
</template>

<script>

import serviceNavBar from "~/components/serviceNavBar";

export default {
  components: {
    "navbar-side": serviceNavBar
  },
  head: {
    title: 'Base - 위치별 재생기록',
    meta: [
      {
        name: 'Base location-base play record',
        content: '위치별 음악 재생기록'
      }
    ],
    script: [{
      src: "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=3dbl900ddz"
    }],
  },
  data() {
    return {
      timestamp: [
        {
          date: 20200313,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200312,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200311,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200310,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200309,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200308,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200307,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200306,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200305,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200304,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200303,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200302,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200301,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        },
        {
          date: 20200226,
          location: [
            [37.303430999999996, 126.83578220000001],
            [37.303430999999996, 136.83578220000001],
            [37.303430999999996, 152.15338220000001],
            [37.303430999999996, 193.83578220000001],
            [37.303430999999996, 200.56478220000001],
            [37.303430999999996, 142.28778220000001],
            [37.303430999999996, 111.94078220000001],
            [37.303430999999996, 174.48278220000001]
          ]
        }
      ]
    }
  },
  mounted() {
    $(document).ready(() => {
      $(".controlBar").width($(window).width()-350);
      $(".mapDesignWrapper").width($(window).width()-450);
      $(".mapDesignWrapper").height($(window).height()-200);



      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        mapDisplay(position);
      });



      function mapDisplay(position) {


        var HOME_PATH = window.HOME_PATH || '.';
        var myLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude)
        var map = new naver.maps.Map('mapNaver', {
            useStyleMap: true,
            center: myLocation,
            zoom: 15
        })
        var marker = new naver.maps.Marker({
            useStyleMap: true,
            map: map,
            position: myLocation,
            icon: {
                url: "http://localhost:3000/api/img/home-ico.png",
                size: new naver.maps.Size(32, 32),
                origin: new naver.maps.Point(0, 0),
                // anchor: new naver.maps.Point(11, 35)
            }
        });

        var contentString = [
                '<div class="iw_inner" id="obj" style="position: relative; top: 0; left: 0;">',
                '</div>'
            ].join('');

        var infowindow = new naver.maps.InfoWindow({
            content: contentString,
            maxWidth: 300,
            backgroundColor: "#eee",
            borderColor: "#2db400",
            // border: "1px splice black",
            // borderWidth: 5,
            anchorSize: new naver.maps.Size(30, 30),
            anchorSkew: true,
            anchorColor: "#eee",
            pixelOffset: new naver.maps.Point(30, -30)
        });

        naver.maps.Event.addListener(marker, "click", function(e) {
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
                const fullWrapperParent = document.getElementById("obj").parentElement.parentElement.parentElement;
                const fullWrapper = document.getElementById("obj").parentElement.parentElement;
                fullWrapper.style.border = "1px solid black";
                fullWrapper.style.backgroundColor = "unset";
                // fullWrapper.style.width = "300px";
                // fullWrapper.style.height = "200px";
                console.log(fullWrapperParent.style.top);
                // fullWrapperParent.style.top = ((fullWrapperParent.style.top.replace("px", ""))*1 - 150) + "px";
                // fullWrapperParent.style.left = ((fullWrapperParent.style.left.replace("px", ""))*1 - 150) + "px";
            }
        });
      }
    })
  }
}
</script>

<style>
* {
  transition: unset;
}
.mapDesignWrapper {
  position: absolute;
  top: 100px;
  right: 50px;
}
.mapDesignWrapper #mapNaver {
  width: 100%;
  height: 100%;
}



.controlBar {
  position: absolute;
  left: 350px;
  top: 0;
  border: 1px solid black;
  height: 50px;
}
.controlBar .timestamp {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 100%;
  border: 1px solid yellow;
  transform: translate(-50%, -50%);
  list-style: none;
  overflow-x: auto;
}
.controlBar .timestamp li {
  font-size: 20px;
  font-weight: 500;
  color: #111655;
  text-decoration: none;
  float: left;
  position: absolute;
  top: 5px;
  left: unset;
  right: unset;
  width: auto;
  height: fit-content;
  border-bottom: 1px solid #11165500;
  transition: all .4s ease;
}
.controlBar .timestamp li a {
  color: inherit;
  text-decoration: none;
}
.controlBar .timestamp li:hover {
  border-bottom: 2px solid #111655;
}
</style>