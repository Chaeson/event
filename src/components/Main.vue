<template>
  <hooper :vertical="true" :centerMode="true" :trim-white-space="false" :mouse-drag="false">
    <slide class="customBack">
      <First @change-page="changePage" class="bg-first"/>
    </slide>
    <slide class="customBack">
      <Second class="bg-second" />
    </slide>
    <slide class="customBack">
      <Third class="bg-third"/>
    </slide>
    <hooper-navigation slot="hooper-addons" id="mainNavi"></hooper-navigation>
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
    First:()=>import('@/components/main/First'),
    Second:()=>import('@/components/main/Second'),
    Third:()=>import('@/components/main/Third'),
    Hooper, Slide, HooperNavigation
  },
  created() {
  },
  data:()=>({
    text:'메인 페이지',
  }),
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    changePage(menu){
      console.log('Main > '+menu)
      this.$emit('change-page',menu,event)
    },

  },
  watch:{
  }
}
</script>

<style scoped>
.bg-first {
  background: url('http://pamphlet.ubcn.co.kr/image/main/bg_01main_01.jpg') no-repeat center center;
  background-size: contain;
}
.bg-second {
  background-color: #8DBDE5;
  background-size: contain;
}
.bg-third {
  background: url('http://pamphlet.ubcn.co.kr/image/main/bg_01main_03.jpg') no-repeat center center;
  background-size: contain;
}
</style>
<style>
.hooper {
  height: 90vh;
}
.hooper-list{
  border: 0px solid cyan;
}
#mainNavi > .hooper-prev{
  left: 50%;
  background: url('http://pamphlet.ubcn.co.kr/image/main/scrolldown.png') no-repeat center center;
  background-size: contain;
  display: none;
}
#mainNavi > .hooper-prev.is-disabled{
  display: none;
}
#mainNavi > .hooper-next.is-disabled{
  opacity: 1;
  cursor: pointer;
  background: url("http://pamphlet.ubcn.co.kr/image/main/top.png") no-repeat center center;
  background-size: contain;
  display: none;
}
#mainNavi > button.hooper-next{
  left: 50%;
  background: url('http://pamphlet.ubcn.co.kr/image/main/scrolldown.png') no-repeat;
  background-size: contain;
}
.customBack{
  background-color: #8DBDE5;
}
</style>