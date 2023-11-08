import { Navigate, Route, Routes } from 'react-router-dom';

import { UserRolesEnum } from './enums';
import { RequiredAuth } from './hoc';
import { MainLayout } from './layouts';
import { ActivatePage, AdminPage, LoginPage, OrdersPage, Page404 } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={'/login'} />} />
        {/* // path це що пишеться в урлі і при виклику link або navigate to там прописуємо одну з наших path і при
         кліку на лінк будемо переходити до element*/}
        <Route path={'/login'} element={<LoginPage />} />

        <Route element={<RequiredAuth />}>
          <Route path={'/orders'} element={<OrdersPage />} />
        </Route>

        <Route element={<RequiredAuth availableRoles={[UserRolesEnum.ADMIN]} />}>
          <Route path={'/admin'} element={<AdminPage />} />
        </Route>

        <Route path={'/activate/:activateToken'} element={<ActivatePage />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default App;
