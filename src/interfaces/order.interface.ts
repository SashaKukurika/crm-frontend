import { CourseStatusEnum } from '../enums';

import { IComment } from './comment.interface';
import { IGroup } from './group.interface';
import { IUser } from './user.interface';

export interface IOrderWithPagination {
  orders: IOrder[];
  totalCount: number;
}

export interface IOrder {
  id: number;

  name: string;

  surname: string;

  email: string;

  phone: string;

  age: number;

  course: string;

  course_format: string;

  course_type: string;

  sum: number;

  alreadyPaid: number;

  created_at: Date;

  utm: string;

  msg: string;

  status: string;

  group: IGroup;
  // todo type
  comments: IComment[];

  manager?: IUser;
}
export interface IOrdersStatistic {
  total: number;

  statuses: Status[];
}

export interface Status {
  status: CourseStatusEnum;
  count: number;
}
