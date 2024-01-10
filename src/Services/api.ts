import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-notes-h1rj.onrender.com",
});

export default api;
