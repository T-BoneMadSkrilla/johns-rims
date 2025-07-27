import React from 'react';

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Product Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Classic Steel Rims</h3>
              <p className="text-gray-600 mb-4">
                Authentic 90s steel rim design with modern durability. Perfect for that classic truck look.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold text-blue-600">$299</span>
                <span className="text-sm text-gray-500">Set of 4</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Product Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Retro Alloy Wheels</h3>
              <p className="text-gray-600 mb-4">
                Lightweight alloy construction with vintage styling. Enhanced performance meets classic aesthetics.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold text-blue-600">$449</span>
                <span className="text-sm text-gray-500">Set of 4</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
          <h4 className="font-semibold text-yellow-800 mb-2">Compatibility Check</h4>
          <p className="text-yellow-700">
            These rims are designed for newer F-250 trucks. Please verify your truck's specifications before ordering.
            Contact us if you need help with fitment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;