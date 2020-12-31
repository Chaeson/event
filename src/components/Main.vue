<template>
  <hooper :vertical="true" :centerMode="true" :trim-white-space="false" :mouse-drag="false" id="mainPage">
    <slide style="border: 1px solid red ;" class="bg-first">

    </slide>
    <slide style="border: 1px solid green;" class="bg-second">

    </slide>
    <slide style="border: 1px solid blue ;" class="bg-third">

    </slide>
    <hooper-navigation slot="hooper-addons" id="navi"></hooper-navigation>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: "Main",
  components:{
    //First:()=>import('@/components/main/First'),
    // Second:()=>import('@/components/main/Second'),
    // Third:()=>import('@/components/main/Third'),
    Hooper, Slide, HooperNavigation
  },
  created() {
  },
  data:()=>({
    text:'메인 페이지',
    first:{
      main:{
        backgroundImg:'@/assets/main/bg_01main_01.jpg',
        padding:'0px'
      }
    },
    second:{
    },
    third:{
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
    },
    changePage(menu){
      console.log('Main > '+menu)
      this.$emit('change-page',menu,event)
    }
  }
}
</script>

<style scoped>
.bg-first {
  background: url('http://pamphlet.ubcn.co.kr/image/main/bg_01main_01.jpg') no-repeat center center;
  background-size: contain;
}
.bg-second {
  background: url('http://pamphlet.ubcn.co.kr/image/main/bg_01main_02.jpg') no-repeat center center;
  background-size: contain;
}
.bg-third {
  background: url('http://pamphlet.ubcn.co.kr/image/main/bg_01main_03.jpg') no-repeat center center;
  background-size: contain;
}
</style>
<style>
#navi > button.hooper-prev{
  left: 50%;
}
#navi > button.hooper-next{
  left: 50%;
}
</style>