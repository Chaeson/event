<template>
  <v-app :style="{ border:'1px solid cyan'} " >
    <v-card width="100%" max-height="75%" height="75%" flat style="background: none">
      <!-- 여백 ...-->
    </v-card>
    <v-card width="100%" max-height="10%" height="10%" flat style="background: none">
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="2" style="border: 1px solid cyan" >
          <v-img src="@/assets/main/btn_view.png">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2" style="border: 1px solid cyan">
          <v-img src="@/assets/main/btn_view.png">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2" style="border: 1px solid cyan">
          <v-img src="@/assets/main/btn_view.png">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
    <!-- 아래 하단 -->
    <v-spacer></v-spacer>
    <v-card width="100%" max-height="10%" height="10%" flat style="background: none">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="1" style="border: 1px solid cyan">
          <v-img src="@/assets/main/scrolldown.png">
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Second"
}
</script>

<style scoped>

</style>