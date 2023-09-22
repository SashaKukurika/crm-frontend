import {SubmitHandler, useForm} from "react-hook-form";
import {IOrder} from "../../interfaces/order.interface";
import {FC} from "react";

interface IProps {
    setUpdateOrdersSearch: (value: IOrder) => void
}

const OrderForm: FC<IProps> = ({setUpdateOrdersSearch}) => {
    const {reset, register, handleSubmit, formState: {errors, isValid}} = useForm<IOrder>({mode:'onChange'});

    const search: SubmitHandler<IOrder> = async (orderSearch) => {
        await setUpdateOrdersSearch(orderSearch);
        console.log(orderSearch);
    }
    return (
        <form onSubmit={handleSubmit(search)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'surname'} {...register('surname')}/>
            <input type='text' placeholder={'age'} {...register('age')}/>
            <button>submit</button>
        </form>
    );
};

export {OrderForm};