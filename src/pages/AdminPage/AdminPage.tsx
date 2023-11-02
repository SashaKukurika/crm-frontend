import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  CreateUserForm,
  Footer,
  Header,
  Modal,
  OrdersStatistic,
  Pagination,
  Spinner,
  User,
} from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ordersActions, usersActions } from '../../redux';

import './AdminPage.css';
const AdminPage: FC = () => {
  const [query, setQuery] = useSearchParams({ page: '1' });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(usersActions.getAll(query));
    dispatch(ordersActions.getOrdersStatistic());
  }, [dispatch, query]);

  const { users, loading, totalCount } = useAppSelector((state) => state.usersReducer);

  const [openCreateUser, setOpenCreateUser] = useState(false);

  return (
    <div className={'Admin_page'}>
      <Header />

      <div className={'Admin_page_content'}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className={'Admin_page_statistic'}>
              <div className={'Admin_page_title'}>Orders statistic:</div>
              <OrdersStatistic />
            </div>

            <button className={'Admin_page_button'} onClick={() => setOpenCreateUser(true)}>
              Create
            </button>

            <div className={'Admin_page_users'}>
              {users.map((user) => (
                <User key={user.id} user={user} />
              ))}
            </div>

            <Pagination
              totalCount={totalCount}
              pageSize={5}
              currentPage={+query.get('page')}
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
      <Modal closeModal={setOpenCreateUser} openModal={openCreateUser}>
        <CreateUserForm setOpenCreateUser={setOpenCreateUser} />
      </Modal>

      <Footer />
    </div>
  );
};

export { AdminPage };
