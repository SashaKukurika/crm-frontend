import { FC } from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

import './Spinner.css';

type LoadingType =
  | 'Ball'
  | 'Blocks'
  | 'Cube'
  | 'Discuss'
  | 'Disk'
  | 'DualBall'
  | 'Eater'
  | 'Gear'
  | 'Infinity'
  | 'Interwind'
  | 'Pulse'
  | 'Ripple'
  | 'Rolling'
  | 'Spinner'
  | 'Wedges';
interface IProps {
  type?: LoadingType;
  color?: string;
  size?: string;
}

const Spinner: FC<IProps> = ({ type = 'Infinity', color = '#76b852', size = '35%' }) => {
  return (
    <div className={'Spinner'}>
      <LoadingSpinnerComponent type={type} color={color} size={size} />
    </div>
  );
};

export { Spinner };
