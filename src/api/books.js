import axios from "axios";

export const fetchBooks = async (query) => {
  const response = await axios.get(
    `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
  );
  return response.data.docs;
};
