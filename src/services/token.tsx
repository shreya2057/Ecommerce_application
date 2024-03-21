import Cookies from "js-cookie";
const getToken = (key: string) => {
  return Cookies.get(key);
};

const setToken = (key: string, token: string) => {
  return Cookies.set(key, token);
};

export const TokenService = { getToken, setToken };
