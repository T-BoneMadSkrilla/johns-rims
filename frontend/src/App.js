import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import { InventoryProvider } from './components/InventoryContext';
import { ContentProvider } from './components/ContentContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductOne from './pages/ProductOne';
import ProductTwo from './pages/ProductTwo';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <ContentProvider>
      <InventoryProvider>
        <CartProvider>
          <Router>
            <div className="App overflow-x-hidden">
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/classic-steel-rims" element={<ProductOne />} />
                <Route path="/products/retro-alloy-wheels" element={<ProductTwo />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </InventoryProvider>
    </ContentProvider>
  );
};

export default App;