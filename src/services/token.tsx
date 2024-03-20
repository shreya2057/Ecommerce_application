import Cookies from "js-cookie";
const getToken = () => {};

const setToken = (key: string, token: string) => {
  Cookies.set(key, token);
};

export const TokenService = { getToken, setToken };
