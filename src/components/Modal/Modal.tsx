import React, { FC, ReactNode } from 'react';

import './Modal.css';

interface IProps {
  openModal: boolean;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ openModal, children }) => {
  if (!openModal) return null;

  return (
    <div className={'Overlay'}>
      <div className={'Modal_children'} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export { Modal };
