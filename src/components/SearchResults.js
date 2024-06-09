import BookCard from "./BookCard";

const SearchResults = ({ books, addToBookshelf }) => {
  return (
    <div className="search-results">
      {books.map((book) => (
        <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
      ))}
    </div>
  );
};

export default SearchResults;
