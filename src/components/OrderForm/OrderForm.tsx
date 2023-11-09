import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CourseFormatEnum, CoursesEnum, CourseStatusEnum, CourseTypeEnum } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IOrder } from '../../interfaces';
import { groupActions } from '../../redux';
import { FormInput } from '../FormInput';
import { FormSelect } from '../FormSelect';

import './OrderForm.css';

interface IProps {
  setParams: (e: any) => void;
  query: URLSearchParams;
}

const OrderForm: FC<IProps> = ({ setParams, query }) => {
  const dispatch = useAppDispatch();
  const { register, reset } = useForm<IOrder>({
    mode: 'all',
  });

  const { me } = useAppSelector((state) => state.authReducer);
  const { groups } = useAppSelector((state) => state.groupReducer);

  useEffect(() => {
    dispatch(groupActions.getAll());
  }, [dispatch]);

  const resetForm = () => {
    reset();
    setParams({ target: { name: 'reset', value: 'reset' } });
  };

  return (
    <form className={'Filter_orders'} onChange={setParams}>
      <div className={'Filter_orders_inputs'}>
        <div className={'Filter_orders_input'}>
          <FormInput
            type={'text'}
            label={'Name'}
            name={'name'}
            register={register}
            value={query.get('name') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput
            type={'text'}
            label={'Surname'}
            name={'surname'}
            register={register}
            value={query.get('surname') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput
            type={'text'}
            label={'Email'}
            name={'email'}
            register={register}
            value={query.get('email') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput
            type={'text'}
            label={'Phone'}
            name={'phone'}
            register={register}
            value={query.get('phone') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput
            type={'number'}
            label={'Age'}
            name={'age'}
            register={register}
            value={query.get('age') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Course'}
            name={'course'}
            register={register}
            options={Object.values(CoursesEnum)}
            defaultLabel={'all courses'}
            value={query.get('course') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Course format'}
            name={'course_format'}
            register={register}
            options={Object.values(CourseFormatEnum)}
            defaultLabel={'all formats'}
            value={query.get('course_format') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Course type'}
            name={'course_type'}
            register={register}
            options={Object.values(CourseTypeEnum)}
            defaultLabel={'all types'}
            value={query.get('course_type') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Status'}
            name={'status'}
            register={register}
            options={Object.values(CourseStatusEnum)}
            defaultLabel={'all statuses'}
            value={query.get('status') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormSelect
            label={'Group'}
            name={'group'}
            register={register}
            options={groups.map((group) => group)}
            defaultLabel={'all groups'}
            value={query.get('group') || ''}
          />
        </div>

        <div className={'Filter_orders_input'}>
          <FormInput
            type="text"
            label={'Start date'}
            name={'start_date'}
            register={register}
            onFocus={(e: any) => (e.target.type = 'date')}
            value={query.get('start_date') || ''}
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
            value={query.get('end_date') || ''}
          />
        </div>
      </div>

      <div className={'Filter_orders_checkbox_button'}>
        <label>
          <input
            className={'Filter_orders_checkbox'}
            name={'user'}
            type={'checkbox'}
            value={''}
            onClick={(e: any) =>
              e.target.checked ? (e.target.value = me?.name) : (e.target.value = '')
            }
            {...register('user')}
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
  );
};

export { OrderForm };
