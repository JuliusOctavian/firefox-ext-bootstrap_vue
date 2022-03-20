import {App, AppConfig, AppContext} from "vue";
import axios from "axios";

axios.defaults.baseURL = "/";
axios.defaults.timeout = 20000;

export default {
  install(app: App<Element>, ...options: Array<any>) {
    app.config.globalProperties.$http = axios;
  }
}