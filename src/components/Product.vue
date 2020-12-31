<template>
  <hooper :vertical="false" :centerMode="true" :trim-white-space="false" :infinite-scroll="true" id="product">
    <slide class="bg-first">

    </slide>
    <slide class="bg-second">

    </slide>
    <slide class="bg-third">

    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
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
</style>