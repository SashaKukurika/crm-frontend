import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { UserRolesEnum } from '../enums';
import { useAppSelector } from '../hooks';
import { authService } from '../services';

interface IProps {
  availableRoles?: UserRolesEnum[];
}
const RequiredAuth: FC<IProps> = ({ availableRoles }) => {
  const { me } = useAppSelector((state) => state.authReducer);

  const accessToken = authService.getAccessToken();
  if (!accessToken) return <Navigate to={'/login'} />;

  if (availableRoles && me?.role && !availableRoles.includes(me?.role)) {
    return <Navigate to={'/login'} />;
  }

  return <Outlet />;
};

export { RequiredAuth };
