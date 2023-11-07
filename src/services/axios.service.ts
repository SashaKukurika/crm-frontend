import axios from 'axios';

import { baseURL } from '../constants';

import { authService } from './auth.service';
const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use((res) => {
  const accessToken = authService.getAccessToken();
  if (accessToken) res.headers.Authorization = `Bearer ${accessToken}`;
  return res;
});
export { axiosService };
