import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import "./CardItem.css";
import { CartContext } from "../../Context/CartContext";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CardItem = (props) => {
  const { details } = props;
  const { imageUrl, name, location, price, rooms } = details;
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      className="property-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={name} className="property-image" />
      <div className="property-details">
        <h2 className="property-name">{name}</h2>
        <p className="property-location">Location: {location}</p>
        <p className="property-price">Price: ${price}</p>
        <p className="property-rooms">Rooms: {rooms}</p>
        <button
          className="book-now"
          onClick={() => {
            addToCart(details);
          }}
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default CardItem;
