const Bookshelf = () => {
  const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];

  return (
    <div className="bookshelf">
      <h1>My Bookshelf</h1>
      {bookshelf.map((book) => (
        <div key={book.key} className="book-card">
          <h3>{book.title}</h3>
          <p>
            {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
          </p>
        </div>
      ))}
      <button onClick={() => (window.location.href = "/")}>
        Back to Search
      </button>
    </div>
  );
};

export default Bookshelf;
