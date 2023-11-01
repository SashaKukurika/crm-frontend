import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch } from '../../hooks';
import { IUser } from '../../interfaces';
import { usersActions } from '../../redux';
import { ISetState } from '../../types';
import { createUserValidator } from '../../validators';
import { FormInput } from '../FormInput';

import './CreateUserForm.css';

interface IProps {
  setOpenCreateUser: ISetState<boolean>;
}

const CreateUserForm: FC<IProps> = ({ setOpenCreateUser }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: joiResolver(createUserValidator),
  });

  const dispatch = useAppDispatch();

  const submit = (data: Partial<IUser>) => {
    dispatch(usersActions.create(data));
    setOpenCreateUser(false);
  };

  return (
    <form className={'Create_user_form'} onSubmit={handleSubmit(submit)}>
      <FormInput
        label={'Email'}
        id={'email'}
        name={'email'}
        register={register}
        error={errors.email}
        type={'text'}
      />

      <FormInput
        label={'Name'}
        id={'name'}
        name={'name'}
        register={register}
        error={errors.name}
        type={'text'}
      />

      <FormInput
        label={'Surname'}
        id={'surname'}
        name={'surname'}
        register={register}
        error={errors.surname}
        type={'text'}
      />

      <div className={'Create_user_form_buttons'}>
        <button
          className={'Create_user_form_button'}
          type="button"
          onClick={() => setOpenCreateUser(false)}
        >
          Cancel
        </button>
        <button className={'Create_user_form_button'} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export { CreateUserForm };
