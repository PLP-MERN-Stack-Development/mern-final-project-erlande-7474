import React, { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://your-backend-url.onrender.com/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Book Reviews</h2>
      {books.map(book => (
        <div key={book._id}>
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Review:</strong> {book.review}</p>
          <p><strong>Rating:</strong> {book.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;