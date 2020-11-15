import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [books, updateBooks] = useState([]);
  const [query, updateQuery] = useState("Jaws");

  searchBooks = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((result) => {
        updateBooks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div>
      <h1>Search</h1>
      {books.map(book => (
        <li>{book.title}</li>
      ))}
    </div>
  );
}

export default Search;
