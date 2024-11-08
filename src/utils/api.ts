import axios from "axios";
import { getToken } from "./storage";
const axiosInstance = axios.create({
  baseURL: "https://weedmatch-backend.onrender.com/api/v1",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
});
// console.log(process.env.EXPO_PUBLIC_BASE_URL, "url");
axiosInstance.interceptors.request.use(
  async (request) => {
    request.headers.Accept = "application/json";
    request.headers["Content-Type"] = "application/json";
    const token = await getToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
      console.log("authenticated firebase token");
    }
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Got response");
    return response.data;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);

export default axiosInstance;
