import { storageKey, baseURL } from "@constants";
import axios, { AxiosRequestConfig } from "axios";
import { RefreshError } from "@types";
import { Mutex } from "async-mutex";
import { doRefreshToken } from "@apis";

const request = axios.create({ baseURL });
export const requestWithNoToken = axios.create({ baseURL });

const onRequest = async (config: AxiosRequestConfig) => {
  // const accessToken = await localStorage.getItem(storageKey.accessToken);

  if (config.headers) {
    // config.headers.Authorization = `Bearer ${accessToken}`;
    config.headers.Authorization = `Bearer eyJ0eXAiOiJhY2Nlc3MiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDg2NTEwNjEsInN1YiI6IjEiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ4NjUxMDYwfQ.FCSj2HgtWBlPZNNLrCNwC27g5Y415AaRXpwQY_pGHss`;
  }

  return config;
};

const mutex = new Mutex();

const onResponseError = async (err: any) => {
  if (!axios.isAxiosError(err) || err.response?.status !== 401) {
    throw err;
  }

  const release = await mutex.acquire();

  try {
    const refreshToken = await localStorage.getItem(storageKey.refreshToken);

    if (!refreshToken) {
      throw new RefreshError();
    }

    const { access_token: newAccessToken, refresh_token: newRefreshToken } = (
      await doRefreshToken(refreshToken)
    ).data;

    await localStorage.setItem(storageKey.refreshToken, newRefreshToken);
    await localStorage.setItem(storageKey.accessToken, newAccessToken);

    request.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
    if (err.config.headers) {
      err.config.headers.Authorization = `Bearer ${newAccessToken}`;
    }

    return axios(err.config);
  } catch (error) {
    throw new RefreshError();
  } finally {
    release();
  }
};

request.interceptors.request.use(onRequest);

request.interceptors.response.use((res) => res, onResponseError);

export default request;
