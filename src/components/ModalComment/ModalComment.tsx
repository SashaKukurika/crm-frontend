import { FC } from 'react';

import { IComment } from '../../interfaces/comment.interface';

import './ModalComment.css';

interface IProps {
  item: IComment;
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
        <div className={'Modal_comment_text'}>{item.text}</div>

        <div className={'Modal_comment_addition_info'}>
          <div className={'Modal_comment_manager'}>
            {item.user.name} {item.user.surname}
          </div>
          <div className={'Modal_comment_date'}>{formatDate(item.created_at)}</div>
        </div>
      </div>
    </div>
  );
};

export { ModalComment };
