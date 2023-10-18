import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../hooks';
import { ordersActions } from '../../redux';
import { FormInput } from '../FormInput';

import './CommentForm.css';

interface IProps {
  id: number;
  isButtonDisabled: boolean;
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
        label={'Comment'}
        name={'text'}
        register={register}
        error={errors.comment}
        type={'text'}
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
