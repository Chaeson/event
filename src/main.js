import '@babel/polyfill'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import EnlargeableImage from '@diracleo/vue-enlargeable-image';
import stack from 'vue-tantan-stack';

Vue.use(EnlargeableImage);
Vue.use(stack);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
