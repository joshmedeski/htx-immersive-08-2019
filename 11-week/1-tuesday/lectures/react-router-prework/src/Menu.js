import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/books/1">Book 1</Link>
      </li>
    </ul>
  );
}
