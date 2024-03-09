import React from "react";
//import router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import page
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
        <Sidebar />
      </Router>
    </div>
  );
};

export default App;
