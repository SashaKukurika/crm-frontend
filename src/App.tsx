import { Navigate, Route, Routes } from 'react-router-dom';

import { UserRolesEnum } from './enums';
import { RequiredAuth } from './hoc';
import { MainLayout } from './layouts';
import { ActivatePage, AdminPage, LoginPage, OrdersPage, Page404 } from './pages';
import { authService } from './services';

const App = () => {
  const accessToken = authService.getAccessToken();
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        {accessToken ? (
          <Route index element={<Navigate to={'/orders'} />} />
        ) : (
          <Route index element={<Navigate to={'/login'} />} />
        )}

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
