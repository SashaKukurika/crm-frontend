import { FC } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FileSaver from 'file-saver';

import { IParams } from '../../interfaces';
import { orderService } from '../../services';

import './ExelButton.css';

const ExelButton: FC = () => {
  const downloadExcel = async () => {
    // дістаємо всі параметри з url
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    try {
      const { data } = await orderService.getExcel(params as any as IParams);

      // створюємо назву файла
      const date = new Date();
      const fileName = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}.xlsx`;

      // скачуємо за допомогою бібліотеки file-saver
      return FileSaver.saveAs(data, fileName);
    } catch (error) {
      console.error('Error loading Excel file', error);
    }
  };

  return (
    <button onClick={downloadExcel} className={'Excel_button'}>
      <FontAwesomeIcon className={'Exel_btn_img'} icon={faFileExcel} style={{ color: '#ffffff' }} />
    </button>
  );
};

export { ExelButton };
