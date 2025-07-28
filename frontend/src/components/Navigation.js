import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import logo from '../images/trinity_forged_wheel_co_logo.jpeg';

const Navigation = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-theme-800 shadow-lg border-b border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-theme-800 hover:text-theme-600 focus:outline-none focus:text-theme-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-theme-600 transition-colors ${
                location.pathname === '/' ? 'text-theme-600' : ''
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/products"
              className={`hover:text-theme-600 transition-colors ${
                location.pathname === '/products' ? 'text-theme-600' : ''
              }`}
            >
              Products
            </Link>
            
            <Link
              to="/about"
              className={`hover:text-theme-600 transition-colors ${
                location.pathname === '/about' ? 'text-theme-600' : ''
              }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`hover:text-theme-600 transition-colors ${
                location.pathname === '/contact' ? 'text-theme-600' : ''
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Logo - centered on all screen sizes */}
          <div className="absolute left-1/2 transform -translate-x-1/2 p-2">
            <img 
              src={logo} 
              alt="TRINITY FORGED WHEEL CO." 
              className="h-16 w-auto object-contain max-w-full"
              onLoad={() => console.log('Logo loaded successfully')}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden text-theme-800 font-bold text-sm text-center">
              TRINITY<br/>FORGED WHEEL CO.
            </div>
          </div>
          
          {/* Cart - always visible */}
          <Link 
            to="/cart"
            className="hover:text-theme-600 transition-colors flex items-center space-x-1"
          >
            <span className="text-xl">🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {getTotalItems() > 0 && (
              <span className="bg-theme-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-theme-600 bg-theme-50' 
                    : 'text-theme-800 hover:text-theme-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link
                to="/products"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/products' 
                    ? 'text-theme-600 bg-theme-50' 
                    : 'text-theme-800 hover:text-theme-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-theme-600 bg-theme-50' 
                    : 'text-theme-800 hover:text-theme-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-theme-600 bg-theme-50' 
                    : 'text-theme-800 hover:text-theme-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;