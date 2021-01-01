<template>
  <v-container  class="fill-height"
           fluid
           :style="{border: '1px solid cyan'}">
    <v-img :src="this.serviceDetail"
           id="serviceDetail"
           contain
           :position="servicePosition"
           @click="pageMove">
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: "First",
  data:()=>({
    serviceDetail:'http://pamphlet.ubcn.co.kr/pamphlet/image/main/btn_service_view.png',
    servicePosition:'80% 70%'
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
}
</style>