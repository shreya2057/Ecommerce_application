import { deleteCookie, getCookie, setCookie } from "cookies-next";

const getToken = (key: string) => {
  return getCookie(key);
};

const setToken = (key: string, token: string) => {
  return setCookie(key, token);
};

const deleteToken = (key: string) => {
  return deleteCookie(key);
};

const getTokenDetails = (key: string) => {
  const token = getToken(key)?.split(".");
  console.log(token);
};

export const TokenService = {
  getToken,
  setToken,
  deleteToken,
  getTokenDetails,
};
