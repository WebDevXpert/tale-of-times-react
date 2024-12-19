import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  // baseURL: `http://localhost:8000`,
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

customFetch.interceptors.request.use((config) => {
  const { user } = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export default customFetch;
