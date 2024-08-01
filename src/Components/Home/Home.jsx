import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-bg-container">
      <motion.div
        className="home-left-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="home-text-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="text-box">
            <nav className="nav">
              <motion.div
                className="nav-logo-bg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1>Totality Corp</h1>
              </motion.div>
            </nav>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              Building Your Dreams
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
              Real Estate for Living and Investing
            </motion.h2>
            <motion.button
              onClick={() => navigate("/properties")}
              className="explore-btn"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
              Explore Options
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <div className="home-right-container"></div>
    </div>
  );
};

export default Home;
