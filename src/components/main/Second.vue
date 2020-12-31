<template>
  <v-app>
    <v-card width="100%" max-height="80%" height="80%" flat style="background: none">
      <!-- 여백 ...-->
    </v-card>
    <v-card width="100%" max-height="10%" height="10%" flat style="background: none">
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-img @click="pageMove('Product')" style="cursor: pointer" src="@/assets/main/btn_view.png">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-img @click="pageMove('Product')" style="cursor: pointer" src="@/assets/main/btn_view.png">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-img @click="pageMove('Product')" style="cursor: pointer" src="@/assets/main/btn_view.png">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
    <!-- 아래 하단 -->
    <v-spacer></v-spacer>
    <v-card width="100%" max-height="5%" height="5%" flat style="background: none">
      <v-row style="height: 100%" no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="1" style="height: 100%">
          <v-img src="@/assets/main/scrolldown.png" contain max-height="100%">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Second",
  methods:{
    pageMove(data){
      this.changePage(data)
    },
    changePage(menu){
      console.log('Second > '+menu)
      this.$emit('change-page',menu,event)
    }
  }
}
</script>

<style scoped>

</style>