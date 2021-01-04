<template>
  <v-main  class="fill-height ml-auto mr-auto pa-0"
           :style="{border: '1px solid cyan', padding: '0px'}">
    <v-img :src="this.serviceDetail"
           id="serviceDetail"
           contain
           :position="servicePosition"
           @click="pageMove">
    </v-img>
  </v-main>
</template>

<script>
export default {
  name: "First",
  data:()=>({
    serviceDetail:'http://pamphlet.ubcn.co.kr/pamphlet/image/main/btn_service_view.png',
    servicePosition:'0% 0%'
  }),
  created() {
  },
  mounted() {
  },
  methods:{
    pageMove(){
      this.changePage('Service')
    },
    changePage(menu){
      console.log('!!!!')
      this.$emit('change-page',menu,event)
    }
  }
}
</script>

<style scoped>
#serviceDetail{
  min-height: 65px;
  min-width: 400px;
  max-height: 65px;
  max-width: 400px;
  background-size: contain;
  cursor: pointer;
  margin-top: 31%;
  margin-left: 17%;
}
</style>