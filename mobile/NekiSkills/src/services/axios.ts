import axios from "axios";
import { getLocalItem } from "./storage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const api = axios.create({
  baseURL: "http://192.168.0.115:8080",
  // baseURL: "http://localhost:8080",
});
