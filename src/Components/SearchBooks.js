import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import { DebounceInput } from 'react-debounce-input';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

const searchTerms = [
  'android',
  'art',
  'artificial intelligence',
  'astronomy',
  'austen',
  'baseball',
  'basketball',
  'bhagat',
  'biography',
  'brief',
  'business',
  'camus',
  'cervantes',
  'christie',
  'classics',
  'comics',
  'cook',
  'cricket',
  'cycling',
  'desai',
  'design',
  'development',
  'digital marketing',
  'drama',
  'drawing',
  'dumas',
  'education',
  'everything',
  'fantasy',
  'film',
  'finance',
  'first',
  'fitness',
  'football',
  'future',
  'games',
  'gandhi',
  'homer',
  'horror',
  'hugo',
  'ibsen',
  'journey',
  'kafka',
  'king',
  'lahiri',
  'larsson',
  'learn',
  'literary fiction',
  'make',
  'manage',
  'marquez',
  'money',
  'mystery',
  'negotiate',
  'painting',
  'philosophy',
  'photography',
  'poetry',
  'production',
  'programming',
  'react',
  'redux',
  'river',
  'robotics',
  'rowling',
  'satire',
  'science fiction',
  'shakespeare',
  'singh',
  'swimming',
  'tale',
  'thrun',
  'time',
  'tolstoy',
  'travel',
  'ultimate',
  'virtual reality',
  'web development',
  'ios',
];

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      foundBooks: [],
    };
  }

  searchTeams = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });
    //console.log(term);
    this.getFoundBooks(term);
  };

  getFoundBooks = async (term) => {
    const query = term.trim().toLowerCase();
    try {
      if (query.length > 0 && searchTerms.includes(query)) {
        const result = await BooksAPI.search(query);
        if (result.error) {
          this.setState({ foundBooks: result.items });
        } else {
          this.setState({ foundBooks: result });
        }
      } else {
        this.setState({ foundBooks: [] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { term, foundBooks } = this.state;
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
              debounceTimeout={400}
              type="text"
              placeholder="Search by title or author"
              value={term}
              onChange={(e) => this.searchTeams(e)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {foundBooks &&
              foundBooks.map((foundBook) => {
                let result = allBooks.find((book) => book.id === foundBook.id);
                result = result ? result : foundBook;
                result.shelf = result.shelf ? result.shelf : 'none';
                return result ? (
                  <li key={result.id}>
                    <Book book={result} handleShelfChange={handleShelfChange} />
                  </li>
                ) : null;
              })}
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
