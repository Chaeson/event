<template>
  <v-app :style="{ padding: '0px'}">
    <v-card :style="{border: '1px solid black', height:'100%'}" id="roadMapCard">
      <v-btn id="menuBtn">
        <v-img :src="this.menu"></v-img>
      </v-btn>
      <v-row align="center">
        <v-spacer></v-spacer>
        <v-col cols="2" :style="{border: '1px solid cyan'}">
          <v-img :src="this.service"></v-img>
          <v-img :src="this.product"></v-img>
          <v-img :src="this.product1"></v-img>
          <v-img :src="this.product2"></v-img>
          <v-img :src="this.product3"></v-img>
          <v-img :src="this.question"></v-img>
          <v-img :src="this.site"></v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "RoadMap",
  data:()=>({
    menu:'http://pamphlet.ubcn.co.kr/image/roadmap/btn_menu1.png',
    service:'http://pamphlet.ubcn.co.kr/image/roadmap/menu01.png',
    product:'http://pamphlet.ubcn.co.kr/image/roadmap/menu02.png',
    product1:'http://pamphlet.ubcn.co.kr/image/roadmap/menu02-1.png',
    product2:'http://pamphlet.ubcn.co.kr/image/roadmap/menu02-2.png',
    product3:'http://pamphlet.ubcn.co.kr/image/roadmap/menu02-3.png',
    question:'http://pamphlet.ubcn.co.kr/image/roadmap/menu03.png',
    site:'http://pamphlet.ubcn.co.kr/image/roadmap/btn_site.png',
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
  min-width: 32px;
  max-width: 32px;
  right: 0%;
  left: 98%;
  top: 10px;
  background: none;
}
#roadMapCard > button {

}
#roadMapCard{
  background: none;
}
.v-image__image--cover{

}
</style>