import {useEffect, useState} from "react";
import {IOrder} from "../../interfaces/order.interface";
import {orderService} from "../../services/order.service";
import {Order} from "../Order/Order";
import {OrderForm} from "../OrderForm/OrderForm";

const Orders = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [updateOrdersSearch, setUpdateOrdersSearch] = useState<IOrder | null>(null);

    useEffect(() => {
        // todo put in getAllWithPagination the updateOrdersSearch
        orderService.getAllWithPagination().then(value => value.data).then(value => setOrders(value.data))
    }, [updateOrdersSearch])
    return (
        <div>
            <OrderForm setUpdateOrdersSearch={setUpdateOrdersSearch}/>
            {orders.map(order => <Order order={order} key={order.id}/>)}
        </div>
    );
};

export {Orders};