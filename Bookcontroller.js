import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const addBook = async (req, res) => {
  const book = new Book(req.body);
  const saved = await book.save();
  res.status(201).json(saved);
};

export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};