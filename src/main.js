import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//全局引入request
import http from "./services/request";
Vue.prototype.$http = http;

Vue.config.productionTip = false; // 阻止启动生产消息
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
