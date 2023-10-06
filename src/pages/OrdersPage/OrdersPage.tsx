import { ChangeEvent, FC, useEffect } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ordersActions } from '../../redux';

import './OrdersPage.css';

const OrdersPage: FC = () => {
  const loading = false;
  const [query, setQuery] = useSearchParams({ page: '1' });

  console.log(query.get('name'));

  const { ordersWithPagination } = useAppSelector((state) => state.ordersReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ordersActions.getAllWithPagination(query));
  }, [dispatch, query]);

  const setParams = (e: ChangeEvent<HTMLInputElement>) => {
    // todo check what ig come adn from where
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
        order: '-id',
      });
    } else {
      setQuery((value) => {
        value.set(name, text);
        value.set('page', '1');
        return value;
      });
    }
  };

  const sortByField = (field: string) => {
    setQuery((value) => {
      if (value.get('order') === field) {
        value.set('order', `-${field}`);
      } else {
        value.set('order', field);
      }
      value.set('page', '1');
      return value;
    });
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
          <>
            <Orders ordersWithPagination={ordersWithPagination} sortByField={sortByField} />

            <Pagination
              setQuery={setQuery}
              query={query}
              pageCount={ordersWithPagination && ordersWithPagination.pageCount}
            />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export { OrdersPage };
