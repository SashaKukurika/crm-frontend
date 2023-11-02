import { FC, useState } from 'react';

import { formatDate } from '../../helpers/formatDate.helper';
import { useAppDispatch } from '../../hooks';
import { IUser } from '../../interfaces';
import { usersActions } from '../../redux';
import { userService } from '../../services';
import { UserStatistic } from '../UserStatistic';

import './User.css';

interface IProps {
  user: IUser;
}

const User: FC<IProps> = ({
  user: { id, email, last_login, name, surname, is_active, statistic },
}) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState(false);

  const activateUser = async () => {
    const { data } = await userService.getActivateToken(id);

    // Копіюємо посилання в буфер обміну
    await navigator.clipboard.writeText(`${window.location.origin}/activate/${data}`);

    setMessage((prevState) => !prevState);
    setTimeout(() => setMessage((prevState) => !prevState), 1500);
  };
  const banUser = () => {
    dispatch(usersActions.ban({ id }));
  };

  const unbanUser = () => {
    dispatch(usersActions.unban({ id }));
  };
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

      <UserStatistic statistic={statistic} />

      <div className={'User_buttons'}>
        {!is_active && (
          <button className={'User_button'} onClick={activateUser}>
            activate
          </button>
        )}

        {is_active && (
          <button className={'User_button'} onClick={activateUser}>
            recovery password
          </button>
        )}

        <button
          className={`User_button ${!is_active ? 'User_button_disabled' : ''}`}
          onClick={banUser}
        >
          ban
        </button>

        <button
          className={`User_button ${is_active ? 'User_button_disabled' : ''}`}
          onClick={unbanUser}
        >
          unban
        </button>
        {message && <div className={'Link'}>Link copied to clipboard</div>}
      </div>
    </div>
  );
};

export { User };
