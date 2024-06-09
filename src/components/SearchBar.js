const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="search-input"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for a book..."
    />
  );
};

export default SearchBar;
