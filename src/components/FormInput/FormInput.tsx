import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IOrder } from '../../interfaces';

import './FormInput.css';

interface IProps {
  register: UseFormRegister<IOrder | any>;
  label: string;
  name: any;
  type: string;
  onFocus?: any;
  id?: string;
  value?: string;
}

const FormInput: FC<IProps> = ({ id, value, register, label, name, ...inputProps }) => {
  return (
    // todo take params from url and put to input
    <div className="Form_input">
      <input
        className={'Form_input_input'}
        id={id}
        placeholder={label}
        value={value}
        {...register(name)}
        {...inputProps}
      />

      {/* {error && <span>{error.message}</span>}*/}
    </div>
  );
};

export { FormInput };
