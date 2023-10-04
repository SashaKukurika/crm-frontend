import { FC } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ExelButton.css';

const ExelButton: FC = () => {
  const downloadExcel = async () => {
    // const { data } = await orderService.getExel();
    console.log('downloadExcel');
  };
  return (
    <button onClick={downloadExcel} className={'Excel_button'}>
      <FontAwesomeIcon className={'Exel_btn_img'} icon={faFileExcel} style={{ color: '#ffffff' }} />
    </button>
  );
};

export { ExelButton };
