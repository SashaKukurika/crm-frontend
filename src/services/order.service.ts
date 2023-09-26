import {axiosService} from './axios.service';
import {urls} from '../constants/urls';
import {IOrder, IOrderWithPagination} from "../interfaces/order.interface";
import {IRes} from "../types/res.type";

const orderService = {
    getAllWithPagination: (): IRes<IOrderWithPagination> => axiosService.get(urls.orders),
    // todo add type for return statistics
    getOrdersStatistics: ()=> axiosService.get(urls.ordersStatistics),
    getById: (id: number) => axiosService.get(`${urls.orders}/${id}`),
    updateById: (id: number, order: IOrder):IRes<IOrder> => axiosService.patch(`${urls.orders}/${id}`, order),
}

export { orderService }