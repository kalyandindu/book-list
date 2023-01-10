import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBookContext from "./hooks/useBookContext";

function App() {
  const { fetchUsers } = useBookContext();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <BookList />
      <BookCreate />{" "}
    </div>
  );
}

export default App;
