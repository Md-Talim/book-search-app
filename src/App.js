import React, { useEffect, useState } from "react";
import { fetchBooks } from "./api/books";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  useEffect(() => {
    if (query) {
      const fetchAndSetBooks = async () => {
        const booksData = await fetchBooks(query);
        setBooks(booksData);
      };

      fetchAndSetBooks();
    }
  }, [query]);

  const addToBookshelf = (newBook) => {
    const updatedBookshelf = [...bookshelf, newBook];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="app">
      <h1>Book Search</h1>
      <div className="search-nav">
        <SearchBar query={query} setQuery={setQuery} />
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/bookshelf")}
        >
          Go to My Bookshelf
        </button>
      </div>
      <SearchResults books={books} addToBookshelf={addToBookshelf} />
    </div>
  );
};

export default App;
