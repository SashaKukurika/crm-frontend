import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IOrder } from '../../interfaces';

import './FormSelect.css';

interface IProps {
  register: UseFormRegister<IOrder>;
  label: string;
  name: keyof IOrder;
  options: string[];
  defaultLabel: string;
}

const FormSelect: FC<IProps> = ({ register, name, options, defaultLabel, ...selectProps }) => {
  return (
    // todo take params from url and put to input
    <div className="Form_select">
      <select className={'Form_select_select'} name={name} {...register(name)} {...selectProps}>
        <option value={''}>{defaultLabel}</option>
        {options.map((value, index) => (
          <option key={index}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export { FormSelect };
