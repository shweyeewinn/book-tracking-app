import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleShelfChange }) => {
  const onShelfChange = (e, book) => {
    const shelf = e.target.value;
    handleShelfChange(shelf, book);
  };
  const backgroundImage =
    book.imageLinks && book.imageLinks.smallThumbnail
      ? book.imageLinks.smallThumbnail
      : '/images/default-cover.jpg';

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={(e) => onShelfChange(e, book)}>
            <option value="" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title && book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(', ')}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default Book;
