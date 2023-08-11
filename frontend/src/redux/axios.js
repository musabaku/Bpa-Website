// axiosInstance.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://bigpropertyagency.onrender.com/api/v1", 
});

export default instance;