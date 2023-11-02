import Cookies from "js-cookie";
export const getCookie = (key: string) => Cookies.get(key);

export const setCookie = (
  key: string,
  value: string,
  option?: Cookies.CookieAttributes
) => Cookies.set(key, value, option);

export const removeCookies = (keys: string[]) => {
  keys.forEach((key) => Cookies.remove(key));
};
