import { FC } from 'react';

import { Header } from '../../components/Header/Header';
import { Orders } from '../../components/Orders/Orders';

import './OrdersPage.css';

const OrdersPage: FC = () => {
  return (
    <div className={'Orders_page'}>
      <Header />
      <Orders />
    </div>
  );
};

export { OrdersPage };
