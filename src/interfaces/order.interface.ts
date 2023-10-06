export interface IOrderWithPagination {
  orders: IOrder[];
  pageCount: number;
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
}

export interface IOrdersStatistics {
  total: number;
  inWork: number;
  agree: number;
  disagree: number;
  dubbing: number;
  nullOrders: number;
}
