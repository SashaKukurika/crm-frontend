import { ChangeEvent, FC, useEffect, useState } from 'react';
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
  const [query, setQuery] = useSearchParams({ page: '1' });

  const dispatch = useAppDispatch();

  const { orders, loading, totalCount } = useAppSelector((state) => state.ordersReducer);

  const [debouncedValue, setDebouncedValue] = useState(query);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(query), 400);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    dispatch(ordersActions.getAllWithPagination(debouncedValue));
  }, [dispatch, debouncedValue]);

  const setParams = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const name = e.target.name;

    if (!text) {
      setQuery((value) => {
        value.delete(name);
        value.set('page', '1');
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
        <OrderForm setParams={setParams} query={query} />
        <ExelButton />
      </div>

      <div className={'Orders_page_content'}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Orders orders={orders} sortByField={sortByField} />

            <Pagination
              currentPage={+query.get('page')}
              totalCount={totalCount}
              pageSize={25}
              onPageChange={(page) =>
                setQuery((value) => {
                  value.set('page', page.toString());
                  return value;
                })
              }
            />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export { OrdersPage };
