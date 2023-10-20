import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { CourseFormatEnum, CoursesEnum, CourseStatusEnum, CourseTypeEnum } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IOrder } from '../../interfaces';
import { groupActions, ordersActions } from '../../redux';
import { ISetState } from '../../types';
import { FormInput } from '../FormInput';
import { FormSelect } from '../FormSelect';

import './ClientForm.css';
interface IProps {
  order: IOrder;
  setOpenModalForm: ISetState<boolean>;
}

const ClientForm: FC<IProps> = ({ order, setOpenModalForm }) => {
  const {
    id,
    name,
    surname,
    email,
    phone,
    age,
    course,
    course_format,
    course_type,
    status,
    sum,
    alreadyPaid,
    group,
    // todo add manager for status: 'manager' === null ? 'In work' : status,
  } = order;

  const { groups } = useAppSelector((state) => state.groupReducer);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      age: age,
      course: course,
      course_format: course_format,
      course_type: course_type,
      status: 'manager' === null ? 'In work' : status,
      sum: sum,
      alreadyPaid: alreadyPaid,
      group: group ? group.name : '',
    },
    // todo add resolver
    // resolver: yupResolver(clientValidator),
  });

  const dispatch = useAppDispatch();

  const [groupInput, setGroupInput] = useState(false);

  const submit: SubmitHandler<IOrder> = async (data: IOrder) => {
    if (groupInput) {
      await dispatch(groupActions.create({ name: data.group.name }));
      setGroupInput((prev) => !prev);
      setValue('group', data.group.name);
    } else {
      const cleanedData = Object.fromEntries(
        Object.entries(data).filter(([, value]) => value !== '' && value !== null),
      );
      dispatch(ordersActions.updateById({ id, order: cleanedData }));
      // todo dont came data from back
    }
  };

  const changeGroupInput = () => {
    // e.preventDefault();
    setGroupInput(!groupInput);
    !groupInput ? setValue('group', '') : setValue('group', group ? group.name : '');
  };
  // todo add errors from form
  return (
    <form className={'Client_form'} onSubmit={handleSubmit(submit)}>
      <div className={'Client_form_inputs'}>
        {groupInput ? (
          <div className={'Client_form_item  Client_form_item_row'}>
            <FormInput
              id={'group'}
              type={'text'}
              name={'group'}
              label={'Group'}
              register={register}
              // error={errors.group}
            />
            <div className={'Client_form_input_buttons'}>
              <button className={'Client_form_input_button'} type={'submit'}>
                Add
              </button>
              <button className={'Client_form_input_button'} onClick={changeGroupInput}>
                Select
              </button>
            </div>
            {/* {error && <div>{error.name}</div>}*/}
          </div>
        ) : (
          <div className={'Client_form_item'}>
            <FormSelect
              id={'group'}
              name={'group'}
              label={'Group'}
              options={groups.map((group) => group)}
              register={register}
              defaultLabel={'all groups'}
            />

            <button className={'Client_form_input_button'} onClick={changeGroupInput}>
              Add group
            </button>
          </div>
        )}

        <div className={'Client_form_item'}>
          <FormSelect
            id={'status'}
            name={'status'}
            label={'Status'}
            options={Object.values(CourseStatusEnum)}
            register={register}
            defaultLabel={'all statuses'}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            id={'name'}
            type={'text'}
            name={'name'}
            label={'Name'}
            register={register}
            // error={errors.name}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            id={'sum'}
            type={'number'}
            name={'sum'}
            label={'Sum'}
            register={register}
            // error={errors.sum}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            id={'surname'}
            type={'text'}
            name={'surname'}
            label={'Surname'}
            register={register}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            id={'alreadyPaid'}
            type={'number'}
            name={'alreadyPaid'}
            label={'Already paid'}
            register={register}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            id={'email'}
            type={'text'}
            name={'email'}
            label={'Email'}
            register={register}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormSelect
            id={'course'}
            name={'course'}
            label={'Course'}
            register={register}
            defaultLabel={'all courses'}
            options={Object.values(CoursesEnum)}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput id={phone} type={'text'} name={'phone'} label={'Phone'} register={register} />
        </div>

        <div className={'Client_form_item'}>
          <FormSelect
            id={'course_format'}
            name={'course_format'}
            label={'Course format'}
            register={register}
            options={Object.values(CourseFormatEnum)}
            defaultLabel={'all formats'}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            type={'number'}
            name={'age'}
            id={'age'}
            label={'Age'}
            register={register}
            // error={errors.age}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormSelect
            id={'course_type'}
            name={'course_type'}
            label={'Course type'}
            register={register}
            options={Object.values(CourseTypeEnum)}
            defaultLabel={'all types'}
          />
        </div>
      </div>

      <div className={'Client_form_btns'}>
        <button
          className={'Client_form_btn'}
          type={'button'}
          onClick={() => setOpenModalForm(false)}
        >
          Close
        </button>
        <button className={'Client_form_btn'} type={'submit'}>
          Submit
        </button>
      </div>
    </form>
  );
};

export { ClientForm };
