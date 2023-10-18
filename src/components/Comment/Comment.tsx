import { FC } from 'react';

import { IComment } from '../../interfaces/comment.interface';

import './Comment.css';

interface IProps {
  item: IComment;
  formatDate: (date: Date) => string;
}

const Comment: FC<IProps> = ({ item, formatDate }) => {
  return (
    <div className={'Comment'}>
      <div className={'Comment_text'}>{item.text}</div>

      <div className={'Comment_addition_info'}>
        <div className={'Comment_manager'}>
          {'item.manager.name'} {'item.manager.surname'}
        </div>
        <div className={'Comment_date'}>{formatDate(item.created_at)}</div>
      </div>
    </div>
  );
};

export { Comment };
