import { FC } from 'react';
import { useForm } from 'react-hook-form';

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
    formState: { isValid },
  } = useForm({
    mode: 'all',
  });

  // const dispatch = useAppDispatch();

  const submit = async (data: any) => {
    const dataToSend = {
      ...data,
      manager: {
        name: adminProfile?.profile.name,
        surname: adminProfile?.profile.surname,
      },
    };
    // dispatch(ordersActions.addOrderComment({ id, data: dataToSend }));
    console.log(dataToSend);
    reset();
  };

  return (
    <form className={'Comment_form'} onSubmit={handleSubmit(submit)}>
      <FormInput label={'Comment'} name={'comment'} register={register} type={'text'} />

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
