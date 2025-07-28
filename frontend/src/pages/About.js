import React from 'react';
import { useContent } from '../components/ContentContext';

const About = () => {
  const { getContent } = useContent();
  const aboutContent = getContent('about');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {aboutContent.title || "About Trinity Forged Wheel Co."}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              {aboutContent.story}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              {aboutContent.mission}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aboutContent.values?.map((value, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-theme-600 text-xl mt-1">✓</span>
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/products" 
            className="bg-theme-600 hover:bg-theme-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block"
          >
            View Our Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default About; 