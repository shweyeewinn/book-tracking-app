import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import { DebounceInput } from 'react-debounce-input';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      foundBooks: [],
      notFound: false,
    };
  }

  searchTeams = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });
    this.getFoundBooks(term);
  };

  getFoundBooks = async (term) => {
    const query = term.trim();
    try {
      const result = await BooksAPI.search(query);
      if (result.error) {
        this.setState({ foundBooks: result.items, notFound: true });
      } else {
        this.setState({ foundBooks: result, notFound: false });
      }
    } catch (error) {
      //console.log(error);
      this.setState({ notFound: true });
    }
  };

  render() {
    const { term, foundBooks, notFound } = this.state;

    const { handleShelfChange, allBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={`/`} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={0}
              debounceTimeout={300}
              type="text"
              placeholder="Search by title or author"
              value={term}
              onChange={(e) => this.searchTeams(e)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {!notFound ? (
              foundBooks.map((foundBook) => {
                let result = allBooks.find((book) => book.id === foundBook.id);
                result = result ? result : foundBook;
                result.shelf = result.shelf ? result.shelf : 'none';
                return result ? (
                  <li key={result.id}>
                    <Book book={result} handleShelfChange={handleShelfChange} />
                  </li>
                ) : null;
              })
            ) : (
              <div className="book-nofound">
                <p>Books not found</p>
              </div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  allBooks: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default withRouter(SearchBooks);
