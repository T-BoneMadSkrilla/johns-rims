import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import logo from '../images/trinity_forged_wheel_co_logo.jpeg';

const Navigation = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-white text-theme-800 shadow-lg border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className={`hover:text-theme-600 transition-colors ${
              location.pathname === '/' ? 'text-theme-600' : ''
            }`}
          >
            Home
          </Link>
          
          <div className="p-2">
            <img 
              src={logo} 
              alt="TRINITY FORGED WHEEL CO." 
              className="h-16 w-auto object-contain"
              onLoad={() => console.log('Logo loaded successfully')}
              onError={(e) => {
                console.error('Logo failed to load:', e.target.src);
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden text-theme-800 font-bold text-sm text-center">
              TRINITY<br/>FORGED WHEEL CO.
            </div>
          </div>
          
          <Link 
            to="/cart"
            className="hover:text-theme-600 transition-colors flex items-center space-x-1"
          >
            <span className="text-xl">🛒</span>
            <span>Cart</span>
            {getTotalItems() > 0 && (
              <span className="bg-theme-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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