import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  const [query, setQuery] = useSearchParams({ page: '1' });

  const setParams = (e: any) => {
    // todo check what ig come adn from where
    console.log(e);
    const text = e.target.value;
    const name = e.target.name;

    if (!text) {
      setQuery((value) => {
        value.delete(name);
        return value;
      });
    } else if (name === 'reset' && text === 'reset') {
      setQuery({
        page: '1',
        // todo change to my property
        field: 'id',
        fieldOrder: 'DESC',
      });
    } else {
      setQuery((value) => {
        value.set(name, text);
        value.set('page', '1');
        return value;
      });
    }
  };

  return (
    <div className={'Orders_page'}>
      <Header />

      <div className={'Orders_page_management'}>
        <OrderForm setParams={setParams} />
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
