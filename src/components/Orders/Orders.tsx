import { FC } from 'react';

import { IOrderWithPagination } from '../../interfaces';
import { Order } from '../Order';
import { SortOrders } from '../SortOrders';

import './Orders.css';

interface IProps {
  sortByField: (field: string) => void;
  ordersWithPagination: IOrderWithPagination;
}

const Orders: FC<IProps> = ({ sortByField, ordersWithPagination }) => {
  return (
    <>
      <div className={'Orders_table'}>
        <SortOrders sortByField={sortByField} />

        {ordersWithPagination &&
          ordersWithPagination.orders.map((order) => <Order order={order} key={order.id} />)}
      </div>
    </>
  );
};

export { Orders };
