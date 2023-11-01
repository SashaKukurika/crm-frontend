import { FC } from 'react';
import classnames from 'classnames';

import { DOTS, usePagination } from '../../hooks';

import './Pagination.css';

interface IProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

const Pagination: FC<IProps> = ({
  totalCount,
  siblingCount = 2,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  const className = 'Pagination';
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classnames('Pagination', { [className]: className })}>
      {/* Left navigation arrow */}
      <li
        className={classnames('Pagination_item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="Pagination_arrow">{`<`}</div>
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li className="Pagination_item Pagination_item_dots" key={index}>
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            className={classnames('Pagination_item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(+pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('Pagination_item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="Pagination_arrow">{`>`}</div>
      </li>
    </ul>
  );
};

export { Pagination };
