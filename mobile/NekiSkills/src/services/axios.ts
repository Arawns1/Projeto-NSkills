import axios from "axios";
import { getLocalItem } from "./storage";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(async (request) => {
  const token = await getLocalItem("user");

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});
