// axiosInstance.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000", 
  // baseURL: "https://mkcommerce.onrender.com/api/v1", 
});

export default instance;