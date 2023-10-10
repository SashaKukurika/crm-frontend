import React, { FC, ReactNode } from 'react';

import { ISetState } from '../../types';

interface IProps {
  openModal: boolean;
  closeModal: ISetState<boolean>;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ openModal, closeModal, children }) => {
  if (!openModal) return null;

  return (
    <div onClick={() => closeModal(false)} className={'Overlay'}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export { Modal };
