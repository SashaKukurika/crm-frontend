import { Navigate, Route, Routes } from 'react-router-dom';

import { UserRolesEnum } from './enums';
import { RequiredAuth } from './hoc';
import { MainLayout } from './layouts';
import { ActivatePage, AdminPage, LoginPage, OrdersPage, Page404 } from './pages';
// todo після скидання фільтрів не працює чекбокс з першого разу
// todo якщо міняю статус на new то пропадає менеджер стає нал і будь хто знову може взяти в роботу
const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={'/login'} />} />

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
