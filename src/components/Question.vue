<template>
  <hooper :vertical="true" :center-mode="true" >
    <slide style="border: 1px solid red ;" class="bg-third">
    </slide>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "Question",
  components:{
    Hooper, Slide
  },
  data:()=>({
    text:'문의하기 페이지'
  })
}
</script>

<style scoped>
.bg-third{
  background: url('http://pamphlet.ubcn.co.kr/image/main/bg_01main_03.jpg') no-repeat center center;
  background-size: contain;
}
</style>