import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>📚 Book Review App</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;