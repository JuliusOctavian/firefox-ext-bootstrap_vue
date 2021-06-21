import axios from "axios";

axios.defaults.baseURL = "http://192.168.50.77:8080";

axios.interceptors.request.use(config => {
  console.log(config);
  return config;
},error => {

})
export default axios;