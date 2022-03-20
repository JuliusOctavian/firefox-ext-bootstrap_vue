import {createApp} from "vue";
import http from "../_vue-plugin/http.plugin"
import App from "./App.vue";

createApp(App).use(http).mount("#app");