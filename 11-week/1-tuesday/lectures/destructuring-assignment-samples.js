// book.js file
export default {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publishedYear: 1960
};

// page file
// import Book from './book'
import { title as bookTitle, author, publishedYear } from "./book";
import { title as movieTitle } from "./movie";

console.log(bookTitle);
console.log(author);
console.log(publishedYear);
