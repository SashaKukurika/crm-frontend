import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { count2Actions } from '../redux';

const MainLayout: FC = () => {
  // const { count1 } = useSelector((state: { count1: { count1: number } }) => state.count1);
  const { count2 } = useSelector((state: { count2: { count2: number } }) => state.count2);
  const dispatch = useDispatch();

  return (
    <>
      <div>count2: {count2}</div>
      <button onClick={() => dispatch(count2Actions.inc())}>inc</button>
      <button onClick={() => dispatch(count2Actions.dec())}>dec</button>
      <button onClick={() => dispatch(count2Actions.reset())}>reset</button>
      <Outlet />
    </>
  );
};

export { MainLayout };
