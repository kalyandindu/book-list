import React from "react";
import useBookContext from "../hooks/useBookContext";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useBookContext();
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
