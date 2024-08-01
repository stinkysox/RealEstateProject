import React, { useContext } from "react";
import "./Cart.css";
import { motion } from "framer-motion";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <div className="cart">
      <nav className="nav-cart">
        <motion.div
          className="nav-logo-bg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1>Totality Corp</h1>
        </motion.div>
      </nav>
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h2 className="cart-item-name">{item.name}</h2>
              <p className="cart-item-location">Location: {item.location}</p>
              <p className="cart-item-price">Price: ${item.price}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
};

const TotalPrice = ({ totalPrice }) => {
  return (
    <div className="total-price-container">
      <h2 className="total-price-title">Total Price</h2>
      <p className="total-price-amount">${totalPrice.toFixed(2)}</p>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
