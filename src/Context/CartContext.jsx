import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log("Add to cart button clicked");

    const itemExists = cartItems.some((eachItem) => eachItem.id === item.id);

    if (!itemExists) {
      setCartItems((prevItems) => [...prevItems, item]);
      toast.success("Property added to the list!");
    } else {
      toast.error("You have already added this property.");
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
