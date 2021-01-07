<template>
  <v-app :style="{ padding: '0px'}">
    <v-img :src="this.menu" id="menuBtn" @click="changePage('Main')"></v-img>
    <v-img :src="this.service" id="serviceButton" @click="changePage('Service')" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.product" id="productButton" @click="changePage('Product')" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.question" id="questionBtn" @click="changePage('Question')" class="ml-auto mr-auto"></v-img>
    <v-img :src="this.site" id="siteBtn" @click="redirectSite" class="ml-auto mr-auto"></v-img>
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
    question:'http://pamphlet.ubcn.co.kr/image/roadmap/menu03.png',
    site:'http://pamphlet.ubcn.co.kr/image/roadmap/btn_site.png',
    centerPosition: 'center center'
  }),
  methods:{
    changePage(menu){
      console.log('Main > '+menu)
      this.$emit('change-page',menu,event)
    },
    redirectSite(){
      window.open("http://www.ubcn.co.kr","_blank")
    }
  }
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
  cursor: pointer;
  margin-left: 96%;
}
#serviceButton{
  min-width: 289px;
  max-width: 289px;
  min-height: 58px;
  max-height: 58px;
  margin-top: 10%;
  cursor: pointer;
}
#productButton{
  max-width: 231px;
  max-height: 67px;
  min-width: 231px;
  min-height: 67px;
  margin-top: 5%;
  cursor: pointer;
}
#questionBtn{
  max-width: 231px;
  max-height: 68px;
  min-width: 231px;
  min-height: 68px;
  margin-top: 5%;
  cursor: pointer;
}
#siteBtn{
  max-width: 321px;
  max-height: 28px;
  min-width: 321px;
  min-height: 28px;
  margin-top: 10%;
  cursor: pointer;
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