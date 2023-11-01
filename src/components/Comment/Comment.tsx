import { FC } from 'react';

import { formatDate } from '../../helpers/formatDate.helper';
import { IComment } from '../../interfaces';

import './Comment.css';

interface IProps {
  item: IComment;
}

const Comment: FC<IProps> = ({ item }) => {
  const checkToLongText = (text: string): string => {
    if (text.length > 60) {
      return text.slice(0, 60) + '...';
    }
    return text;
  };
  return (
    <div className={'Comment'}>
      <div className={'Comment_text'}>{checkToLongText(item.text)}</div>
      <div className={'Comment_addition_info'}>
        <div className={'Comment_manager'}>
          {item.user.name} {item.user.surname}
        </div>
        <div className={'Comment_date'}>{formatDate(item.created_at)}</div>
      </div>
    </div>
  );
};

export { Comment };
