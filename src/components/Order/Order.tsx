import { FC, useState } from 'react';

import { IOrder } from '../../interfaces';
import { ClientForm } from '../ClientForm';
import { Comment } from '../Comment';
import { CommentForm } from '../CommentForm';
import { Modal } from '../Modal';
import { ModalComments } from '../ModalComments';

interface IProps {
  order: IOrder;
}

const Order: FC<IProps> = ({ order }) => {
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
    group,
    comments,
  } = order;

  const [tableActive, setTableActive] = useState(false);

  const [openModalForm, setOpenModalForm] = useState(false);

  const [openModalComments, setOpenModalComments] = useState(false);
  // todo import manager
  // const isButtonDisabled = manager !== null && adminProfile?.profile.name === manager?.name;
  const isButtonDisabled = false;
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
        {group?.name ? group.name : 'null'}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {formatDate(created_at)}
      </div>

      <div className={'Orders_table_cell'} onClick={() => setTableActive(!tableActive)}>
        {/* todo add manager*/}
        {/* {manager ? manager : 'null'}*/}
        manager
      </div>

      <div className={`Orders_table_details ${tableActive ? 'Orders_table_details_visible' : ''}`}>
        <div className={'Orders_table_details_left'}>
          <div>Message: {msg ? msg : 'null'}</div>
          <div>UTM: {utm ? utm : 'null'}</div>
        </div>

        <div className={'Orders_table_details_right'}>
          <div className={'Orders_table_content'}>
            {comments.length > 0 && (
              <div onClick={() => setOpenModalComments(true)} className={'Orders_table_comments'}>
                {comments.slice(0, 3).map((item) => (
                  <Comment key={item.id} item={item} formatDate={formatDate} />
                ))}
              </div>
            )}

            <CommentForm
              id={id}
              isButtonDisabled={isButtonDisabled}
              adminProfile={'adminProfile'}
            />
          </div>

          <button
            onClick={() => setOpenModalForm(true)}
            className={`Orders_table_button ${
              isButtonDisabled ? 'Orders_table_button_disabled' : ''
            }`}
            disabled={isButtonDisabled}
          >
            Edit
          </button>

          <Modal closeModal={setOpenModalComments} openModal={openModalComments}>
            <ModalComments comments={comments} setOpenModalComments={setOpenModalComments} />
          </Modal>

          <Modal closeModal={setOpenModalForm} openModal={openModalForm}>
            <ClientForm order={order} setOpenModalForm={setOpenModalForm} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export { Order };
