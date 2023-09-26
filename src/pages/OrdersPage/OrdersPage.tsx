import {FC} from 'react';
import {Orders} from "../../components/Orders/Orders";
import {Header} from "../../components/Header/Header";
import './OrdersPage.css'

interface IProps {

}

const OrdersPage: FC<IProps> = () => {
    return (
        <div className={'Orders_page'}>
            <Header/>
            <Orders/>
        </div>
    );
};

export {OrdersPage};