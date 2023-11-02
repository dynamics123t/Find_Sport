import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/settings/constants";
import { getCookie, removeCookies, setCookie } from "@/utils/clientCookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    // 'Content-Type': 'application/json'
  },
  timeout: 600000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

let isRefreshed = false;

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response?.data;
  },
  async (error: any) => {
    const { config, response } = error;

    const originalRequest = config;

    if (response.status === 401 && !isRefreshed && !originalRequest._retry) {
      isRefreshed = true;
      originalRequest._retry = true;
      const tokenRefresh = getCookie(REFRESH_TOKEN);
      // // Refresh the token
      return axiosInstance
        .post(
          "/auth/refresh-token",
          {},
          {
            headers: {
              Authorization: `Bearer ${tokenRefresh}`,
            },
          }
        )
        .then((res: any) => {
          isRefreshed = false;
          // Update the token in the headers
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res?.access}`;
          originalRequest.headers["Authorization"] = `Bearer ${res?.access}`;
          setCookie(ACCESS_TOKEN, res.access);
          setCookie(REFRESH_TOKEN, res.refresh, {
            expires: 7,
          });
          // setCookie(res?.access)
          // Repeat the original request with the updated headers
          return axiosInstance(originalRequest);
        })
        .catch(() => {
          removeCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
          window.location.href = "/login";
        });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
