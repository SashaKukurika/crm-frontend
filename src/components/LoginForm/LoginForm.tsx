import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginValidator } from '../../validators';
import { FormInput } from '../FormInput';

import './LoginForm.css';

const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm({
    mode: 'all',
    resolver: joiResolver(loginValidator),
  });

  const dispatch = useAppDispatch();

  // const { loading, error } = useAppSelector((state) => state.authReducer);

  const submit = (user: any) => {
    console.log(user);
    // dispatch(authActions.login(user));
  };

  // const errorMsg =
  //   error?.detail === 'No active account found with the given credentials'
  //     ? 'Wrong email or password'
  //     : 'Something went wrong';

  return (
    <form className={'Login_form'} onSubmit={handleSubmit(submit)}>
      <FormInput
        type={'text'}
        name={'email'}
        label={'Email'}
        register={register}
        error={errors.email}
      />
      <FormInput
        type={'password'}
        name={'password'}
        label={'Password'}
        register={register}
        error={errors.password}
      />
      {/* {error && <div className={'Login_form_error'}>{errorMsg}</div>}*/}

      <button className={'Login_form_btn button'}>{false ? 'Loading...' : 'Login'}</button>
    </form>
  );
};

export { LoginForm };
