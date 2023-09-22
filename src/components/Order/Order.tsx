import {FC} from "react";
import {IOrder} from "../../interfaces/order.interface";

interface IProps {
    order: IOrder;
}

const Order: FC<IProps> = ({order}) => {
    const {
        id, age, course, course_format, course_type, msg, email, name, sum, utm,
        phone, status, surname, created_at, alreadyPaid
    } = order;
    return (
        <div>
            <div>{id}</div>
            <div>{age}</div>
            <div>{course}</div>
            <div>{course_format}</div>
            <div>{course_type}</div>
            <div>{msg}</div>
            <div>{email}</div>
            <div>{name}</div>
            <div>{sum}</div>
            <div>{utm}</div>
            <div>{phone}</div>
            <div>{status}</div>
            <div>{surname}</div>
            <div>{created_at as any as string}</div>
            <div>{alreadyPaid||'null'}</div>
            <hr/>
        </div>
    );
};

export {Order};