import React, { useState } from "react";
import useBookContext from "../hooks/useBookContext";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBookContext();
  function handleEditClick() {
    setShowEdit(!showEdit);
  }
  let content = <h3> {book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onClick={handleEditClick} />;
  }
  return (
    <div className="book-show">
      <div className="actions">
        <button className="edit" onClick={handleEditClick}></button>
        <button
          className="delete"
          onClick={() => deleteBookById(book.id)}
        ></button>
      </div>
      <img src={`http://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      {content}
    </div>
  );
}

export default BookShow;
