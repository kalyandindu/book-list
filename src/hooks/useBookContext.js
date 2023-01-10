import { useContext } from "react";
import BookContext from "../context/bookContext";

function useBookContext() {
  return useContext(BookContext);
}

export default useBookContext;
