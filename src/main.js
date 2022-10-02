import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Clipboard from 'v-clipboard';
import AOS from "aos";
import "aos/dist/aos.css";



import "./assets/style.scss";

Vue.config.productionTip = false;
Vue.use(Clipboard);



new Vue({
  created() {
    AOS.init({ });
    },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
