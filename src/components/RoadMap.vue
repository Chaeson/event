<template>
  <v-app :style="{ padding: '0px'}">
    <v-img :src="this.menu" id="menuBtn"></v-img>
  </v-app>
</template>

<script>
export default {
  name: "RoadMap",
  data:()=>({
    menu:'http://pamphlet.ubcn.co.kr/image/roadmap/btn_menu1.png'
  })
}
</script>

<style scoped>
#app{
  background: url('http://pamphlet.ubcn.co.kr/image/roadmap/bg_02menu.png') no-repeat center center;
}
#menuBtn{
  min-height: 32px;
  max-height: 32px;
  background: url('http://pamphlet.ubcn.co.kr/image/roadmap/btn_menu1.png') no-repeat center center;
  background-size: contain;
}
</style>