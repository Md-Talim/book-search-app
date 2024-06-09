# Book Search App

The Book Search App is a web application that allows users to search for books using the Open Library API and manage their personal bookshelf. Users can type the name of a book into a search bar, view search results in real-time, and add their favorite books to a personal bookshelf. The bookshelf is stored persistently using the Web Storage API (localStorage), ensuring that users' selections are retained even after refreshing the page or closing the browser.

## Features

- **Real-Time Search**: As users type in the search bar, book results are fetched from the Open Library API and displayed dynamically.
- **Book Details**: Each search result is presented in a card format, displaying the book's title and author(s).
- **Add to Bookshelf**: Users can add books from the search results to their personal bookshelf with a single click.
- **Persistent Bookshelf**: The bookshelf data is stored using localStorage, allowing users to retain their book list between sessions.
- **Navigation**: Users can navigate between the search page and their personal bookshelf seamlessly.

## Tech Stack

- **React**: The app is built using React, providing a modern, component-based architecture.
- **Axios**: Used for making HTTP requests to the Open Library API.
- **React Router**: Enables navigation between the search page and the bookshelf page.
- **Web Storage API**: localStorage is used to persist the bookshelf data

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPO_URL
   cd book-search-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Deployment

The app is deployed on Vercel at: https://book-search-app-xi.vercel.app/
