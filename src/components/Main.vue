<template>
  <v-app>
    <v-content v-bind:style="{opacity:this.first.opacity , backgroundImage:'./../assets/main/bg_01main_02.jpg'}">
      <First/>
    </v-content>
    <v-content v-bind:style="{opacity:this.second.opacity}">
      <Second/>
    </v-content>
    <v-img src="@/assets/main/bg_01main_03.jpg" app v-bind:style="{opacity:this.third.opacity}"/>
  </v-app>
</template>

<script>
export default {
  name: "Main",
  components:{
    First:()=>import('@/components/main/First'),
    Second:()=>import('@/components/main/Second')
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