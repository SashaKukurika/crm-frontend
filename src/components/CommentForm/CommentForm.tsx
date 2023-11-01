import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch } from '../../hooks';
import { ordersActions } from '../../redux';
import { commentValidator } from '../../validators';
import { FormInput } from '../FormInput';

import './CommentForm.css';

interface IProps {
  id: number;
  isButtonDisabled: boolean;
  // todo add type for userprofile
  adminProfile: any;
}

const CommentForm: FC<IProps> = ({ id, isButtonDisabled, adminProfile }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'all',
    resolver: joiResolver(commentValidator),
  });

  const dispatch = useAppDispatch();

  const submit = async (data: any) => {
    const commentInfo = {
      ...data,
      // todo add id from userprofile
      userId: 1,
    };
    dispatch(ordersActions.addComment({ id, commentInfo }));
    reset();
  };
  return (
    <form className={'Comment_form'} onSubmit={handleSubmit(submit)}>
      <FormInput
        id={'comment'}
        label={'Comment'}
        name={'text'}
        type={'text'}
        register={register}
        error={errors.text}
      />

      <button
        className={`Comment_form_button ${
          isButtonDisabled || !isValid ? 'Comment_form_button_disabled' : ''
        }`}
        type={'submit'}
        disabled={isButtonDisabled || !isValid}
      >
        submit
      </button>
    </form>
  );
};

export { CommentForm };
