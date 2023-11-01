import { urls } from '../constants';
import { IUser, IUserWithPagination } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

const userService = {
  getAll: (params: URLSearchParams): IRes<IUserWithPagination> =>
    axiosService.get(urls.users.users, { params }),
  // todo що повертаю
  getStatistic: (id: number) => axiosService.get(urls.users.getStatistic(id)),
  createUser: (user: Partial<IUser>): IRes<IUser> => axiosService.post(urls.users.users, user),
};

export { userService };
