import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [form, setForm] = useState({ title: "", author: "", review: "", rating: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://your-backend-url.onrender.com/api/books", form);
    alert("Book added!");
    setForm({ title: "", author: "", review: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
      <input placeholder="Author" onChange={e => setForm({...form, author: e.target.value})} />
      <textarea placeholder="Review" onChange={e => setForm({...form, review: e.target.value})} />
      <input placeholder="Rating" type="number" onChange={e => setForm({...form, rating: e.target.value})} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;