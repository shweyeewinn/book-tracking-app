import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({ books, title, handleShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 ? (
            books.map((book) => (
              <li key={book.id}>
                <Book book={book} handleShelfChange={handleShelfChange} />
              </li>
            ))
          ) : (
            <div className="book-title">
              <p>No Book on {title} shelf</p>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default BookShelf;
