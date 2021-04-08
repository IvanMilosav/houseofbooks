import React, { useContext } from "react";
import Card from "../../card/Card";
import "./PopularBooks.scss";
import allBooksData from "../../../assets/tmpDataBooks.json";
import { CartContext } from "../../../container/cart/CartContext";
import { NotificationContext } from "../../notification/NotificationContext";
// filter top books from database
const PopularBooks = () => {
  const [, addItemToCart] = useContext(CartContext);
  const [, , , , notify] = useContext(NotificationContext);
  // replace map with forEach
  const popBooks = allBooksData.map(book =>
    book.bestSelling ? (
      <Card
        key={book.id}
        image={book.image}
        title={book.title}
        author={book.author}
        genre={book.genre}
        price={book.price}
        onclick={() => {
          addItemToCart(book);
          notify(` "${book.title}" has been adeed to the cart`);
        }}
      />
    ) : null
  );

  return (
    <div className="popularbooks">
      <div className="popularbooks-title">BEST SELLING BOOKS</div>
      <div className="popularbooks-container popularbooks-animated fade-in">
        {" "}
        {popBooks}
      </div>
    </div>
  );
};

export default PopularBooks;
