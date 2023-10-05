import { FC } from 'react';

interface IProps {
  sortByField: (field: string) => void;
}

const SortOrders: FC<IProps> = ({ sortByField }) => {
  return (
    // todo Orders_table_header???
    <div className={'Orders_table_row Orders_table_header'}>
      <div className={'Orders_table_cell'} onClick={() => sortByField('id')}>
        id
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('name')}>
        name
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('surname')}>
        surname
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('email')}>
        email
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('phone')}>
        phone
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('age')}>
        age
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('course')}>
        course
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('course_format')}>
        course_format
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('course_type')}>
        course_type
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('status')}>
        status
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('sum')}>
        sum
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('alreadyPaid')}>
        alreadyPaid
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('group')}>
        group
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('created_at')}>
        created_at
      </div>
      <div className={'Orders_table_cell'} onClick={() => sortByField('manager')}>
        manager
      </div>
    </div>
  );
};

export { SortOrders };
