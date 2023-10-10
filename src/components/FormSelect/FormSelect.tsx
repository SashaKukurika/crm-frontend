import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import { IOrder } from '../../interfaces';
import { IGroup } from '../../interfaces/group.interface';

import './FormSelect.css';

interface IProps {
  register: UseFormRegister<IOrder | any>;
  label: string;
  name: keyof IOrder;
  options: string[] | IGroup[];
  defaultLabel: string;
}

const FormSelect: FC<IProps> = ({ register, name, options, defaultLabel, ...selectProps }) => {
  const [query] = useSearchParams();
  return (
    <div className="Form_select">
      <select
        value={query.get(name) || ''}
        className={'Form_select_select'}
        name={name}
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
