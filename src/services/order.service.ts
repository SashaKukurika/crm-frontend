import { urls } from '../constants';
import { IOrder, IOrdersStatistics, IOrderWithPagination } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

const orderService = {
  getAllWithPagination: (params: URLSearchParams): IRes<IOrderWithPagination> =>
    axiosService.get(urls.orders.orders, { params }),
  updateById: (id: number, order: Partial<IOrder>): IRes<IOrder> =>
    axiosService.patch(urls.orders.getById(id), order),
  addComment: (id: number, comment: any) => axiosService.post(urls.orders.addComment(id), comment),
  getOrdersStatistics: (): IRes<IOrdersStatistics> => axiosService.get(urls.orders.getStatistics),
  // todo add logic
  getExel: () => axiosService.get(urls.orders.getExel),
};

export { orderService };
