import axios from "axios";

const instance = axios.create({
    baseURL: process.env.firebaseURL
});

export default instance;