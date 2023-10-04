import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { joiResolver } from '@hookform/resolvers/joi';

import { CourseFormatEnum, CoursesEnum, CourseTypeEnum, StatusEnum } from '../../enums';
import { IOrder } from '../../interfaces';
import { orderValidator } from '../../validators';

import './OrderForm.css';

// interface IProps {
//   setUpdateOrdersSearch: (value: IOrder) => void;
// }

const OrderForm: FC = () => {
  const { register, handleSubmit } = useForm<IOrder>({
    mode: 'onChange',
    resolver: joiResolver(orderValidator),
  });

  const search: SubmitHandler<IOrder> = async (orderSearch) => {
    // await setUpdateOrdersSearch(orderSearch);
    console.log(orderSearch);
  };
  return (
    <form className={'Filter_orders'} onSubmit={handleSubmit(search)}>
      <div className={'Filter_orders_inputs'}>
        <div className={'Filter_orders_input'}>
          <div className={'Form_input'}>
            <input
              className={'Form_input_input'}
              type="text"
              placeholder={'Name'}
              {...register('name')}
            />
          </div>
        </div>

        <div className={'Filter_orders_input'}>
          <div className={'Form_input'}>
            <input
              className={'Form_input_input'}
              type="text"
              placeholder={'Surname'}
              {...register('surname')}
            />
          </div>
        </div>

        <div className={'Filter_orders_input'}>
          <div className={'Form_input'}>
            <input
              className={'Form_input_input'}
              type="text"
              placeholder={'Email'}
              {...register('email')}
            />
          </div>
        </div>

        <div className={'Filter_orders_input'}>
          <div className={'Form_input'}>
            <input
              className={'Form_input_input'}
              type="text"
              placeholder={'Phone'}
              {...register('phone')}
            />
          </div>
        </div>

        <div className={'Filter_orders_input'}>
          <div className={'Form_input'}>
            <input
              className={'Form_input_input'}
              type="number"
              placeholder={'Age'}
              {...register('age')}
            />
          </div>
        </div>

        <div className={'Filter_orders_input'}>
          <div className={'Form_select'}>
            <select className={'Form_select_select'} placeholder={'course'} {...register('course')}>
              {Object.values(CoursesEnum).map((value, index) => (
                <option key={index}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={'Filter_orders_input'}>
          <div className={'Form_select'}>
            <select
              className={'Form_select_select'}
              placeholder={'course_format'}
              {...register('course_format')}
            >
              {Object.values(CourseFormatEnum).map((value, index) => (
                <option key={index}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={'Filter_orders_input'}>
          <div className={'Form_select'}>
            <select
              className={'Form_select_select'}
              placeholder={'course_type'}
              {...register('course_type')}
            >
              {Object.values(CourseTypeEnum).map((value, index) => (
                <option key={index}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        {/* todo add group from api*/}
        <div className={'Filter_orders_input'}>
          <div className={'Form_select'}>
            <select className={'Form_select_select'} placeholder={'status'} {...register('status')}>
              {Object.values(StatusEnum).map((value, index) => (
                <option key={index}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        {/* todo add date*/}
        <div className={'Filter_orders_input'}>
          <div className={'Form_input'}>
            <input
              className={'Form_input_input'}
              type="date"
              placeholder={'start_date'}
              {...register('created_at')}
            />
          </div>
        </div>

        <div className={'Filter_orders_input'}>
          <div className={'Form_input'}>
            <input
              className={'Form_input_input'}
              type="date"
              placeholder={'end_date'}
              {...register('created_at')}
            />
          </div>
        </div>
      </div>

      {/* todo add Filter_orders_checkbox_button*/}
      <div className={'Filter_orders_checkbox_button'}>
        <label>
          {/* todo change register for manager*/}
          <input className={'Filter_orders_checkbox'} type={'checkbox'} {...register('name')} />
          My
        </label>
        <button className={'Filter_orders_button'} type={'reset'}>
          <FontAwesomeIcon
            className={'Filter_orders_button_img'}
            icon={faRotateRight}
            style={{ color: '#ffffff' }}
          />
        </button>
      </div>
    </form>

    // {/*<div>*/}
    // {/*    {errors.age && <div>{errors.age.message}</div>}*/}
    // {/*</div>*/}
  );
};

export { OrderForm };
