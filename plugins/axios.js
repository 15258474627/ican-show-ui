import Qs from 'qs';
import axios from "axios";

axios.defaults.timeout = 30000;
axios.defaults.baseURL = "/api";
axios.defaults.headers["Authorization"] = "Bearer " + "0343649a-e608-417d-9fd2-e015032c20c1";
// HTTPrequest拦截
axios.interceptors.request.use(config => {
  // headers中配置serialize为true开启序列化
  if (config.method === "post") {
    config.data = serialize(config.data);
    delete config.data.serialize;
  }
  if (config.method === "get") {
    config.paramsSerializer = function (params) {
      return Qs.stringify(params, { arrayFormat: "brackets" });
    };
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axios;