import { getCookie } from "@/utils/clientCookie";
import axiosInstance from "./axiosInstanceClient";
import { ACCESS_TOKEN } from "@/settings/constants";
import { RawAxiosRequestHeaders } from "axios";

const postRequest = async (
  url: string,
  data?: { [key: string]: any },
  headers?: RawAxiosRequestHeaders
): Promise<object> => {
  const token = getCookie(ACCESS_TOKEN);

  if (token) {
    return axiosInstance
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type': fomrData ? 'multipart/form-data' : 'application/json',
          "Content-Type": "application/json",
          ...headers,
        },
      })
      .then((res: any) => res)
      .catch((err) => Promise.reject(err));
  }

  return axiosInstance
    .post(url, data, {
      headers: {
        // 'Content-Type': fomrData ? fomrData : 'application/json',
      },
    })
    .then((res: any) => res)
    .catch((err) => Promise.reject(err));
};

export { postRequest };
