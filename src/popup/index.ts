import Vue from "vue";
import App from "./template/App.vue";

import axios, {AxiosStatic} from "axios";

axios.defaults.baseURL = "https://earthquake.usgs.gov"

declare module 'vue/types/vue'{
	interface Vue{
		$http:AxiosStatic
	}
}

Vue.prototype.$http = axios;

new Vue({
	render:h=>h(App)
	}).$mount("#app");