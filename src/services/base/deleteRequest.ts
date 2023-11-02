import { getCookie } from "@/utils/clientCookie";
import axiosInstance from "./axiosInstanceClient";
import { ACCESS_TOKEN } from "@/settings/constants";
import { AxiosHeaders } from "axios";

const deleteRequest = async (
  url: string,
  data?: { [key: string]: any },
  headers?: AxiosHeaders
): Promise<object> => {
  const token = getCookie(ACCESS_TOKEN);

  if (token) {
    return axiosInstance
      .delete(url, {
        data,
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
    .delete(url, {
      data,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    })
    .then((res: any) => res)
    .catch((err) => Promise.reject(err));
};

export { deleteRequest };
