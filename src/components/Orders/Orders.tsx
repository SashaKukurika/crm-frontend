import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { ordersActions } from '../../redux';
import { Order } from '../Order';

import './Orders.css';

const Orders = () => {
  const { ordersWithPagination } = useAppSelector((state) => state.ordersReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ordersActions.getAllWithPagination());
  }, [dispatch]);
  return <>{ordersWithPagination?.data.map((order) => <Order order={order} key={order.id} />)}</>;
};

export { Orders };
