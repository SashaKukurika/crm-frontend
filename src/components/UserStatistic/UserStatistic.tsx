import { FC } from 'react';

import { IStatistic } from '../../interfaces';

import './UserStatistic.css';

interface IProps {
  statistic: IStatistic;
}

const UserStatistic: FC<IProps> = ({ statistic }) => {
  return (
    <div className={'User_statistic'}>
      <div className={'User_statistic_item'}>total: {statistic?.total ? statistic?.total : 0}</div>
      {statistic?.statuses.map((item, index) => (
        <div className={'User_statistic_item'} key={index}>
          {item.status}: {item.count}
        </div>
      ))}
    </div>
  );
};

export { UserStatistic };
