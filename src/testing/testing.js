import React from "react";

import ReactDom from "react-dom";

// stateless functional component
// always return JSX; JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children) .

// JSX Rules
// return single element
// div / section / article or fragment
// use camelCase for html attributes
// className instead of class name
// close every element
// formatting

// function Greeting() {
//   return (
//     <React.Fragment>
//       <div>
//         <h3>Hello people!</h3>
//         <ul>
//           <li>
//             <a href="#"> hello world!</a>
//           </li>
//         </ul>
//       </div>
//       <div></div>
//     </React.Fragment>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World!")
//   );
// };

//Nested Components, React Tools

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h3>Hello people!</h3>;
// const Message = () => {
//   return <p>this is message</p>;
// };

// Nest component, React Tools
// CSS
// import "./index.css";

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image></Image>
//       <Title />
//       <Authors />
//     </article>
//   );
// };

// const Image = () => {
//   return (
//     <img
//       src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
//       alt=""
//     />
//   );
// };

// const Title = () => <h1>I Love You to the Moon and Back</h1>;

// const Authors = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Amelia Hepworth
//   </h4>
// );

// JSX

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book />
//     </section>
//   );
// }
// const author = "Amelia Hepworth";
// const Book = () => {
//   const title = "I Love You to the Moon and Bac";
//   return (
//     <article className="book">
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
//         alt=""
//       />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// PROPS: We use props in React to pass data from one component to another (from a parent component to a child component(s)).
// import "./index.css";
// Setup vars

// const firstBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   title: "I Love You to the Moon and Back",
//   author: "Amelia Hepworth",
// };

// const secondBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
//   title: "Our Class is a Family",
//   author: "Shannon Olsen",
// };

// const author = "";
// const title = "";
// const img = "";

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       />
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt="" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// Destructuring: Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

// Children props is everything that we render between the opening and closing tag of the component
// import "./index.css";
// Setup OBJECTS

// const firstBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   title: "I Love You to the Moon and Back",
//   author: "Amelia Hepworth",
// };

// const secondBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
//   title: "Our Class is a Family",
//   author: "Shannon Olsen",
// };

// // const author = "";
// // const title = "";
// // const img = "";

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel
//           omnis obcaecati doloremque, culpa consequatur hic sint, necessitatibus
//           aperiam at sunt maxime magni adipisci rerum harum, autem odit illo
//           repellendus?
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }
// Destructuring and children props
// const Book = ({ img, title, author, children }) => {
//   // const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };

// const Book = (props) => {
//   const { img, title, author } = props;
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {props.children}
//     </article>
//   );
// };

// const Book = (props) => {
//   const { img, title, author, children } = props;
//   // console.log(props);
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };

// Simple list and Proper list
// Key prop and Spread operator
import "./index.css";
// Setup array
// const books = [
//   {
//     id: 1,
//     img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },

//   {
//     id: 2,
//     img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
//     title: "Our Class is a Family",
//     author: "Shannon Olsen",
//   },
//   {
//     id: 3,
//     img: "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
//     title: "Our Class is a Family",
//     author: "Brit Bennett",
//   },
// ];

// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

// function BookList() {
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         return <Book key={book.id} {...book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author } = props;
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// Event Basics
// import "./index.css";
//  Setup array
// const books = [
//   {
//     id: 1,
//     img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },

//   {
//     id: 2,
//     img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
//     title: "Our Class is a Family",
//     author: "Shannon Olsen",
//   },
//   {
//     id: 3,
//     img: "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
//     title: "The Vanishing Half: A Novel",
//     author: "Brit Bennett",
//   },
// ];

// function BookList() {
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         return <Book key={book.id} {...book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author } = props;
//   // attribute, eventHandler
//   // onclick, onMouseOver

//   const clickHandler = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert("Hello World!");
//   };
//   const complexExample = (author) => {
//     console.log(author);
//   };
//   return (
//     <article
//       className="book"
//       onMouseOver={() => {
//         console.log(title);
//       }}
//     >
//       <img src={img} alt="" />
//       <h1 onClick={() => console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       <button type="button" onClick={clickHandler}>
//         reference example
//       </button>
//       <button type="button" onClick={() => complexExample(author)}>
//         {" "}
//         More complex example
//       </button>
//     </article>
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
