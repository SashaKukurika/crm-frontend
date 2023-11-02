import { urls } from '../constants';
import { IUser, IUserWithStatisticAndPagination } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

const userService = {
  getAll: (params: URLSearchParams): IRes<IUserWithStatisticAndPagination> =>
    axiosService.get(urls.users.users, { params }),
  // todo що повертаю
  getStatistic: (id: number) => axiosService.get(urls.users.getStatistic(id)),
  createUser: (user: Partial<IUser>): IRes<IUser> => axiosService.post(urls.users.users, user),
  // todo що повертаю
  getActivateToken: (id: number) => axiosService.get(urls.users.getActivateToken(id)),
  ban: (id: number): IRes<IUser> => axiosService.patch(urls.users.ban(id)),
  unban: (id: number): IRes<IUser> => axiosService.patch(urls.users.unban(id)),
};

export { userService };
