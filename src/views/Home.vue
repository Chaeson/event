<template>
  <div class="home">
    <v-img class="background" ref="background" src="../assets/background.jpg" v-bind:style="{transform:this.background.transform}"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  beforeCreate () {
  },
  name: "Home",
  components: {
  },
  props:{

  },
  data: () => ({
    //
    foreground:{
      transform: 0
    },
    background:{
      transform: 100
    },
    first:{
      opacity:100,
      offsetHeight:1000
    },
    second:{
      opacity:0,
      offsetHeight:1100
    },
    third:{
      opacity:-100,
      offsetHeight:1800
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
      const scrollY = window.scrollY
      // decreases as user scrolls
      this.first.opacity = (100 - ((scrollY + window.innerHeight) - this.first.offsetHeight)) / 100
      // increases as user scrolls
      // this.second.opacity = ((scrollY + window.innerHeight) - this.second.offsetHeight) / 100
      this.second.opacity = this.secondOpacity(this.third.opacity)
      this.third.opacity = ((scrollY + window.innerHeight) - this.third.offsetHeight) / 100


      const maxBackgroundSize = 120;
      const backgroundSize = ((scrollY) / (maxBackgroundSize - 100)) // increases as user scrolls

      // zoom the background at a slower rate
      this.background.transform='scale(' + (100 + backgroundSize * .4) / 100 + ')'
      this.foreground.transform='scale(' + (100 + backgroundSize) / 100 + ')'
    },
    secondOpacity(value){
      console.log(this.second.offsetHeight)
      console.log(window.scrollY)
      if(value>0)
        return (100-((window.scrollY+window.innerHeight) - this.second.offsetHeight)) / 100
      else
        return (((window.scrollY + window.innerHeight) - this.second.offsetHeight) / 100) + 1
    }
  },
  computed:{

  }
};
</script>
<style scoped>
 .background, .foreground {
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

 .foreground {
   /* Fill background */
   min-height: 100%;
   min-width: 1024px;

   /* Scale proportionately */
   width: 100%;
   height: auto;
 }
 .section {
   min-height: 100vh;
   position: relative;
 }
 .section > div {
   position: fixed;
   color: white;
   /* centers this div */
   left: 50%;
   top: 50%;
   //transform: translate(-50%, -50%);
 }

 .section-1 {
   margin-bottom: 500px; /* determines the gap between our two sections */
   font-size: 4em;
 }

 .section-2 {
   opacity: 0; /* defaults to 0 because it's not visible */
 }

 .section-2 > div {
   background-color: rgba(255, 255, 255, 0.7);
   color: black;
   text-align: center;
   padding: 50px;
   max-width: 300px;
 }

 .section-2 > h2 {
   font-size: 2em;
   margin-bottom: 40px;
 }

 .section-2 > p {
   line-height: 150%;
 }
</style>
