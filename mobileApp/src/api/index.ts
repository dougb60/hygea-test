import axios from "axios";

const BASE_URL = "http://127.0.0.1:3001/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("erro =>", error);
    return Promise.reject(error);
  }
);

export default api;
