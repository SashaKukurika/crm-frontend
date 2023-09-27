import {useEffect, useState} from "react";
import {IOrder} from "../../interfaces/order.interface";
import {orderService} from "../../services/order.service";
import {Order} from "../Order/Order";
import {OrderForm} from "../OrderForm/OrderForm";
import './Orders.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileExcel} from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [updateOrdersSearch, setUpdateOrdersSearch] = useState<IOrder | null>(null);

    useEffect(() => {
        // todo put in getAllWithPagination the updateOrdersSearch
        orderService.getAllWithPagination().then(value => value.data).then(value => setOrders(value.data))
    }, [updateOrdersSearch])
    return (
        <>
            <div className={'Orders_page_management'}>
                <OrderForm setUpdateOrdersSearch={setUpdateOrdersSearch}/>
                <button className={'Exel_btn'}>
                    <FontAwesomeIcon className={'Exel_btn_img'} icon={faFileExcel} style={{color: "#ffffff",}} />
                </button>
            </div>
            {orders.map(order => <Order order={order} key={order.id}/>)}
        </>
    );
};

export {Orders};