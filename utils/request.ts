import axios, { AxiosRequestConfig } from "axios";
import baseURL from "@shared/baseURL";
import storageKeys from "@shared/storageKeys";

const request = axios.create({ baseURL });
const requestWithToken = axios.create({ baseURL });

requestWithToken.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers || typeof window === "undefined") {
    return config;
  }

  const accessToken = localStorage.getItem(storageKeys.accessToken);
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export { request, requestWithToken };
