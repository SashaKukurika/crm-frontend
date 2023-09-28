import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { faRightFromBracket, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

        <button onClick={() => navigate('/login')} className={'LogOut_btn'}>
          <FontAwesomeIcon
            className={'LogOut_btn_img'}
            icon={faRightFromBracket}
            style={{ color: '#ffffff' }}
          />
        </button>
      </div>
    </header>
  );
};

export { Header };
