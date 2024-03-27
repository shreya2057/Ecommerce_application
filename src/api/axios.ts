import axios from "axios";

// Creating axios instance
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ECOMMERCE_API_URL,
});
