import { FC } from 'react';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';

import { IOrder } from '../../interfaces';

import './FormInput.css';

interface IProps {
  register: UseFormRegister<IOrder | any>;
  label: string;
  name: string;
  type: string;
  onFocus?: any;
  id?: string;
  value?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | any;
}

const FormInput: FC<IProps> = ({
  id,
  value,
  register,
  type,
  error,
  label,
  name,
  ...inputProps
}) => {
  return (
    <div className="Form_input">
      <input
        className={`Form_input_input  ${error ? 'Form_input_input_red' : ''}`}
        id={id}
        placeholder={label}
        type={type}
        value={value}
        {...register(name, { valueAsNumber: type === 'number' })}
        {...inputProps}
      />

      {error && <span className={'Form_input_error'}>{error.message}</span>}
    </div>
  );
};

export { FormInput };
