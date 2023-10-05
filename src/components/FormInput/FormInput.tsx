import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IOrder } from '../../interfaces';

import './FormInput.css';

interface IProps {
  register: UseFormRegister<IOrder>;
  label: string;
  name: any;
  type: string;
  onFocus?: any;
}

const FormInput: FC<IProps> = ({ register, label, name, ...inputProps }) => {
  return (
    // todo take params from url and put to input
    <div className="Form_input">
      <input
        className={'Form_input_input'}
        placeholder={label}
        {...register(name)}
        {...inputProps}
        // onChange={(e) => {
        //   // todo check what all this is doing
        //   if (name.split('_').slice(-1)[0] === 'date') {
        //     const items = e.target.value.split('-');
        //     console.log(e.target.value);
        //     const yearItem = items[0];
        //     console.log(yearItem);
        //     const year = yearItem?.substring(0, 4);
        //     console.log(year);
        //     if (yearItem.length > 4) {
        //       items.splice(0, 1);
        //       e.target.value = [year, ...items].join('-');
        //     }
        //   }
        // }}
      />

      {/* {error && <span>{error.message}</span>}*/}
    </div>
  );
};

export { FormInput };
