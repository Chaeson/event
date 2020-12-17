<template>
  <v-app app class="ma-0 pa-0" :style="{width:'100%', height:'100%'}">
    <v-spacer></v-spacer>
    <v-layout row wrap align-start >
      <v-spacer></v-spacer>
      <v-flex align-self-end :style="{display:'block', border:'solid 2px cyan'}" md2>
        <div>상세 버튼1</div>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex align-self-end :style="{display:'block', border:'solid 2px cyan'}" md2>
        <div>상세 버튼2</div>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex align-self-end :style="{display:'block', border:'solid 2px cyan'}" md2>
        <div>상세 버튼3</div>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
    <v-layout row wrap align-center>
      <v-spacer></v-spacer>
      <v-flex  align-self-end :style="{display:'block' , border:'solid 2px black'}" md1>
        <div>스크롤</div>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: "Second"
}
</script>

<style scoped>

</style>