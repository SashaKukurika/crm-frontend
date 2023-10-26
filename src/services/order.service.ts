import { urls } from '../constants';
import { IOrder, IOrdersStatistics, IOrderWithPagination } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

const orderService = {
  getAllWithPagination: (params: URLSearchParams): IRes<IOrderWithPagination> =>
    axiosService.get(urls.orders.orders, { params }),
  updateById: (id: number, order: Partial<IOrder>) =>
    axiosService.patch(urls.orders.getById(id), order),
  addComment: (id: number, commentInfo: any) =>
    axiosService.post(urls.orders.addComment(id), commentInfo),
  getOrdersStatistics: (): IRes<IOrdersStatistics> => axiosService.get(urls.orders.getStatistics),
  // todo add logic
  getExcel: () => axiosService.get(urls.orders.getExcel, { responseType: 'blob' }),
};

export { orderService };
