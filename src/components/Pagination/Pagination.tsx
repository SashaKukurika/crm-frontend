import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { SetURLSearchParams } from 'react-router-dom';

import './Pagination.css';

interface IProps {
  setQuery: SetURLSearchParams;
  query: URLSearchParams;
  pageCount: number;
}

const Pagination: FC<IProps> = ({ setQuery, query, pageCount }) => {
  const handlePageClick = (selectedPage: { selected: number }) => {
    const page = 1 + selectedPage.selected;
    setQuery((value) => {
      value.set('page', page.toString());
      return value;
    });
  };

  return (
    <ReactPaginate
      pageCount={pageCount} // Загальна кількість сторінок
      pageRangeDisplayed={7} // Кількість відображуваних сторінок
      marginPagesDisplayed={1} // Кількість відображуваних сторінок на краях
      previousLabel={'<'} // Текст кнопки "Попередня"
      nextLabel={'>'} // Текст кнопки "Наступна"
      breakLabel={'...'} // Текст для роздільників
      onPageChange={handlePageClick} // Обробник подій при зміні сторінки
      containerClassName={'Pagination'} // Клас контейнера
      activeClassName={'Pagination_item_active'} // Клас активної сторінки
      pageClassName={'Pagination_item'}
      disabledClassName={'Pagination_item_disabled'}
      breakClassName={'Pagination_item_dots Pagination_item'}
      nextClassName={'Pagination_arrow Pagination_item'}
      previousClassName={'Pagination_arrow Pagination_item'}
      initialPage={+query.get('page') - 1}
    />
  );
};

export { Pagination };
