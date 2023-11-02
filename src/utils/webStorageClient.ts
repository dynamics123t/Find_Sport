import Cookies from "js-cookie";
import _ from "lodash";

import { ACCESS_TOKEN } from "@/settings/constants";

const webStorageClient = {
  set(key: string, rawValue: any, option?: any) {
    const value = _.isString(rawValue) ? rawValue : JSON?.stringify(rawValue);
    Cookies.set(key, value, option);
  },

  get(key: string) {
    const value: string = Cookies.get(key) || "";
    try {
      return JSON?.parse(value);
    } catch {
      return value;
    }
  },

  remove(key: string) {
    Cookies.remove(key);
  },

  removeAll() {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
  },

  setToken(value: string, option?: any) {
    this.set(ACCESS_TOKEN, value, option);
  },

  getToken() {
    return this.get(ACCESS_TOKEN);
  },
};

export default webStorageClient;
