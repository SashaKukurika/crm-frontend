import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { count1Actions, count2Actions } from '../redux';

const MainLayout: FC = () => {
  const { count1 } = useSelector((state: { count1: { count1: number } }) => state.count1);
  const { count2 } = useSelector((state: { count2: { count2: number } }) => state.count2);
  const dispatch = useDispatch();

  return (
    <>
      <div>Count1: {count1}</div>
      <button onClick={() => dispatch(count1Actions.inc())}>inc</button>
      <button onClick={() => dispatch(count1Actions.dec())}>dec</button>
      <button onClick={() => dispatch(count1Actions.reset())}>reset</button>
      <div>count2: {count2}</div>
      <button onClick={() => dispatch(count2Actions.inc())}>inc</button>
      <button onClick={() => dispatch(count2Actions.dec())}>dec</button>
      <button onClick={() => dispatch(count2Actions.reset())}>reset</button>
      <Outlet />
    </>
  );
};

export { MainLayout };
