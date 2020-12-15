<template>
  <div class="home">
    <img class="background"
          id="background"
           src="https://images.unsplash.com/photo-1509599589979-3b5a15d2816e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
    <img class="foreground"
          id="foreground"
           src="http://3.bp.blogspot.com/-gTf6EpGgHbs/TiswK4aeDlI/AAAAAAAAAKs/c6lOK9Ipigk/s400/creative+page+borders-10.png"/>
    <div class="section section-1"  id="first" v-bind:style="{opacity: 100, offsetHeight: 100}">
      <div>
        <h1>Test</h1>
      </div>
    </div>
    <div class="section section-2" id="second" >
    <div>
      <h2> Here's more info </h2>
      <p> Test 2 </p>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  beforeCreate () {
  },
  name: "Home",
  props:{
    foreground:HTMLDocument,
    background:HTMLDocument,
    first:{
      value:{
        opacity:100,
        offsetHeight:100
      }
    },
    second:HTMLDocument
  },
  data: () => ({
    //
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
      console.log(scrollY)
      console.log(this.first.style.opacity)
      // decreases as user scrolls
      //this.first.style.opacity = (100 - ((scrollY + window.innerHeight) - this.first.value.offsetHeight)) / 100
      this.first.value.opacity = (100 - ((scrollY + window.innerHeight) - this.first.value.offsetHeight)) / 100
      // increases as user scrolls
      this.second.value.style.opacity = ((scrollY + window.innerHeight) - this.second.value.offsetTop) / 100

      const maxBackgroundSize = 120;
      const backgroundSize = ((scrollY) / (maxBackgroundSize - 100)) // increases as user scrolls

      // zoom the background at a slower rate
      this.background.value.style.transform = 'scale(' + (100 + backgroundSize * .4) / 100 + ')'
      this.foreground.value.style.transform = 'scale(' + (100 + backgroundSize) / 100 + ')'
    }
  },
  components: {
  },
  computed:{

  }
};
</script>
<style scoped>
 .background,  .foreground {
  /* Fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Scale proportionately */
  width: 100%;
  height: auto;
}

 .background {
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
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
   transform: translate(-50%, -50%);
 }

 .section-1 {
   margin-bottom: 500px; /* determines the gap between our two sections */
   font-size: 4em;
 }

 .section-2 {
   opacity: 0; /* defaults to 0 because it's not visible */
 }

 .section-2 div {
   background-color: rgba(255, 255, 255, 0.7);
   color: black;
   text-align: center;
   padding: 50px;
   max-width: 300px;
 }

 .section-2 h2 {
   font-size: 2em;
   margin-bottom: 40px;
 }

 .section-2 p {
   line-height: 150%;
 }
</style>
