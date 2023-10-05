import { FC, useState } from 'react';

import { IOrder } from '../../interfaces';

interface IProps {
  order: IOrder;
}

const Order: FC<IProps> = ({ order }) => {
  // const navigate = useNavigate();
  const {
    id,
    age,
    course,
    course_format,
    course_type,
    msg,
    email,
    name,
    sum,
    utm,
    phone,
    status,
    surname,
    created_at,
    alreadyPaid,
  } = order;

  const [tableActive, setTableActive] = useState(false);

  const [openModalForm, setOpenModalForm] = useState(false);

  const [openModalComments, setOpenModalComments] = useState(false);
  // todo import manager
  // const isButtonDisabled = manager !== null && adminProfile?.profile.name !== manager?.name;

  const formatDate = (date: Date) => {
    if (!date) {
      return 'null';
    }
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      className={`Orders_table_row  ${
        openModalForm || openModalComments || tableActive ? '' : 'Orders_table_row_hover'
      } ${tableActive ? 'Orders_table_row_active' : ''}`}
    >
      <div
        className={'Orders_table_cell'}
        onClick={() => setTableActive((prevState) => !prevState)}
      >
        {id}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {name ? name : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {surname ? surname : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {email ? email : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {phone ? phone : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {age ? age : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {course ? course : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {course_format ? course_format : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {course_type ? course_type : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {status ? status : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {sum ? sum : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {alreadyPaid ? alreadyPaid : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {/* todo group*/}
        {'group' ? 'group' : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {formatDate(created_at)}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {/* todo add manager*/}
        {/* {manager ? manager : 'null'}*/}
        null
      </div>
    </div>
  );
};

export { Order };
