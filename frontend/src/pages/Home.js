import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const heroImages = [
    { src: null, alt: "F-250 with Classic Steel Rims" },
    { src: null, alt: "Retro Alloy Wheels on Truck" },
    { src: null, alt: "Classic 90s Style Rims" },
    { src: null, alt: "Premium Quality Wheels" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div className="h-96 md:h-[500px] lg:h-[600px]">
          <ImageCarousel 
            images={heroImages} 
            height="h-96 md:h-[500px] lg:h-[600px]"
            showThumbnails={false}
            showCounter={true}
            showArrows={true}
          />
        </div>
        
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Classic Style, Modern Performance
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Custom rims for your F-250 that bring back the iconic 90s look
            </p>
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Perfect Fit</h3>
            <p className="text-gray-600">Designed specifically for newer F-250 trucks with precise specifications</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">High-grade materials and construction for durability and performance</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Quick delivery straight from our trusted supplier</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;