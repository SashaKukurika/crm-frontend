import { FC } from 'react';

import { IOrder } from '../../interfaces';
import { Order } from '../Order';
import { SortOrders } from '../SortOrders';

import './Orders.css';

interface IProps {
  sortByField: (field: string) => void;
  orders: IOrder[];
}

const Orders: FC<IProps> = ({ sortByField, orders }) => {
  return (
    <>
      <div className={'Orders_table'}>
        <SortOrders sortByField={sortByField} />

        {orders && orders.map((order) => <Order order={order} key={order.id} />)}
      </div>
    </>
  );
};

export { Orders };
