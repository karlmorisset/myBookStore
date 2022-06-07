import { useState, useEffect } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <h1>Mes livres</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
}
