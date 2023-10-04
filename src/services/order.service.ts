import { urls } from '../constants';
import { IOrder, IOrdersStatistics, IOrderWithPagination } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

const orderService = {
  getAllWithPagination: (): IRes<IOrderWithPagination> => axiosService.get(urls.orders.orders),

  getOrdersStatistics: (): IRes<IOrdersStatistics> => axiosService.get(urls.orders.getStatistics),

  getById: (id: number) => axiosService.get(urls.orders.getById(id)),

  updateById: (id: number, order: IOrder): IRes<IOrder> =>
    axiosService.patch(urls.orders.getById(id), order),
  // todo add logic
  getExel: () => axiosService.get(urls.orders.getExel),
};

export { orderService };
