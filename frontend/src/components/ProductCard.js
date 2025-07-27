import React from 'react';

const ProductCard = ({ 
  title, 
  description, 
  price, 
  image, 
  features = [], 
  onClick,
  showAddToCart = false,
  onAddToCart 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow duration-300' : ''}`}
      onClick={onClick}
    >
      <div className="h-64 bg-gray-300 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 text-lg">Product Image</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {features.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-3xl font-bold text-blue-600">{price}</span>
          <span className="text-sm text-gray-500">Set of 4</span>
        </div>
        
        {showAddToCart && onAddToCart && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard; 