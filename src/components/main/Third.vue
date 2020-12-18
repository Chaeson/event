<template>
  <v-app :style="{ border:'1px solid cyan'} " >
    <v-card width="100%" max-height="28%" height="28%" flat style="background: none">
      <!-- 여백 ...-->
    </v-card>
    <v-card width="100%" max-height="6%" height="6%" flat style="background: none; margin-top: 0.8%; border: 1px solid black"  >
      <!--  이름 입력^^ -->
      <v-row no-gutters style="border: 1px solid greenyellow; height: 100%">
        <v-spacer></v-spacer>
        <v-col cols="2" style="border: 1px solid green"> 이름 </v-col>
        <v-col cols="2" >  </v-col>
        <v-col cols="2" style="border: 1px solid green" class="fill-height"> 기업/단체명 </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
    <v-card width="100%" max-height="6%" height="6%" flat style="background: none; margin-top: 1.8%; border: 1px solid black">
      <v-row no-gutters style="border: 1px solid greenyellow; height: 100%">
        <v-spacer></v-spacer>
        <v-col cols="2" style="border: 1px solid green"> 연락처 </v-col>
        <v-col cols="2" >  </v-col>
        <v-col cols="2" style="border: 1px solid green" class="fill-height"> 이메일 </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
    <v-card width="50%" class="align-self-center" max-height="27%" height="27%" flat style="background: none;margin-top: 2%; border: 1px solid black">
      <v-content class="align-center" style="border: 1px solid red; height: 100%">
        문의 내용 입력
      </v-content>
    </v-card>
    <v-card width="55%" class="align-self-center" max-height="12%" height="12%" flat style="background: none;margin-top: 1%; border: 1px solid black">
      <v-content class="align-center" style="border: 1px solid blue; height: 50%">
        <v-row no-gutters style="border: 1px solid red; height: 100%">
          <v-img src="@/assets/main/chk.png" style="border: 1px solid cyan;margin-left: 3%; margin-top: 1%; height: 60%;" contain max-width="3%" max-height="30%"></v-img>
          <v-img src="@/assets/main/txt.png" style="border: 1px solid cyan; margin-top: 1%; height: 60%;" contain max-width="34%" max-height="30%"></v-img>
          <v-spacer></v-spacer>
          <v-img src="@/assets/main/btn_Q.png" style="border: 1px solid cyan; margin-top: 1%; height: 60%; margin-top: 1%" contain max-width="20%" max-height="100%"></v-img>
        </v-row>
      </v-content>
    </v-card>
    <v-card width="100%" max-height="9%" height="9%" flat style="background: none; margin-top: 1%; border: 1px solid black">
      <v-row style="border: 1px solid red; height: 100%" no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="1" style="border: 1px solid blue; height: 100%">
          <v-img src="@/assets/main/top.png" contain max-height="100%" style="border: 1px solid cyan">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Third"
}
</script>

<style scoped>

</style>