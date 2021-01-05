<template>
  <hooper :vertical="false" :centerMode="true" :trim-white-space="false" :mouse-drag="false" :infinite-scroll="true" id="product">
    <slide class="bg-first">

    </slide>
    <slide class="bg-second">

    </slide>
    <slide class="bg-third">

    </slide>
    <hooper-navigation slot="hooper-addons" id="productNavi"></hooper-navigation>
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
  name: "Product",
  data:()=>({
    text:'상품 소개 페이지'
  }),
  components:{
    Hooper, Slide,
    HooperNavigation
  }
}
</script>

<style scoped>
.bg-first {
  background: url('http://pamphlet.ubcn.co.kr/image/product/03sub_01Cube.jpg') no-repeat center center;
  background-size: contain;
}
.bg-second {
  background: url('http://pamphlet.ubcn.co.kr/image/product/03sub_02QT.jpg') no-repeat center center;
  background-size: contain;
}
.bg-third {
  background: url('http://pamphlet.ubcn.co.kr/image/product/03sub_03Shop.jpg') no-repeat center center;
  background-size: contain;
}
</style>
<style>
#product > .hooper-prev{
  left: 10%;
}
#product > .hooper-next{
  right: 10%;
}
#productNavi > button.hooper-prev{
  left: 0%;
  background: url('http://pamphlet.ubcn.co.kr/image/product/btn_scroll2_r.png') no-repeat center center;
  background-size: contain;
}
#productNavi > button.hooper-next{
  right: 0%;
  background: url('http://pamphlet.ubcn.co.kr/image/product/btn_scroll2_l.png') no-repeat center center;
  background-size: contain;
}

#product > .hooper-list > .hooper-track{
  height: 90vh;
}
</style>