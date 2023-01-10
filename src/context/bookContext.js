import { useState, createContext, useCallback } from "react";
import axios from "axios";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  async function createBooks(title) {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    let updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  }

  async function deleteBookById(id) {
    await axios.delete(`http://localhost:3001/books/${id}`);
    let updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    // console.log(response);
  }
  async function updateBookbyId(id, newTitle) {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    let updatedBooks = books.map((book) =>
      book.id !== id ? book : { ...book, ...response.data }
    );
    setBooks(updatedBooks);
  }

  const valueToShare = {
    books,
    fetchUsers,
    updateBookbyId,
    createBooks,
    deleteBookById,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export default BookContext;
