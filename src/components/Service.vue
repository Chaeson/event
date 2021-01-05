<template>
  <hooper :vertical="false" :centerMode="true" :mouse-drag="false" :trim-white-space="false" id="service">
    <slide class="bg-first">

    </slide>
    <slide class="bg-second">

    </slide>
    <slide class="bg-third">

    </slide>
    <slide class="bg-forth">

    </slide>
    <hooper-navigation slot="hooper-addons" id="serviceNavi"></hooper-navigation>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: "Service",
  components:{
    Hooper, Slide, HooperNavigation
  },
  data:()=>({
    text:'서비스 소개 페이지'
  })
}
</script>

<style scoped>
.bg-first {
  background: url('http://pamphlet.ubcn.co.kr/image/service/02sub_01.jpg') no-repeat center center;
  background-size: contain;
}
.bg-second {
  background: url('http://pamphlet.ubcn.co.kr/image/service/02sub_02.jpg') no-repeat center center;
  background-size: contain;
}
.bg-third {
  background: url('http://pamphlet.ubcn.co.kr/image/service/02sub_03.jpg') no-repeat center center;
  background-size: contain;
}
.bg-forth {
  background: url('http://pamphlet.ubcn.co.kr/image/service/02sub_04.jpg') no-repeat center center;
  background-size: contain;
}
</style>
<style>
#service > .hooper-prev{
  left: 10%;
}
#service > .hooper-next{
  right: 10%;
}
#serviceNavi > button.hooper-prev{
  left: 0%;
  background: url('http://pamphlet.ubcn.co.kr/image/service/btn_scroll_r.png') no-repeat center center;
  background-size: contain;
}
#serviceNavi > button.hooper-next{
  right: 0%;
  background: url('http://pamphlet.ubcn.co.kr/image/service/btn_scroll_l.png') no-repeat center center;
  background-size: contain;
}
#service > .hooper-list > .hooper-track{
  height: 90vh;
}

#serviceNavi > .hooper-prev.is-disabled{
  display: none;
}

#serviceNavi > .hooper-next.is-disabled{
  display: none;
}
</style>