<template>
  <v-container fluid ma-0 pa-0 fill-height>
<!--    <Header @change-page="changePage" :style="{width: '100%', border:'solid 1px cyan'}"/>-->
    <component v-bind:is="view" @click="this.onPosition"/>
  </v-container>
</template>

<script>
export default {
  name: "Pamphlet",
  components:{
    // Header:()=>import('@/components/Header'),
    Main:()=>import('@/components/Main'),
    Service:()=>import('@/components/Service'),
    Product:()=>import('@/components/Product'),
    Question:()=>import('@/components/Question')
  },
  data: () => ({
    view: 'Main'
  }),
  methods:{
    changePage(menu){
      console.log('!!'+menu)
      this.view=menu
    }
  }
}
</script>

<style scoped>
.background {
  /* Fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Scale proportionately */
  width: 100%;
  height: auto;
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
}
</style>