<template :style="{backgroundColor: this.headerColor}">
<!--  <v-container fluid ma-0 pa-0 fill-height :style="{ backgroundColor: this.headerColor}">-->
  <v-main ma-0 pa-0 :style="{ padding:this.paddingVal, backgroundColor:this.backColor}">
    <Header @change-page="changePage" v-bind:mainColor="headerColor" v-show="this.headerShow"/>
    <component @change-page="changePage" v-bind:is="view" style="padding-top: 0; padding-left: 0;"/>
  </v-main>
</template>

<script>
export default {
  name: "Pamphlet",
  components:{
    Header:()=>import('@/components/Header'),
    Main:()=>import('@/components/Main'),
    Service:()=>import('@/components/Service'),
    Product:()=>import('@/components/Product'),
    Question:()=>import('@/components/Question'),
    RoadMap:()=>import('@/components/RoadMap')
  },
  created() {
  },
  data: () => ({
    view: 'Main',
    headerColor:'#8DBDE5',
    headerShow:'true',
    paddingVal:'64px 0px 0px',
    backColor:'#8DBDE5'
  }),
  methods:{
    changePage(menu){
      console.log('??'+menu)
      console.log('??'+this.headerColor)
      if(menu=='Service' ){
        this.headerColor='#999999'
        this.backColor='#AFD6F7'
      }
      else if (menu=='Main' || menu=='Question'){
        this.headerColor = '#8DBDE5'
        this.backColor='#8DBDE5'
      }else if(menu=='Product'){
        this.headerColor='#999999'
        this.backColor='#FFFFFF'
      }
      if(menu=='RoadMap'){
        this.headerShow=false
        this.paddingVal='0px'
      }else{
        this.headerShow=true
        this.paddingVal='64px 0px 0px'
      }
      console.log('??'+this.headerColor)
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