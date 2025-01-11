import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Orders from './pages/orders/Orders';
import Service from './pages/service/Service';

export default function App() {



  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

