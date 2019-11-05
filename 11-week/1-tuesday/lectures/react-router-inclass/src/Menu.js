import React from "react";

export default function Menu() {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a href="/">Home</a>
      </li>
      <li className="menu-item">
        <a href="/latest">Latest</a>
      </li>
      <li className="menu-item">
        <a href="/books">All Books</a>
      </li>
    </ul>
  );
}
