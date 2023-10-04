import { FC } from 'react';

import {
  ExelButton,
  Footer,
  Header,
  OrderForm,
  Orders,
  Pagination,
  Spinner,
} from '../../components';

import './OrdersPage.css';

const OrdersPage: FC = () => {
  const loading = false;
  return (
    <div className={'Orders_page'}>
      <Header />

      <div className={'Orders_page_management'}>
        <OrderForm />
        <ExelButton />
      </div>

      <div className={'Orders_page_content'}>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <Orders />

            <Pagination />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export { OrdersPage };
