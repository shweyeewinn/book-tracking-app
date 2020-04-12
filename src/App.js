import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import BookShelfList from './Components/BookShelfList';
import SearchBooks from './Components/SearchBooks';

import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: [],
    };
  }

  getBooksByShelf = async () => {
    const allBooks = await BooksAPI.getAll();
    this.setState({ allBooks });
  };

  handleShelfChange = async (shelf, book) => {
    await BooksAPI.update(book, shelf);
    this.getBooksByShelf();
  };

  componentDidMount() {
    this.getBooksByShelf();
  }

  render() {
    const { allBooks } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/search"
              render={() => (
                <SearchBooks
                  handleShelfChange={this.handleShelfChange}
                  allBooks={allBooks}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <BookShelfList
                  allBooks={allBooks}
                  handleShelfChange={this.handleShelfChange}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
