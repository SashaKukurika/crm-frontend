import {SubmitHandler, useForm} from "react-hook-form";
import {IOrder} from "../../interfaces/order.interface";
import {FC} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {orderValidator} from "../../validators/order.validator";
import './OrderForm.css'

interface IProps {
    setUpdateOrdersSearch: (value: IOrder) => void
}

const OrderForm: FC<IProps> = ({setUpdateOrdersSearch}) => {
    const {register, handleSubmit} = useForm<IOrder>({
        mode: 'onChange',
        resolver: joiResolver(orderValidator)
    });

    const search: SubmitHandler<IOrder> = async (orderSearch) => {
        await setUpdateOrdersSearch(orderSearch);
        console.log(orderSearch);
    }
    return (
        <form className={'Filter_orders'} onSubmit={handleSubmit(search)}>
            <div className={'Filter_orders_inputs'}>

                <div className={'Filter_orders_input'}>
                    <div className={'Form_input'}>
                        <input className={'Form_input_input'} type="text" placeholder={'name'} {...register('name')}/>
                    </div>
                </div>

                <div className={'Filter_orders_input'}>
                    <div className={'Form_input'}>
                        <input className={'Form_input_input'} type="text"
                               placeholder={'surname'} {...register('surname')}/>
                    </div>
                </div>

                <div className={'Filter_orders_input'}>
                    <div className={'Form_input'}>
                        <input className={'Form_input_input'} type="text" placeholder={'email'} {...register('email')}/>
                    </div>
                </div>

                <div className={'Filter_orders_input'}>
                    <div className={'Form_input'}>
                        <input className={'Form_input_input'} type="text" placeholder={'phone'} {...register('phone')}/>
                    </div>
                </div>

                <div className={'Filter_orders_input'}>
                    <div className={'Form_input'}>
                        <input className={'Form_input_input'} type="number" placeholder={'age'} {...register('age')}/>
                    </div>
                </div>

                <div className={'Filter_orders_input'}>
                    <div className={'Form_select'}>
                        <select className={'Form_select_select'} placeholder={'course'} {...register('course')}>
                            <option>all courses</option>
                            <option value={'FS'}>FS</option>
                            <option value={'QACX'}>QACX</option>
                            <option value={'JCX'}>JCX</option>
                            <option value={"JSCX"}>JSCX</option>
                            <option value={"FE"}>FE</option>
                            <option value={"PCX"}>PCX</option>
                        </select>
                    </div>
                </div>

            <div className={'Filter_orders_input'}>
                <div className={'Form_select'}>
                    <select className={'Form_select_select'}
                            placeholder={'course_format'} {...register('course_format')}>
                        <option>all formats</option>
                        <option value={'static'}>static</option>
                        <option value={'online'}>online</option>
                    </select>
                </div>
            </div>

            <div className={'Filter_orders_input'}>
                <div className={'Form_select'}>
                    <select className={'Form_select_select'} placeholder={'course_type'} {...register('course_type')}>
                        <option>all types</option>
                        <option value={'pro'}>pro</option>
                        <option value={'minimal'}>minimal</option>
                        <option value={'premium'}>premium</option>
                        <option value={'incudator'}>incudator</option>
                        <option value={'vip'}>vip</option>
                    </select>
                </div>
            </div>
            {/*todo add group from api*/}
            {/*<div className={'Filter_orders_input'}>*/}
            {/*    <div className={'Form_select'}>*/}
            {/*        <select className={'Form_select_select'} placeholder={'group'} {...register('group')}>*/}
            {/*            <option>all statuses</option>*/}
            {/*            <option value={'In work'}>In work</option>*/}
            {/*            <option value={'New'}>New</option>*/}
            {/*            <option value={'Agree'}>Agree</option>*/}
            {/*            <option value={'Disagree'}>Disagree</option>*/}
            {/*            <option value={'Dubbing'}>Dubbing</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*todo add date*/}
            {/*<div className={'Filter_orders_input'}>*/}
            {/*    <div className={'Form_input'}>*/}
            {/*        <input className={'Form_input_input'} type="text" placeholder={'start_date'} {...register('start_date')}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className={'Filter_orders_input'}>*/}
            {/*    <div className={'Form_input'}>*/}
            {/*        <input className={'Form_input_input'} type="text" placeholder={'end_date'} {...register('end_date')}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            </div>
            {/*// /!*<button>submit</button>*!/*/}
            {/*todo add Filter_orders_checkbox_button*/}
        </form>
        // {/*<div>*/}
        // {/*    {errors.age && <div>{errors.age.message}</div>}*/}
        // {/*</div>*/}
    );
};

export {OrderForm};