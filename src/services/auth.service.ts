import { AxiosResponse } from 'axios';

import { urls } from '../constants';
import { IAuth, ITokens, IUser } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

class AuthService {
  private readonly accessKey = 'accessToken';
  private readonly refreshKey = 'refreshToken';
  async login(credentials: IAuth): Promise<IUser> {
    const { data }: AxiosResponse<ITokens> = await axiosService.post(urls.auth.login, credentials);
    this.setTokens(data);
    const { data: me }: AxiosResponse<IUser> = await this.me();
    return me;
  }

  me(): IRes<IUser> {
    return axiosService.get(urls.auth.me);
  }
  private setTokens({ accessToken, refreshToken }: ITokens): void {
    localStorage.setItem(this.accessKey, accessToken);
    localStorage.setItem(this.refreshKey, refreshToken);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessKey);
  }

  deleteTokens(): void {
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
  }
}

export const authService = new AuthService();
