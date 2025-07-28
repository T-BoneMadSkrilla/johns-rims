import React from 'react';
import { useContent } from '../components/ContentContext';

const Contact = () => {
  const { getContent } = useContent();
  const contactContent = getContent('contact');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {contactContent.title || "Contact Us"}
          </h1>
          <p className="text-xl text-gray-600">
            {contactContent.subtitle || "Get in touch with Trinity Forged Wheel Co."}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href={`mailto:${contactContent.email}`}
                    className="text-theme-600 hover:text-theme-700"
                  >
                    {contactContent.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <a 
                    href={`tel:${contactContent.phone}`}
                    className="text-theme-600 hover:text-theme-700"
                  >
                    {contactContent.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">
                    {contactContent.address}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <div className="text-gray-700 whitespace-pre-line">
                    {contactContent.hours}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                {contactContent.message}
              </p>
              
              <div className="bg-theme-50 rounded-lg p-4">
                <h3 className="font-semibold text-theme-800 mb-2">Why Choose Trinity Forged Wheel Co.?</h3>
                <ul className="text-sm text-theme-700 space-y-1">
                  <li>• Expert fitment guidance</li>
                  <li>• Quality assurance on every product</li>
                  <li>• Fast shipping and delivery</li>
                  <li>• Dedicated customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/products" 
            className="bg-theme-600 hover:bg-theme-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block"
          >
            Browse Our Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 