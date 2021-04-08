import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "./CartContext";
import { AuthContext } from "../../auth/AuthContext";
import CartItem from "./cartItem/CartItem";
import cartImage from "../../assets/cartCorner.svg";
import "../../styles/Animations.scss";
import "./Cart.scss";

const Cart = () => {
  const [
    cart,
    ,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    ,
    setEnableSuccess
  ] = useContext(CartContext);

  // auth is needed to enable order button
  const [isAuth] = useContext(AuthContext);

  // for redirecting to orderSuccess
  const history = useHistory();

  // counts total price
  let total = 0;
  cart.map(item => {
    total += item.price * item.quantity;
    return total;
  });

  // setEnableSucc enables route to orderSuccess
  const handleOrderButton = () => {
    setEnableSuccess(true);
    clearCart();
    history.push("/ordersuccessful");
  };
  // puts all items from cart into cartitem
  const cartMapped = cart.map(item => (
    <CartItem
      key={item.id}
      title={item.title}
      author={item.author}
      image={item.image}
      quantity={item.quantity}
      price={item.price}
      incQuantity={() => increaseQuantity(item)}
      decQuantity={() => decreaseQuantity(item)}
      removeFromCart={() => removeItemFromCart(item)}
      itemTotal={item.quantity * item.price}
    />
  ));

  // if cart is empty show this message,else show posts
  let cartForDisplay = null;
  if (cartMapped.length === 0) {
    cartForDisplay = (
      <p className="cart-empty">
        Cart is currently empty
        <br />
        <br />
        :&#40;
      </p>
    );
  } else {
    cartForDisplay = cartMapped;
  }
  // used for button enabling
  const cartNotEmpty = cartMapped.length > 0;
  const enableOrder = isAuth && cartNotEmpty;
  // sctill to start of page for better UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <img src={cartImage} alt="cart" className="corner_img" />
      <div className="cart">
        <div className="cart-container">
          <p className="cart-total ">Total: {total}&euro;</p>
          {isAuth ? null : (
            <p className="cart-warning">You must be logged in to order</p>
          )}
          <div className="cart-items animated appear">{cartForDisplay}</div>

          <button
            type="button"
            className="cart-button "
            disabled={!enableOrder}
            onClick={handleOrderButton}
          >
            Order now {total}&nbsp; &euro;
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;
