<template>
<v-main class="fill-height ml-auto mr-auto pa-1" fluid :style="{border:'1px solid black', padding: '0px'}" id="customEnlarge" >
  <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_01Cube.jpg"
                          src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_01Cube.jpg"
                          class="enlarge"
  >
    <v-img :src="this.service" class="fixSize"></v-img>
  </vue-enlargeable-image>
  <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_02QT.jpg"
                          src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_02QT.jpg"
                          class="enlarge"
  >
    <v-img :src="this.service" class="fixSize"></v-img>
  </vue-enlargeable-image>
  <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_03Shop.jpg"
                          src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_03Shop.jpg"
                          class="enlarge"
  >
    <v-img :src="this.service" class="fixSize"></v-img>
  </vue-enlargeable-image>
</v-main>
</template>

<script>
export default {
  name: "Second",
  data:()=>({
    showProduct:false,
    dialog:false,
    service:'http://pamphlet.ubcn.co.kr/pamphlet/image/main/btn_view.png',
    cube:'http://pamphlet.ubcn.co.kr/image/product/03sub_01Cube.jpg',
  }),
  comments:{
  },
  methods:{
    pageMove(data){
      this.changePage(data)
    },
    changePage(menu){
      console.log('Second > '+menu)
      this.$emit('change-page',menu,event)
    },
    viewProduct(product){
      console.log(product);
      this.showProduct = true;
      this.dialog=true
    },

  }
}
</script>

<style scoped>
.fixSize{
  min-height: 65px;
  min-width: 270px;
  max-height: 65px;
  max-width: 270px;
  cursor: pointer;
  background-size: contain;
}
.enlarge{
  min-height: 65px;
  min-width: 270px;
  max-height: 65px;
  max-width: 270px;
  display: inline;
  margin: auto;
}
#customEnlarge > img{
  display: inline-block;
}
#customEnlarge{
  width: 100%;
  height: 100%;
  margin: auto auto;
}
</style>
<style>
.enlarge.enlargeable-image.active > .full.enlarged{
  position: absolute;
}
.enlarge.enlargeable-image.active > .full.enlarging{
  position: absolute;
}
</style>