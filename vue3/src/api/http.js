import axios from 'axios';

import qs from "qs";

let http = axios.create({
  baseURL: "",
});

http.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
      // console.log(config.data);
      config.data = qs.stringify(config.data);
      if (config.method == "get") {
        // console.log(config.data);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // console.log(response);
    if (response.status == 200) {
      // console.log(response);
      return response;
    } else {
      // console.log(response);

      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default http;
