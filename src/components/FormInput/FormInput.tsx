import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import { IOrder } from '../../interfaces';

import './FormInput.css';

interface IProps {
  register: UseFormRegister<IOrder | any>;
  label: string;
  name: any;
  type: string;
  onFocus?: any;
}

const FormInput: FC<IProps> = ({ register, label, name, ...inputProps }) => {
  const [query] = useSearchParams();
  return (
    // todo take params from url and put to input
    <div className="Form_input">
      <input
        className={'Form_input_input'}
        placeholder={label}
        value={query.get(name) || ''}
        {...register(name)}
        {...inputProps}
      />

      {/* {error && <span>{error.message}</span>}*/}
    </div>
  );
};

export { FormInput };
