import { FC } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ExelButton.css';

const ExelButton: FC = () => {
  const url = new URL(window.location.href);
  // отримую усі параметри з url у вигляді object
  const queryParams = Object.fromEntries(url.searchParams.entries());
  const downloadExcel = async () => {
    console.log(queryParams);
  };
  // const urlSearchParams = new URLSearchParams(window.location.search);
  //
  // const allParams: any = null;
  // console.log(allParams);
  // // @ts-ignore
  // for (const [key, value] of urlSearchParams.entries()) {
  //   // @ts-ignore
  //   allParams[key] = value;
  // }
  // const downloadExcel = async () => {
  //   const date = new Date();
  //   const fileName = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}.xls`;
  //
  //   const url = URL.createObjectURL(blob);
  //   const anchor = document.createElement('a');
  //   anchor.href = url;
  //   anchor.download = fileName;
  //   document.body.append(anchor);
  //   // anchor.style = 'display: none';
  //   anchor.click();
  //   anchor.remove();
  //
  //   URL.revokeObjectURL(url);
  //   console.log(allParams);
  // };
  return (
    <button onClick={downloadExcel} className={'Excel_button'}>
      <FontAwesomeIcon className={'Exel_btn_img'} icon={faFileExcel} style={{ color: '#ffffff' }} />
    </button>
  );
};

export { ExelButton };
