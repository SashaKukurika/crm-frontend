import { FC } from 'react';

import './ModalComment.css';

interface IProps {
  item: any;
}

const ModalComment: FC<IProps> = ({ item }) => {
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
    <div className={'Modal_comment'}>
      <div className={'Modal_comment_content'}>
        <div className={'Modal_comment_text'}>{'item.comment'}</div>

        <div className={'Modal_comment_addition_info'}>
          <div className={'Modal_comment_manager'}>
            {'item.manager.name'} {'item.manager.surname'}
          </div>
          <div className={'Modal_comment_date'}>{'formatDate(item.created_at)'}</div>
        </div>
      </div>
    </div>
  );
};

export { ModalComment };
