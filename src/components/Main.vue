<template>
  <v-container>
    <v-app :style="{border:'1px solid cyan'}">
      <v-card>
        <First :style="{opacity:this.first.opacity ,backgroundSize: '100%', backgroundRepeat:'no-repeat' ,backgroundImage: 'url(' + require('@/assets/main/bg_01main_01.jpg') + ')',  width:'100%', height:'auto' }"/>
<!--        <First :style="{opacity:this.first.opacity, border:'1px solid black', width:'100%', height:'auto' }"/>-->
      </v-card>
      <v-card>
        <Second :style="{opacity:this.second.opacity, backgroundSize: '100%', backgroundRepeat:'no-repeat' ,backgroundImage: 'url(' + require('@/assets/main/bg_01main_02.jpg') + ')',  width:'100%', height: 'auto' }"/>
<!--        <Second :style="{opacity:this.second.opacity,  width:'auto', height: 'auto' }"/>-->
      </v-card>
      <v-card>
        <Third :style="{opacity:this.third.opacity,backgroundSize: '100%', backgroundRepeat:'no-repeat' ,backgroundImage: 'url(' + require('@/assets/main/bg_01main_03.jpg') + ')',  width:'100%', height: 'auto' }"/>
<!--        <Third :style="{opacity:this.third.opacity,  width:'auto', height: 'auto' }"/>-->
      </v-card>
    </v-app>
  </v-container>
</template>

<script>
export default {
  name: "Main",
  components:{
    First:()=>import('@/components/main/First'),
    Second:()=>import('@/components/main/Second'),
    Third:()=>import('@/components/main/Third')
  },
  data:()=>({
    text:'메인 페이지',
    first:{
      opacity:1
    },
    second:{
      opacity:1 // 1000 ~
    },
    third:{
      opacity:1 // 2000 ~
    }
  }),
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll(){
      console.log(window.scrollY)
    }
  }
}
</script>

<style scoped>

</style>