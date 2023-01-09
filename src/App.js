import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  function createBooks(title) {
    let updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  }

  function deleteBookById(id) {
    let updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }
  function updateBookbyId(id, newTitle) {
    let updatedBooks = books.map((book) =>
      book.id !== id ? book : { ...book, title: newTitle }
    );
    setBooks(updatedBooks);
  }
  return (
    <div>
      {/* {books.length} */}
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={updateBookbyId}
      />
      <BookCreate onCreate={createBooks} />{" "}
    </div>
  );
}

export default App;
