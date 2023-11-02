import { getCookie } from "@/utils/clientCookie";
import axiosInstance from "./axiosInstanceClient";
import { ACCESS_TOKEN } from "@/settings/constants";

const getRequest = async (
  url: string,
  options?: {
    params?: {
      [key: string]: any;
    };
  }
): Promise<object> => {
  const token = getCookie(ACCESS_TOKEN);

  if (token) {
    return axiosInstance
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: options?.params,
      })
      .then((res: any) => res)
      .catch((err) => Promise.reject(err));
  }

  return axiosInstance
    .get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res: any) => res)
    .catch((err) => Promise.reject(err));
};

export { getRequest };
