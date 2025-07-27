import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

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
          <button className="hover:text-blue-400 transition-colors flex items-center space-x-1">
            <span className="text-xl">🛒</span>
            <span>Cart</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;