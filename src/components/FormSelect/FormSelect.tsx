import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IOrder } from '../../interfaces';
import { IGroup } from '../../interfaces/group.interface';

import './FormSelect.css';

interface IProps {
  register: UseFormRegister<IOrder | any>;
  label: string;
  name: keyof IOrder;
  options: string[] | IGroup[];
  defaultLabel: string;
  id?: string;
  value?: string;
}

const FormSelect: FC<IProps> = ({
  id,
  value,
  register,
  name,
  options,
  defaultLabel,
  ...selectProps
}) => {
  return (
    <div className="Form_select">
      <select
        value={value}
        className={'Form_select_select'}
        name={name}
        id={id}
        {...register(name)}
        {...selectProps}
      >
        <option value={''}>{defaultLabel}</option>
        {options.map((option, index) =>
          typeof option === 'object' ? (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ) : (
            <option key={index} value={option}>
              {option}
            </option>
          ),
        )}
      </select>
    </div>
  );
};

export { FormSelect };
