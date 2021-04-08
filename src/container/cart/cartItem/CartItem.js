import React from "react";
import PropTypes from "prop-types";
import "./CartItem.scss";
// components that holds a book data inside the cart
const CartItem = props => {
  const {
    title,
    image,
    author,
    quantity,
    price,
    incQuantity,
    decQuantity,
    removeFromCart
  } = props;
  return (
    <div className="cart_item">
      <div className="cart_item-left">
        <div
          className="cart_item-img"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div>
          <p className="cart_item-title">{title}</p>
          <p className="cart_item-author">by {author}</p>
          <br />
          <p className="cart_item-price">{price}&euro;</p>
        </div>
      </div>
      <div className="cart_item-right">
        <button
          className="cart_item-button"
          type="button"
          onClick={incQuantity}
        >
          +
        </button>
        <div className="cart_item-quantity">{quantity}</div>
        <button
          className="cart_item-button"
          type="button"
          onClick={decQuantity}
        >
          -
        </button>
        <button
          className="cart_item-remove"
          type="button"
          onClick={removeFromCart}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  incQuantity: PropTypes.func.isRequired,
  decQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};
