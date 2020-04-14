import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

const shelves = {
  currentlyReading: ['Currently Reading', 'currentlyReading'],
  wantToRead: ['Want to Read', 'wantToRead'],
  read: ['Read', 'read'],
};

const BookShelfList = ({ allBooks, handleShelfChange }) => {
  const renderShelves = (books) => {
    const result = [];
    for (const key in shelves) {
      const shelf = shelves[key][1];
      const title = shelves[key][0];
      const filteredBooks = books.filter((book) => book.shelf === shelf);
      result.push(
        <BookShelf
          key={key}
          books={filteredBooks}
          title={title}
          handleShelfChange={handleShelfChange}
        />
      );
    }
    return result;
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">{renderShelves(allBooks)}</div>
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
