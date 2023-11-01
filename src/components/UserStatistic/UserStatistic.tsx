import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { usersActions } from '../../redux';

import './UserStatistic.css';

interface IProps {
  id: number;
}

const UserStatistic: FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(usersActions.getStatistic({ id }));
  }, []);
  const { userStatistic } = useAppSelector((state) => state.usersReducer);
  console.log(userStatistic);
  return (
    <div className={'User_statistic'}>
      <div className={'User_statistic_item'}>total: {userStatistic?.total}</div>
      {userStatistic &&
        userStatistic?.statuses.map((item, index) => (
          <div className={'User_statistic_item'} key={index}>
            {item.status}: {item.count}
          </div>
        ))}
    </div>
  );
};

export { UserStatistic };
