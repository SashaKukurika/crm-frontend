import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts';
import { LoginPage, OrdersPage, Page404 } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={'/login'} />} />
        {/* // path це що пишеться в урлі і при виклику link або navigate to там прописуємо одну з наших path і при
         кліку на лінк будемо переходити до element*/}
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/orders'} element={<OrdersPage />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default App;
