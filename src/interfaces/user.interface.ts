import { UserRolesEnum } from '../enums';

import { Status } from './order.interface';

export interface IUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  is_active: boolean;
  created_at: Date;
  last_login: Date;
  // todo add enum
  role: UserRolesEnum;
  statistic?: IStatistic;
}

export interface IUserWithStatisticAndPagination {
  users: IUser[];
  totalCount: number;
}

export interface IStatistic {
  total: number;
  statuses: Status[];
}
