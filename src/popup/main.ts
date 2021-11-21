import Vue from "vue";
import axios, {AxiosStatic} from "axios";
import App from "./App.vue";

declare module 'vue/types/vue' {
  // eslint-disable-next-line no-unused-vars,no-shadow
  interface Vue {
    $http: AxiosStatic
  }
}

Vue.prototype.$http = axios;

new Vue({
  render: h => h(App)
}).$mount("#app");