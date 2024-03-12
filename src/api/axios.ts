import axios from "axios";

// Creating axios instance
export const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});
