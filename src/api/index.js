import axios from "axios";

const http = axios.create({
  baseURL: "https://safe-and-sound.netlify.app/.netlify/functions/api",
  timeout: 10000,
});

const api = {
  post: {
    signup: async (body) => await http.post("/auth/signup", body),
    signin: async (body) => await http.post("/auth/signin", body),
    add_new_visit: async (body) => await http.post("/visit/add", body),
  },
  get: {
    fetch_test_results: async (nic) => await http.get(`/user/tests/${nic}`),
    fetch_user: async (nic) => await http.get(`/user/fetch/${nic}`),
  },
  put: {
    update_test_results: async (nic) =>
      await http.get(`/user/health-status/${nic}`),
  },
};

export default api;
