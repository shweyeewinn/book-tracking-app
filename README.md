# MyReads Project

This is a bookshelf app build with React. This app allows the users to

- search the books by their titles and authors
- select and categorize books they have read, are currently reading, or want to read.

## Demo

Project Demo can be viewed [here](https://www.loom.com/share/5142220b90e74667bde098d6033bd8c2).

## Features

It has two pages such as Home page and Search page.

**Main Page**

- The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
- The main page shows a control that allows users to move books between shelves. The control is tied to each book instance. The functionality of moving a book to a different shelf works correctly.
- When the browser is refreshed, the same information is displayed on the page.

**Search Page**

- As the user types into the search input field in the search page, books that match the query are displayed on the page, along with their titles and authors.
- Search results are not shown when all of the text is deleted out of the search input box.
- The user is able to search for multiple words, such as “artificial intelligence.”
- Invalid queries are handled and prior search results are not shown.
- Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

## Author

- [Shwe Yee Winn](https://www.linkedin.com/in/shwe-yee-winn-83146744/) - Frontend Engineer

## Installation

Install all project dependencies with `npm install`.
Start the development server `npm start`.

## Tech Stack

- HTML5
- CSS3
- [react 16.6.3](https://reactjs.org/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Library for DOM bindings for React Router.
- [react-debounce-input](https://www.npmjs.com/package/react-debounce-input) - React component that renders an Input, Textarea or other element with debounced onChange.

## Directory Structure

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
    ├── images # Images folder
        ├── default-cover.jpg # The default cover image for the book which does not have a thumbnail.
│   ├── favicon.ico # Favicon Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for app.
    ├── App.js # This is the root of your app. Contains routes to switch from Main page to Search page.
    ├── App.test.js # For testing
    ├── Components # Components folder
        ├── BookShelfList.js # This is the main page showing 3 shelves for books.
        ├── BookShelf.js # This is the single shelf component showing all the categorized books accordingly.
        ├── SearchBooks.js # This is the page user can search the books by title or authors of books.
        ├── Book.js # This is the single book component which has a control that allows users to move books between shelves.
    ├── BooksAPI.js # A JavaScript backend API provided by Udacity.
    ├── icons # Icons images
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contribution

This repository is my final assessment project for Udacity's React Fundamentals course. Therefore, I most likely will not accept pull requests.
