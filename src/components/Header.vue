<template>
  <v-container>
    <v-app-bar :color=mainColor app :clipped-left="true">
      <v-btn @click="changePage('Main')" :color=mainColor depressed md="3">
        <!--            <v-img src="@/assets/header/logo.png" alt="UBCn 로고" ></v-img>-->
        <v-img :src="this.img.logo" alt="UBCn 로고" ></v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="changePage('Service')" :color=mainColor depressed>
        <!--            <v-img src="@/assets/header/nav_01.png" alt="서비스 소개" dark></v-img>-->
        <v-img :src="this.img.service" alt="서비스 소개" dark></v-img>
      </v-btn>
      <v-btn @click="changePage('Product')" :color=mainColor depressed>
        <v-img :src="this.img.product" alt="상품 소개" dark></v-img>
      </v-btn>
      <v-btn @click="changePage('Question')" :color=mainColor depressed>
        <v-img :src="this.img.question" alt="문의 하기" dark></v-img>
      </v-btn>
      <v-btn :color=mainColor @click="changePage('RoadMap')" depressed height="50%">
        <v-img :src="this.img.menu" alt="로드맵"></v-img>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data:()=>({
    view:'',
    headerColor:'#8DBDE5',
    img:{
      logo:'http://pamphlet.ubcn.co.kr/image/header/logo.png',
      service:'http://pamphlet.ubcn.co.kr/image/header/nav_01.png',
      product:'http://pamphlet.ubcn.co.kr/image/header/nav_02.png',
      question:'http://pamphlet.ubcn.co.kr/image/header/nav_03.png',
      menu:'http://pamphlet.ubcn.co.kr/image/header/btn_menu.png',
    }
  }),
  props:{
    mainColor:String
  },
  created() {
  },
  methods:{
    changePage(menu){
      this.view=menu
      console.log('123'+menu)
      if(menu=='Service' || menu=='Product' || menu=='RoadMap')
        this.headerColor='#999999'
      else
        this.headerColor='#8DBDE5'
      this.$emit('change-page',menu,event)
    }
  }
}
</script>

<style scoped>

</style>