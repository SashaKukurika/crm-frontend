import { FC, useMemo, useState } from 'react';

import { ISetState } from '../../types';
import { ModalComment } from '../ModalComment';
import { Pagination } from '../Pagination';

import './ModalComments.css';

interface IProps {
  comments: string;
  setOpenModalComments: ISetState<boolean>;
}

const PageSize = 5;
const ModalComments: FC<IProps> = ({ comments, setOpenModalComments }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentComments = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return comments.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className={'Modal_comments'}>
      <div>
        {['currentComments'].map((item, index) => {
          return <ModalComment key={index} item={item} />;
        })}
      </div>

      <div className={'Modal_comments_controls'}>
        <div className={'Modal_comments_pagination'}>
          <Pagination
            // currentPage={currentPage}
            pageCount={2}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
        <button className={'Modal_comments_button'} onClick={() => setOpenModalComments(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export { ModalComments };
