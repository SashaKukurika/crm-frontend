import { FC } from 'react';

import { formatDate } from '../../helpers/formatDate.helper';
import { IUser } from '../../interfaces';
import { UserStatistic } from '../UserStatistic';

import './User.css';

interface IProps {
  user: IUser;
}

const User: FC<IProps> = ({ user: { id, email, last_login, name, surname, is_active } }) => {
  return (
    <div className={'User'}>
      <div className={'User_info'}>
        <div>id: {id}</div>
        <div>email: {email}</div>
        <div>name: {name}</div>
        <div>surname: {surname}</div>
        <div>is_active: {is_active.toString()}</div>
        <div>last_login: {last_login ? formatDate(last_login) : 'null'}</div>
      </div>

      <UserStatistic id={id} />
    </div>
  );
};

export { User };
