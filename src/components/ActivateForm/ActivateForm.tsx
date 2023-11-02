import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { usersActions } from '../../redux';
import { activateValidator } from '../../validators';
import { FormInput } from '../FormInput';

import './ActivateForm.css';

const ActivateForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { activateToken } = useParams();
  const { error } = useAppSelector((state) => state.usersReducer);

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm({
    mode: 'all',
    resolver: joiResolver(activateValidator),
  });

  const submit = async (data: any) => {
    // dispatch(usersActions.activateUser({ activateToken, password: data.password }));
    navigate('/login');
  };

  const linkIsNotRelevant = error && error.details === 'Token invalid or expired';
  return (
    <div className={'Activate_form'}>
      {linkIsNotRelevant ? (
        <div className={'Activate_form_error'}>
          <div>The link is not valid, please contact the administrator to solve the problem</div>
          <button onClick={() => navigate('/login')} className={'Activate_form_button'}>
            Back to login
          </button>
        </div>
      ) : (
        <form className={'Activate_form_form'} onSubmit={handleSubmit(submit)}>
          Password
          <FormInput
            label={'Password'}
            id={'password'}
            name={'password'}
            register={register}
            error={errors.password}
            type={'text'}
          />
          Confirm Password
          <FormInput
            label={'Confirm Password'}
            id={'confirm-Password'}
            name={'confirmPassword'}
            register={register}
            error={errors.confirmPassword}
            type={'text'}
          />
          <button className={'Activate_form_button'} disabled={!isValid} type="submit">
            Activate
          </button>
        </form>
      )}
    </div>
  );
};

export { ActivateForm };
