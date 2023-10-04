import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LogOut } from '../LogOut';

import './Header.css';
const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header className={'Header'}>
      <div onClick={() => navigate('/orders')} className={'Header_logo'}>
        Logo
      </div>

      <div className={'Header_content'}>
        <div className={'Header_name'}>{'admin' || 'manager'}</div>

        <button onClick={() => navigate('/login')} className={'Header_button'}>
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
