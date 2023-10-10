import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { IOrder } from '../../interfaces';
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
      // group: 'group' ? 'group.id' : '',
    },
    // resolver: yupResolver(clientValidator),
  });

  const dispatch = useAppDispatch();

  const [groupInput, setGroupInput] = useState(true);

  const submit = async (data: any) => {
    // if (groupInput) {
    //   const { payload, error: errorRes } = await dispatch(groupsActions.createGroup(data.group));
    //   if (errorRes) {
    //     await new Promise((resolve) => setTimeout(resolve, 2000));
    //     dispatch(groupsActions.clearError());
    //   } else {
    //     setGroupInput((prev) => !prev);
    //     setValue('group', payload.id);
    //   }
    // } else {
    //   const cleanedData = Object.fromEntries(
    //     Object.entries(data).filter(([key, value]) => value !== ''),
    //   );
    //   dispatch(ordersActions.patchOrder({ id, data: cleanedData }));
    // }
    console.log(data);
  };

  const changeGroupInput = (e: any) => {
    // e.preventDefault();
    // setGroupInput(!groupInput);
    // !groupInput ? setValue('group', '') : setValue('group', 'group' ? 'group.id' : '');
    console.log(e);
  };
  return (
    <form className={'Client_form'} onSubmit={handleSubmit(submit)}>
      <div className={'Client_form_inputs'}>
        {groupInput ? (
          <div className={'Client_form_item  Client_form_item_row'}>
            <FormInput
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
            name={'status'}
            label={'Status'}
            options={['In work', 'New', 'Agree', 'Disagree', 'Dubbing']}
            register={register}
            defaultLabel={'all statuses'}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            type={'text'}
            name={'name'}
            label={'Name'}
            register={register}
            // error={errors.name}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            type={'number'}
            name={'sum'}
            label={'Sum'}
            register={register}
            // error={errors.sum}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput type={'text'} name={'surname'} label={'Surname'} register={register} />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            type={'number'}
            name={'alreadyPaid'}
            label={'Already paid'}
            register={register}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput type={'text'} name={'email'} label={'Email'} register={register} />
        </div>

        <div className={'Client_form_item'}>
          <FormSelect
            name={'course'}
            label={'Course'}
            register={register}
            defaultLabel={'all courses'}
            options={['FS', 'QACX', 'JCX', 'JSCX', 'FE', 'PCX']}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput type={'number'} name={'phone'} label={'Phone'} register={register} />
        </div>

        <div className={'Client_form_item'}>
          <FormSelect
            name={'course_format'}
            label={'Course format'}
            register={register}
            defaultLabel={'all formats'}
            options={['static', 'online']}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormInput
            type={'number'}
            name={'age'}
            label={'Age'}
            register={register}
            // error={errors.age}
          />
        </div>

        <div className={'Client_form_item'}>
          <FormSelect
            name={'course_type'}
            label={'Course type'}
            register={register}
            defaultLabel={'all types'}
            options={['pro', 'minimal', 'premium', 'incubator', 'vip']}
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
