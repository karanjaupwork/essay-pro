import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import DatetimePicker from "vuetify-datetime-picker";
// import "vuetify-datetime-picker/src/stylus/main.styl";

// Vue.use(DatetimePicker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
