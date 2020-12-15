<template class="overflow-y-auto overflow-x-hidden">
  <v-container>
    <router-view></router-view>
  </v-container>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
    data:500,
    position: { scrollTop: 0, scrollLeft: 0 }
  }),
  created() {
  },
  methods:{
    onScroll: function(e, position) {
      console.log(position)
      console.log(e)
      this.position = position;
    }
  },
  destroyed() {
  },
  mounted() {

  },
  watch:{

  }
};
</script>
