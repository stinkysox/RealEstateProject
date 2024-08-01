import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CardItem from "../../CardItem/CardItem";
import "./Properties.css";
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../../../Context/CartContext";

const propertiesArray = [
  {
    id: 1,
    name: "Luxury Apartment",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/03/27/15/17/apartment-2179337_1280.jpg",
    location: "Bangalore",
    rent: "100",
    price: "200000",
    rooms: "4",
  },
  {
    id: 2,
    name: "Cozy Studio",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg",
    location: "Mumbai",
    rent: "75",
    price: "150000",
    rooms: "1",
  },
  {
    id: 3,
    name: "Modern Loft",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_1280.jpg",
    location: "Delhi",
    rent: "120",
    price: "250000",
    rooms: "3",
  },
  {
    id: 4,
    name: "Spacious Villa",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
    location: "Chennai",
    rent: "150",
    price: "300000",
    rooms: "5",
  },
  {
    id: 5,
    name: "Charming Cottage",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/10/06/07/58/kitchen-8297678_1280.jpg",
    location: "Hyderabad",
    rent: "90",
    price: "180000",
    rooms: "2",
  },
  {
    id: 6,
    name: "Elegant Flat",
    imageUrl:
      "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg",
    location: "Pune",
    rent: "110",
    price: "220000",
    rooms: "3",
  },
  {
    id: 7,
    name: "Stylish Penthouse",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_1280.jpg",
    location: "Kolkata",
    rent: "140",
    price: "280000",
    rooms: "4",
  },
  {
    id: 8,
    name: "Chic Loft Apartment",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/03/10/10/08/dining-room-2132347_1280.jpg",
    location: "Ahmedabad",
    rent: "130",
    price: "270000",
    rooms: "2",
  },
  {
    id: 9,
    name: "Luxurious Mansion",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/06/05/02/22/villa-3454616_1280.jpg",
    location: "Jaipur",
    rent: "200",
    price: "400000",
    rooms: "6",
  },
  {
    id: 10,
    name: "Beautiful Bungalow",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/05/02/10/12/window-7169327_1280.jpg",
    location: "Chandigarh",
    rent: "160",
    price: "320000",
    rooms: "5",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Properties = (orops) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const cartLength = cartItems.length;
  return (
    <>
      <div className="header">
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
        <div className="button-relative">
          <button onClick={() => navigate("/cart")}>
            <MdShoppingCart size={24} />
          </button>
          <div className="cart-count">{cartLength}</div>
        </div>
      </div>

      <motion.div
        className="properties"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {propertiesArray.map((item) => (
          <CardItem key={item.id} details={item} />
        ))}
      </motion.div>
    </>
  );
};

export default Properties;
