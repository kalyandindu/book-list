import React, { useState } from "react";

function BookEdit({ book, onClick, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    onSubmit(book.id, title);
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
