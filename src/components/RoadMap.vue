<template>
  <v-app :style="{ padding: '0px'}">
    <v-img :src="this.menu" id="menuBtn" class="ml-auto"></v-img>
    <v-img :src="this.service" id="serviceButton" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.product" id="productButton" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.product1" id="product01Btn" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.product2" id="product02Btn" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.product3" id="product03Btn" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.question" id="questionBtn" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.site" id="siteBtn" class="ml-auto mr-auto"></v-img>
    <v-spacer></v-spacer>
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
    centerPosition: 'center center'
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
  min-width: 41px;
  max-width: 41px;
  top: 10px;
  background: none;
  background-size: contain;
}
#serviceButton{
  min-width: 289px;
  max-width: 289px;
  min-height: 58px;
  max-height: 58px;
  margin-top: 10%;
}
#productButton{
  max-width: 231px;
  max-height: 67px;
  min-width: 231px;
  min-height: 67px;
  margin-top: 2%;
}
#product01Btn{
  max-width: 98px;
  max-height: 27px;
  min-width: 98px;
  min-height: 27px;
  margin-top: 1%;
}
#product02Btn{
  max-width: 96px;
  max-height: 27px;
  min-width: 96px;
  min-height: 27px;
  margin-top: 1%;
}
#product03Btn{
  max-width: 74px;
  max-height: 27px;
  min-width: 74px;
  min-height: 27px;
  margin-top: 1%;
}
#questionBtn{
  max-width: 231px;
  max-height: 68px;
  min-width: 231px;
  min-height: 68px;
  margin-top: 2%;
}
#siteBtn{
  max-width: 321px;
  max-height: 28px;
  min-width: 321px;
  min-height: 28px;
  margin-top: 10%;
}
#roadMapCard > button {

}
#roadMapCard{
  background: none;
}
.text-right .v-image {
  display: inline-block;
}
</style>