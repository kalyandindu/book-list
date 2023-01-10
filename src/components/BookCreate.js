import React, { useState } from "react";
import useBookContext from "../hooks/useBookContext";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const { createBooks } = useBookContext();

  function handleChange(e) {
    setTitle(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    createBooks(title);
    setTitle("");
  }
  return (
    <div className="book-create">
      <h3> Add a book</h3>
      <form onSubmit={submitHandler}>
        <label>title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button" type="submit">
          create
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
