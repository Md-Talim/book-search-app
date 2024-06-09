const BookCard = ({ book, addToBookshelf }) => {
  return (
    <div className="book-card">
      <h3 className="truncate" title={book.title}>
        {book.title}
      </h3>
      <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
      <button
        className="btn btn-secondary"
        onClick={() => addToBookshelf(book)}
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
