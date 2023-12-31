import axios, { AxiosError } from 'axios';
import { createBrowserHistory } from 'history';

import { baseURL, urls } from '../constants';
import { IWaitListCB } from '../types';

import { authService } from './auth.service';
const axiosService = axios.create({ baseURL });

let isRefreshing = false;
const waitList: IWaitListCB[] = [];
const history = createBrowserHistory({ window });
axiosService.interceptors.request.use((res) => {
  const accessToken = authService.getAccessToken();
  if (accessToken) res.headers.Authorization = `Bearer ${accessToken}`;
  return res;
});

axiosService.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          await authService.refresh();
          isRefreshing = false;
          afterRefresh();
          return axiosService(originalRequest);
        } catch (e) {
          authService.deleteTokens();
          localStorage.removeItem('isChecked');
          isRefreshing = false;
          history.replace('/login?expSession=true');
          return Promise.reject(error);
        }
      }
      if (originalRequest.url === urls.auth.refreshToken) {
        return Promise.reject(error);
      }

      return new Promise((resolve) => {
        subscribeToWaitList(() => {
          resolve(axiosService(originalRequest));
        });
      });
    }
    return Promise.reject(error);
  },
);

const subscribeToWaitList = (cb: IWaitListCB): void => {
  waitList.push(cb);
};

const afterRefresh = () => {
  while (waitList.length) {
    const cb = waitList.pop();
    cb();
  }
};
export { axiosService, history };
