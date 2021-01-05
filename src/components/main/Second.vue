<template>
<v-main class="fill-height ml-auto mr-auto" fluid :style="{ padding: '0px'}" id="customEnlarge" >
  <div id="wrapEnlarge">
    <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_01Cube.jpg"
                            src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_01Cube.jpg"
                            class="enlarge"
    >
      <v-img :src="this.service" class="fixSize"></v-img>
    </vue-enlargeable-image>
    <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_02QT.jpg"
                            src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_02QT.jpg"
                            class="enlarge qt"
    >
      <v-img :src="this.service" class="fixSize"></v-img>
    </vue-enlargeable-image>
    <vue-enlargeable-image  src="http://pamphlet.ubcn.co.kr/image/product/03sub_03Shop.jpg"
                            src_large="http://pamphlet.ubcn.co.kr/image/product/03sub_03Shop.jpg"
                            class="enlarge shop"
    >
      <v-img :src="this.service" class="fixSize"></v-img>
    </vue-enlargeable-image>
    <v-spacer></v-spacer>
  </div>
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
  margin-left: auto;
  margin-right: auto;
}
#customEnlarge > img{
  display: inline-block;
}
#customEnlarge{
  width: 100%;
  height: 100%;
}
#wrapEnlarge{
  margin-top: 33%;
  margin-left: auto;
  margin-right: auto;
  width: 62%;
}
.shop{
  margin-right: 0%;
  margin-left: 15%;
}
.qt{
  margin-left: 15%;
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