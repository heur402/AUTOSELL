import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../component/NavBar";
import HomePage from "../page/HomePage";
import AboutUs from "../page/AboutUs";
import Footer from "../component/Footer";
import Product from "../page/Product";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
