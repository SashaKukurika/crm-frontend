import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { ordersActions } from '../../redux';
import { Order } from '../Order';
import { SortOrders } from '../SortOrders';

import './Orders.css';

interface IProps {
  sortByField: (field: string) => void;
}

const Orders: FC<IProps> = ({ sortByField }) => {
  const { ordersWithPagination } = useAppSelector((state) => state.ordersReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ordersActions.getAllWithPagination());
  }, [dispatch]);
  return (
    <>
      <div className={'Orders_table'}>
        <SortOrders sortByField={sortByField} />

        {ordersWithPagination?.data.map((order) => <Order order={order} key={order.id} />)}
      </div>
    </>
  );
};

export { Orders };
