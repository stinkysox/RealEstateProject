import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Properties from "./Components/Home/PropertiesPage/Properties";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <ToastContainer theme="dark" />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
