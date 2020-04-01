import axios from "axios";

axios.defaults.baseURL = "https://open.duyiedu.com";
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config);
    config.params = {
      ...config.params,
      appkey: "haha_1564373868387"
    }
    return config;
  });

  export default axios;