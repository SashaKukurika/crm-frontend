import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LogOut } from '../LogOut';

import './Header.css';
const Header: FC = () => {
  // todo adminReducer
  // const { adminProfile } = useSelector((state) => state.adminProfileReducer);

  const navigate = useNavigate();
  return (
    <header className={'Header'}>
      <div onClick={() => navigate('/orders')} className={'Header_logo'}>
        Logo
      </div>

      <div className={'Header_content'}>
        {/* todo add manager*/}
        <div className={'Header_name'}>{'admin' || 'manager'}</div>

        {/* <button*/}
        {/*  className={`header__button ${!adminProfile?.is_superuser && "header__button_hidden"}`}*/}
        {/*  onClick={() => navigate("/adminPanel")}*/}
        {/* >*/}
        <button onClick={() => navigate('/adminPanel')} className={'Header_button'}>
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
