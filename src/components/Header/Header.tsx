import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UserRolesEnum } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authActions } from '../../redux';
import { authService } from '../../services';
import { LogOut } from '../LogOut';

import './Header.css';
const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { me } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (!me && authService.getAccessToken()) {
      dispatch(authActions.me());
    }
  }, [me, dispatch]);

  return (
    <header className={'Header'}>
      <div onClick={() => navigate('/orders')} className={'Header_logo'}>
        Logo
      </div>

      <div className={'Header_content'}>
        <div className={'Header_name'}>
          {me?.role === UserRolesEnum.ADMIN ? UserRolesEnum.ADMIN : me?.name}
        </div>

        <button
          className={`Header_button ${
            me?.role === UserRolesEnum.MANAGER && 'Header_button_hidden'
          }`}
          onClick={() => navigate('/admin')}
        >
          <FontAwesomeIcon
            className={'Header_button_img'}
            icon={faUserGear}
            style={{ color: '#ffffff' }}
          />
        </button>

        <LogOut />
      </div>
    </header>
  );
};

export { Header };
