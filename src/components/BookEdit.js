import React, { useState } from "react";
import useBookContext from "../hooks/useBookContext";

function BookEdit({ book, onClick }) {
  const [title, setTitle] = useState(book.title);
  const { updateBookbyId } = useBookContext();

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    updateBookbyId(book.id, title);
    setTitle("");
    onClick();
  }

  return (
    <form className="book-edit" onSubmit={submitHandler}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button" type="submit">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
