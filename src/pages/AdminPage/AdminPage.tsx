import { FC, useEffect, useState } from 'react';

import { CreateUserForm, Footer, Header, Modal, OrdersStatistic, Spinner } from '../../components';
import { useAppDispatch } from '../../hooks';
import { ordersActions } from '../../redux';

import './AdminPage.css';
const AdminPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(usersActions.getUsers());
    dispatch(ordersActions.getOrdersStatistic());
  }, [dispatch]);

  // const { users, loading } = useSelector((state) => state.usersReducer);
  const loading = false;

  const [openCreateUser, setOpenCreateUser] = useState(false);

  return (
    <div className={'Admin_page'}>
      <Header />

      <div className={'Admin_page_content'}>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <div className={'Admin_page_statistic'}>
              <div className={'Admin_page_title'}>Orders statistic:</div>
              <OrdersStatistic />
            </div>

            <button className={'Admin_page_button'} onClick={() => setOpenCreateUser(true)}>
              Create
            </button>

            <div className={'Admin_page_users'}>
              {/* {users.map((user) => (*/}
              {/*  <User key={user.id} user={user} />*/}
              {/* ))}*/}
            </div>
          </div>
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
