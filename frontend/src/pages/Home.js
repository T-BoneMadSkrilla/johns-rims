import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import imageOne from '../images/modern_truck_one.jpg';
import imageTwo from '../images/old_truck_one.jpg';

const Home = () => {
  const heroImages = [
    { src: imageOne, alt: "F-250 with Classic Steel Wheels" },
    { src: imageTwo, alt: "Retro Alloy Wheels on Truck" },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              Classic Style, Modern Performance
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
            </p>
            <Link
              to="/products"
              className="bg-theme-600 hover:bg-theme-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-theme-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Perfect Fit</h3>
            <p className="text-gray-600">Designed specifically for newer F-250 trucks with precise specifications</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-theme-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">High-grade materials and construction for durability and performance</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-theme-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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