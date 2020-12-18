<template style="max-width: 100%">
  <hooper>
    <slide style="max-height: 100%">
      <v-img src="@/assets/service/02sub_01.jpg"/>
    </slide>
    <slide>
      <v-img src="@/assets/service/02sub_02.jpg"/>
    </slide>
    <slide>
      <v-img src="@/assets/service/02sub_03.jpg"/>
    </slide>
    <slide>
      <v-img src="@/assets/service/02sub_04.jpg"/>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: "Service",
  components:{
    Hooper, Slide, HooperPagination
  },
  data:()=>({
    text:'서비스 소개 페이지'
  })
}
</script>

<style scoped>

</style>