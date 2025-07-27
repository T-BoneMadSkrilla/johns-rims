import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductOne from './pages/ProductOne';
import ProductTwo from './pages/ProductTwo';
import Cart from './pages/Cart';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/classic-steel-rims" element={<ProductOne />} />
            <Route path="/products/retro-alloy-wheels" element={<ProductTwo />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;