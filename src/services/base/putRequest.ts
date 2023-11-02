import { getCookie } from "@/utils/clientCookie";
import axiosInstance from "./axiosInstanceClient";
import { ACCESS_TOKEN } from "@/settings/constants";
import { RawAxiosRequestHeaders } from "axios";

const putRequest = async (
  url: string,
  data?: { [key: string]: any },
  headers?: RawAxiosRequestHeaders
): Promise<object> => {
  const token = getCookie(ACCESS_TOKEN);

  if (token) {
    return axiosInstance
      .put(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...headers,
        },
      })
      .then((res: any) => res)
      .catch((err) => Promise.reject(err));
  }

  return axiosInstance
    .put(url, data, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    })
    .then((res: any) => res)
    .catch((err) => Promise.reject(err));
};

export { putRequest };
