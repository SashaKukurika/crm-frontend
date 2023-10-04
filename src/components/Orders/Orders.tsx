import { useEffect } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { ordersActions } from '../../redux';
import { Order } from '../Order';
import { OrderForm } from '../OrderForm';

import './Orders.css';

const Orders = () => {
  const { ordersWithPagination } = useAppSelector((state) => state.ordersReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ordersActions.getAllWithPagination());
  }, [dispatch]);
  return (
    <>
      <div className={'Orders_page_management'}>
        {/* <OrderForm setUpdateOrdersSearch={setUpdateOrdersSearch} />*/}
        <OrderForm />
        <button className={'Exel_btn'}>
          <FontAwesomeIcon
            className={'Exel_btn_img'}
            icon={faFileExcel}
            style={{ color: '#ffffff' }}
          />
        </button>
      </div>
      {ordersWithPagination?.data.map((order) => <Order order={order} key={order.id} />)}
    </>
  );
};

export { Orders };
