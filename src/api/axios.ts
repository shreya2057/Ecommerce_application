import axios from "axios";

// Creating axios instance
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});
