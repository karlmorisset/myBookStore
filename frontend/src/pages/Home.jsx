import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <li>{book.title}</li>
      ))}
    </ul>
  );
}
