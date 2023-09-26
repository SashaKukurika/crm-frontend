import {FC} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import {Link} from "react-router-dom";

// interface IProps {
//     setChoice: IUseState<PageEnum>
// }

const Header: FC = () => {
    // const navigate = useNavigate();
    return (
        <header className={'Header'}>


                <Link to={'/orders'}>
                    <div className={'Header_logo'}>
                    Logo
                    </div>
                </Link>


            <div className={'Header_content'}>

                <div className={'Header_name'}>{'admin' || 'manager'}</div>

                <Link to={'/login'}>
                    <button className={'Header_button'}>
                        <FontAwesomeIcon className={'Header_button_img'} icon={faUserGear} style={{color: "#ffffff",}}/>
                    </button>
                </Link>

                <Link to={'/login'}>
                    <button className={'LogOut_btn'}>
                        <FontAwesomeIcon className={'LogOut_btn_img'} icon={faRightFromBracket}
                                         style={{color: "#ffffff",}}/>
                    </button>
                </Link>

            </div>

        </header>
    );
};

export {Header};