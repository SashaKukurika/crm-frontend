import {FC} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import {IUseState} from "../../types/useState.type";
import {PageEnum} from "../../constants/page.enum";

interface IProps {
    setChoice: IUseState<PageEnum>
}

const Header: FC<IProps> = ({setChoice}) => {
    return (
        <div className={'Header'}>

            <div onClick={()=> setChoice(PageEnum.ORDERS)} className={'Header_logo'}>Logo</div>

            <div className={'Header_content'}>

                <div className={'Header_name'}>{'admin' || 'manager'}</div>

                <button onClick={()=> setChoice(PageEnum.USERS)} className={'Header_button'}>
                    <FontAwesomeIcon className={'Header_button_img'} icon={faUserGear} style={{color: "#ffffff",}} />
                </button>

                <button onClick={()=> setChoice(PageEnum.LOGIN)} className={'LogOut_btn'}>
                    <FontAwesomeIcon className={'LogOut_btn_img'} icon={faRightFromBracket} style={{color: "#ffffff",}} />
                </button>

            </div>

        </div>
    );
};

export {Header};