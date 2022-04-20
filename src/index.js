import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// JS
import { books } from "./books";
import Book from "./Book"; // any name can be used because it's been exported by defaults.
import { greeting } from "./testing/testing1";

function BookList() {
  console.log(greeting);
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
