import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const Navigation = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left - Home */}
          <Link
            to="/"
            className={`hover:text-blue-400 transition-colors ${
              location.pathname === '/' ? 'text-blue-400' : ''
            }`}
          >
            Home
          </Link>
          
          {/* Center - Brand */}
          <h1 className="text-xl font-bold">John's Rims</h1>
          
          {/* Right - Shopping Cart */}
          <Link 
            to="/cart"
            className="hover:text-blue-400 transition-colors flex items-center space-x-1"
          >
            <span className="text-xl">🛒</span>
            <span>Cart</span>
            {getTotalItems() > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;