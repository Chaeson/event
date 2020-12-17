<template>
  <v-app :style="{ border:'1px solid cyan'}">
      <v-container ma-0 pa-0 fill-height>

      </v-container>
  </v-app>
</template>

<script>
import ImageMap from 'image-map'
export default {
  name: "First",
  data:()=>({
    windowSize:{
      x:0,
      y:0
    },
    align:{
      center:'center',
      end:'end'
    }
  }),
  created() {
    ImageMap('img[serviceMove]')
  },
  mounted() {
    this.onResize()
  },
  methods:{
    onResize(){
      this.windowSize.x=window.innerWidth
      this.windowSize.y=window.innerHeight
    }
  }
}
</script>

<style scoped>

</style>