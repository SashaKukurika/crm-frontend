import { FC } from 'react';

import { Header, Orders } from '../../components';

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
