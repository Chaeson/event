<template>
<v-main class="fill-height ml-auto mr-auto" fluid :style="{ padding: '0px'}" id="customEnlarge" >
  <div id="wrapEnlarge">
    <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_01Cube.jpg"
                            src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_01Cube.jpg"
                            class="enlarge cube"
    >
      <v-img :src="this.cube" class="fixSize"></v-img>
    </vue-enlargeable-image>
    <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_02QT.jpg"
                            src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_02QT.jpg"
                            class="enlarge"
    >
      <v-img :src="this.qt" class="fixSize"></v-img>
    </vue-enlargeable-image>
    <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_03Shop.jpg"
                            src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_03Shop.jpg"
                            class="enlarge"
    >
      <v-img :src="this.shop" class="fixSize"></v-img>
    </vue-enlargeable-image>
    <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_04Access.jpg"
                            src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_04Access.jpg"
                            class="enlarge"
    >
      <v-img :src="this.access" class="fixSize"></v-img>
    </vue-enlargeable-image>
  </div>
</v-main>
</template>

<script>
export default {
  name: "Second",
  data:()=>({
    showProduct:false,
    dialog:false,
    cube:'http://pamphlet.ubcn.co.kr/image/product/0_1cube.png',
    qt:'http://pamphlet.ubcn.co.kr/image/product/0_2qt.png',
    shop:'http://pamphlet.ubcn.co.kr/image/product/0_3shop.png',
    access:'http://pamphlet.ubcn.co.kr/image/product/0_4acess.png',
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
  min-height: 100%;
  min-width: 70%;
  max-height: 100%;
  max-width: 70%;
  cursor: zoom-in;
  background-size: contain;
}
.enlarge{
  display: inline-grid;
  max-width: 370px;
}
.cube{
  margin-left: 2%;
}
#customEnlarge > img{
  display: inline-block;
}
#customEnlarge{
  width: 100%;
  height: 100%;
}
#wrapEnlarge{
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
<style>
.enlarge.enlargeable-image.active > .full.enlarged{
  position: absolute;
  max-height: 80%;
  max-width: 80%;
  margin-left: 10%;
  margin-top: 5%;
}
.enlarge.enlargeable-image.active > .full.enlarging{
  position: absolute;
  max-height: 80%;
  max-width: 80%;
  margin-left: 10%;
  margin-top: 5%;
}
</style>