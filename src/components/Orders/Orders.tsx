import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IOrder } from '../../interfaces';
import { ordersActions } from '../../redux';
import { orderService } from '../../services';
import { Order } from '../Order';
import { OrderForm } from '../OrderForm';

import './Orders.css';

const Orders = () => {
  // const [orders, setOrders] = useState<IOrder[]>([]);
  const [updateOrdersSearch, setUpdateOrdersSearch] = useState<IOrder | null>(null);
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ordersActions.getAllWithPagination());
    // todo put in getAllWithPagination the updateOrdersSearch
    // orderService
    //   .getAllWithPagination()
    //   .then((value) => value.data)
    //   .then((value) => setOrders(value.data));
  }, [dispatch, updateOrdersSearch]);
  return (
    <>
      <div className={'Orders_page_management'}>
        <OrderForm setUpdateOrdersSearch={setUpdateOrdersSearch} />
        <button className={'Exel_btn'}>
          <FontAwesomeIcon
            className={'Exel_btn_img'}
            icon={faFileExcel}
            style={{ color: '#ffffff' }}
          />
        </button>
      </div>
      {orders.map((order) => (
        <Order order={order} key={order.id} />
      ))}
    </>
  );
};

export { Orders };
