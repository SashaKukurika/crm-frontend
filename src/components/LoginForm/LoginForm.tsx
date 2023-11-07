import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { IAuth } from '../../interfaces';
import { authActions } from '../../redux';
import { loginValidator } from '../../validators';
import { FormInput } from '../FormInput';

import './LoginForm.css';

const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAuth>({
    mode: 'all',
    resolver: joiResolver(loginValidator),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.authReducer);

  const submit: SubmitHandler<IAuth> = async (user) => {
    const {
      meta: { requestStatus },
    } = await dispatch(authActions.login(user));
    if (requestStatus === 'fulfilled') {
      navigate('/orders');
    }
  };

  return (
    <form className={'Login_form'} onSubmit={handleSubmit(submit)}>
      Email
      <FormInput
        type={'text'}
        name={'email'}
        label={'Email'}
        register={register}
        error={errors.email}
      />
      Password
      <FormInput
        type={'password'}
        name={'password'}
        label={'Password'}
        register={register}
        error={errors.password}
      />
      {error && (
        <div className={'Login_form_error'}>
          {error?.message ? error?.message : 'Something went wrong'}
        </div>
      )}
      <button className={'Login_form_btn button'}>{loading ? 'Loading...' : 'Login'}</button>
    </form>
  );
};

export { LoginForm };
