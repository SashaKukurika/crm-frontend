import { FC } from 'react';

import { useAppSelector } from '../../hooks';

import './OrdersStatistic.css';

const OrdersStatistic: FC = () => {
  const { ordersStatistic } = useAppSelector((state) => state.ordersReducer);

  return (
    <div className={'Orders_statistic'}>
      <div>Total: {ordersStatistic?.total}</div>
      {ordersStatistic?.statuses.map((item, index) => {
        return (
          <div key={index}>
            {item.status}: {item.count}
          </div>
        );
      })}
    </div>
  );
};

export { OrdersStatistic };
