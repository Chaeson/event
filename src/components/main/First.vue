<template>
  <v-app :style="{ border:'1px solid cyan'} " >
    <v-card width="100%" max-height="75%" height="75%" flat style="background: none">
      <!-- 여백 ...-->
    </v-card>
    <v-card width="100%" max-height="10%" height="10%" flat style="background: none">
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="3" style="border: 1px solid cyan">
          <v-img src="@/assets/main/btn_service_view.png" style="cursor: pointer">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
    <!-- 아래 하단 -->
    <v-spacer></v-spacer>
    <v-card width="100%" max-height="10%" height="10%" flat style="background: none">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="1" style="border: 1px solid cyan">
          <v-img src="@/assets/main/scrolldown.png" @click="scrollDown" style="cursor: pointer">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "First",
  data:()=>({
    windowSize:{
      x:0,
      y:0
    },
    alignments: [
      'end',
    ],
  }),
  created() {
  },
  mounted() {
  },
  methods:{
    serviceDetail(){
      console.log('serviceDetail Move...')
    },
    scrollDown(){
      console.log('next Page ...')
    }
  }
}
</script>

<style scoped>

</style>