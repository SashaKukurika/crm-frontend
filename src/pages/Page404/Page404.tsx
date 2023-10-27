import { FC } from 'react';

import './Page404.css';

const Page404: FC = () => {
  return (
    <div className={'Page404'}>
      <img
        className={'Page404_img'}
        src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg"
        alt="404"
      />
    </div>
  );
};

export { Page404 };
