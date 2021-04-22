import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.8.102:9000/.netlify/functions/api",
  timeout: 10000,
});

http.interceptors.request.use(
  async (config) => {
    const signToken = localStorage.getItem("signToken");
    if (signToken) {
      config.headers["Authorization"] = `Bearer ${signToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const api = {
  post: {
    signup: (body) => http.post("/auth/signup", body),
    signin: (body) => http.post("/auth/signin", body),
  },
  get: {
    fetch_test_results: (nic) => http.get(`/user/tests/${nic}`),
    fetch_user: (nic) => http.get(`/user/fetch/${nic}`),
  },
  put: {
    update_test_results: (nic, body) =>
      http.put(`/user/health-status/${nic}`, body),
    add_new_visit: (body) => http.put("/visit/add", body),
  },
  patch: {
    checkout: (body) => http.patch("/visit/checkout", body),
  },
};

export default api;
