import React, { useContext } from "react";
import { Redirect } from "react-router";
import { CartContext } from "../../container/cart/CartContext";
import "./OrderSuccessful.scss";
// page shown after successful order
// user is redirected if tries to go to protected route '/ordersuccessful'
const OrderSuccesful = () => {
  const [, , , , , enableSuccess] = useContext(CartContext);
  return (
    <div className="ordersuccessful">
      Order has been successfully submitted, check your e-mail for more info
      {enableSuccess ? null : <Redirect to="/" />}
    </div>
  );
};

export default OrderSuccesful;
