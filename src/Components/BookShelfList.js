import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

const BookShelfList = ({ allBooks, handleShelfChange }) => {
  const currentlyReading = allBooks.filter(
    (book) => book.shelf === 'currentlyReading'
  );
  const wantToRead = allBooks.filter((book) => book.shelf === 'wantToRead');
  const read = allBooks.filter((book) => book.shelf === 'read');

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          books={currentlyReading}
          title={'Currently Reading'}
          handleShelfChange={handleShelfChange}
        />
        <BookShelf
          books={wantToRead}
          title={'Want To Read'}
          handleShelfChange={handleShelfChange}
        />
        <BookShelf
          books={read}
          title={'Read'}
          handleShelfChange={handleShelfChange}
        />
      </div>
      <div className="open-search">
        <Link to={`/search`}>Add a book</Link>
      </div>
    </div>
  );
};

BookShelfList.propTypes = {
  allBooks: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default BookShelfList;
