import { FC } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FileSaver from 'file-saver';

import { orderService } from '../../services';

import './ExelButton.css';

const ExelButton: FC = () => {
  const url = new URL(window.location.href);
  // отримую усі параметри з url у вигляді object
  const queryParams = Object.fromEntries(url.searchParams.entries());
  const downloadExcel = async () => {
    try {
      // await fetch('http://localhost:5000/orders/excel')
      //   .then((value) => {
      //     return value.blob();
      //   })
      //   .then((value) => FileSaver.saveAs(value, 'blob.xlsx'));
      const { data } = await orderService.getExcel();
      const date = new Date();
      // todo check for headers and fali-saver
      const fileName = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}.xlsx`;
      // Створюємо посилання на файл і запускаємо завантаження
      const url = window.URL.createObjectURL(
        new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        }),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
