import { urls } from '../constants';
import { IOrder, IOrdersStatistic, IOrderWithPagination, IParams } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

const orderService = {
  getAllWithPagination: (params: URLSearchParams): IRes<IOrderWithPagination> =>
    axiosService.get(urls.orders.orders, { params }),
  updateById: (id: number, order: Partial<IOrder>) =>
    axiosService.patch(urls.orders.getById(id), order),
  addComment: (id: number, commentInfo: any) =>
    axiosService.post(urls.orders.addComment(id), commentInfo),
  getOrdersStatistic: (): IRes<IOrdersStatistic> => axiosService.get(urls.orders.getStatistic),
  getExcel: (params: IParams) =>
    axiosService.get(urls.orders.getExcel, { responseType: 'blob', params }),
};

export { orderService };
