<template>
  <v-container  class="fill-height"
           fluid
           :style="{padding: this.main.padding, minHeight:'100%', border: '1px solid cyan'}">

  </v-container>
</template>

<script>
export default {
  name: "First",
  data:()=>({
    main:{
      backgroundImg:'@/assets/main/bg_01main_01.jpg',
      padding:'0px',
      height:'100%'
    }
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

</style>