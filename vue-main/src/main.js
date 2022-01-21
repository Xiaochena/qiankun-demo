import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import "./iview";
import startQiankun from "./micro";

startQiankun();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#main-app");
