<template>
  <v-container :style="{padding:'0'}">
    <v-row>
      <v-col cols="12" pa-0>
        <v-app-bar color="#8DBDE5" flat>
          <v-btn @click="changePage('Main')" color="#8DBDE5" depressed md="3">
            <v-img src="@/assets/header/logo.png" alt="UBCn 로고" ></v-img>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="changePage('Service')" color="#8DBDE5" depressed>
            <v-img src="@/assets/header/nav_01.png" alt="서비스 소개" dark></v-img>
          </v-btn>
          <v-btn @click="changePage('Product')" color="#8DBDE5" depressed>
            <v-img src="@/assets/header/nav_02.png" alt="상품 소개" dark></v-img>
          </v-btn>
          <v-btn @click="changePage('Question')" color="#8DBDE5" depressed>
            <v-img src="@/assets/header/nav_03.png" alt="문의 하기" dark></v-img>
          </v-btn>
          <v-btn color="#8DBDE5" depressed height="50%">
            <v-img src="@/assets/header/btn_menu.png" alt="로드맵"></v-img>
          </v-btn>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data:()=>({
    view:''
  }),
  methods:{
    changePage(menu){
      this.view=menu
      this.$emit('change-page',menu,event)
    }
  }
}
</script>

<style scoped>

</style>