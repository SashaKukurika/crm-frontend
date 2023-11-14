import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { authService } from '../../services';

import './LogOut.css';

const LogOut: FC = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('isChecked');
    authService.deleteTokens();
    navigate('/login');
  };

  return (
    <button onClick={logOut} className={'LogOut_btn'}>
      <FontAwesomeIcon
        className={'LogOut_btn_img'}
        icon={faRightFromBracket}
        style={{ color: '#ffffff' }}
      />
    </button>
  );
};

export { LogOut };
