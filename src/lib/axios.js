/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-06-03 21:32:28
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\lib\axios.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import axios from "axios";
import { getToken } from "./auth";

// if (process.env.NODE_ENV === "development") {
//     axios.defaults.baseURL = '/'
// }else{
axios.defaults.baseURL = "/api/";
// }
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    if (getToken()) {
      config.headers["Authorization"] = getToken();
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
