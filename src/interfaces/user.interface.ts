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
  role: string;
}

export interface IUserWithPagination {
  users: IUser[];
  totalCount: number;
}

export interface IStatistic {
  total: number;
  [userId: number]: any;
  statuses: Status[];
}
