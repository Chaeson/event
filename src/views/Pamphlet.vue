<template>
  <v-app>
    <v-img class="background" ref="background" src="@/assets/background.jpg"/>
    <Header @change-page="changePage"/>
    <v-main class="pa-0">
      <component v-bind:is="view"/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Pamphlet",
  components:{
    Header:()=>import('@/components/Header'),
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