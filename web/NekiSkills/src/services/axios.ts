import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem("user");

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});
