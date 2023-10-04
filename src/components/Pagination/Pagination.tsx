import { FC } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Pagination.css';

const Pagination: FC = () => {
  return (
    <ul className={'Pagination'}>
      <li className={'Pagination_item'}>
        <FontAwesomeIcon
          className={'Pagination_arrow'}
          icon={faChevronLeft}
          style={{ color: '#ffffff' }}
        />
      </li>
      {/* {paginationRange.map((pageNumber, i) => {*/}
      {/*  if (pageNumber === DOTS) {*/}
      {/*    return (*/}
      {/*      <li key={i} className="Pagination_item.dots">*/}
      {/*        &#8230;*/}
      {/*      </li>*/}
      {/*    );*/}
      {/*  }*/}

      {/*  return (*/}
      {/*    <li*/}
      {/*      className={classnames('Pagination_item', {*/}
      {/*        selected: pageNumber === currentPage,*/}
      {/*      })}*/}
      {/*      onClick={() => onPageChange(pageNumber)}*/}
      {/*      key={i}*/}
      {/*    >*/}
      {/*      {pageNumber}*/}
      {/*    </li>*/}
      {/*  );*/}
      {/* })}*/}
      <li className={'Pagination_item'}>
        <FontAwesomeIcon
          className={'Pagination_arrow'}
          icon={faChevronRight}
          style={{ color: '#ffffff' }}
        />
      </li>
    </ul>
  );
};

export { Pagination };
