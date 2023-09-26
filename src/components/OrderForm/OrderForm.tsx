import {SubmitHandler, useForm} from "react-hook-form";
import {IOrder} from "../../interfaces/order.interface";
import {FC} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {orderValidator} from "../../validators/order.validator";

interface IProps {
    setUpdateOrdersSearch: (value: IOrder) => void
}

const OrderForm: FC<IProps> = ({setUpdateOrdersSearch}) => {
    const {reset, register, handleSubmit, formState: {errors, isValid}} = useForm<IOrder>({
        mode: 'onChange',
        resolver: joiResolver(orderValidator)
    });

    const search: SubmitHandler<IOrder> = async (orderSearch) => {
        await setUpdateOrdersSearch(orderSearch);
        console.log(orderSearch);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type='text' placeholder={'name'} {...register('name')}/>
                <input type='text' placeholder={'surname'} {...register('surname')}/>
                <input type='text' placeholder={'age'} {...register('age')}/>
                <button>submit</button>
            </form>
            <div>
                {errors.age && <div>{errors.age.message}</div>}
            </div>
        </div>
    );
};

export {OrderForm};