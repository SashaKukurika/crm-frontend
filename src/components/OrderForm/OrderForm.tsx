import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { joiResolver } from '@hookform/resolvers/joi';

import { CourseFormatEnum, CoursesEnum, CourseStatusEnum, CourseTypeEnum } from '../../enums';
import { IOrder } from '../../interfaces';
import { orderValidator } from '../../validators';
import { FormInput } from '../FormInput';
import { FormSelect } from '../FormSelect';

import './OrderForm.css';

interface IProps {
  setParams: (e: any) => void;
}

const OrderForm: FC<IProps> = ({ setParams }) => {
  const { register, reset } = useForm<IOrder>({
    mode: 'all',
    resolver: joiResolver(orderValidator),
  });
  // todo add group getting from backend

  // const search: SubmitHandler<IOrder> = async (orderSearch) => {
  //   // await setUpdateOrdersSearch(orderSearch);
  //   console.log(orderSearch);
  // };

  const resetForm = () => {
    reset();
    setParams({ target: { name: 'reset', value: 'reset' } });
  };

  return (
    <form className={'Filter_orders'} onChange={setParams}>
      <div className={'Filter_orders_inputs'}>
        <div className={'Filter_orders_input'}>
          <FormInput type="text" label={'Name'} name={'name'} register={register} />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput type={'text'} label={'Surname'} name={'surname'} register={register} />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput type={'text'} label={'Email'} name={'email'} register={register} />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput type={'text'} label={'Phone'} name={'phone'} register={register} />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput type={'number'} label={'Age'} name={'age'} register={register} />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Course'}
            name={'course'}
            register={register}
            options={Object.values(CoursesEnum)}
            defaultLabel={'all courses'}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Course format'}
            name={'course_format'}
            register={register}
            options={Object.values(CourseFormatEnum)}
            defaultLabel={'all formats'}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Course type'}
            name={'course_type'}
            register={register}
            options={Object.values(CourseTypeEnum)}
            defaultLabel={'all types'}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Status'}
            name={'status'}
            register={register}
            options={Object.values(CourseStatusEnum)}
            defaultLabel={'all statuses'}
          />
        </div>
        {/* todo add group from api*/}
        {/* todo add date*/}
        <div className={'Filter_orders_input'}>
          <FormInput
            type="text"
            label={'Start date'}
            name={'start_date'}
            register={register}
            onFocus={(e: any) => (e.target.type = 'date')}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput
            type="text"
            label={'End date'}
            name={'end_date'}
            register={register}
            onFocus={(e: any) => {
              e.target.type = 'date';
            }}
          />
        </div>
      </div>

      {/* todo add Filter_orders_checkbox_button*/}
      <div className={'Filter_orders_checkbox_button'}>
        <label>
          {/* todo change register for manager*/}
          <input
            className={'Filter_orders_checkbox'}
            name={'manager'}
            type={'checkbox'}
            value={''}
            onClick={(e: any) =>
              e.target.checked
                ? (e.target.value = 'adminProfile.profile.name')
                : (e.target.value = '')
            }
          />
          My
        </label>
        <button className={'Filter_orders_button'} type={'reset'} onClick={resetForm}>
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
