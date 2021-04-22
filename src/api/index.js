import axios from "axios";

const http = axios.create({
  baseURL: "https://safe-and-sound.netlify.app/.netlify/functions/api",
  timeout: 10000,
});

const api = {
  post: {
    signup: (body) => http.post("/auth/signup", body),
    signin: (body) => http.post("/auth/signin", body),
    add_new_visit: (body) => http.post("/visit/add", body),

  },
  get: {
    fetch_test_results: (nic) => http.get(`/user/tests/${nic}`),
    fetch_user: (nic) => http.get(`/user/fetch/${nic}`),
  },
  put: {
    update_test_results: (nic, body) => http.put(`/user/health-status/${nic}`, body),
  },
};

export default api;
