import { urls } from '../constants';
import { IUser, IUserWithStatisticAndPagination } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

const userService = {
  getAll: (params: URLSearchParams): IRes<IUserWithStatisticAndPagination> =>
    axiosService.get(urls.users.users, { params }),
  createUser: (user: Partial<IUser>): IRes<IUser> => axiosService.post(urls.users.users, user),
  getActivateToken: (id: number): IRes<string> => axiosService.get(urls.users.getActivateToken(id)),
  activate: (activateToken: string, password: string): IRes<void> =>
    axiosService.patch(urls.auth.activateUser(activateToken), { password }),
  ban: (id: number): IRes<IUser> => axiosService.patch(urls.users.ban(id)),
  unban: (id: number): IRes<IUser> => axiosService.patch(urls.users.unban(id)),
};

export { userService };
