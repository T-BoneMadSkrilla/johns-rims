import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CompatibilityNotice from '../components/CompatibilityNotice';
import ProductSpecs from '../components/ProductSpecs';

const ProductTwo = () => {
  const productData = {
    title: "Retro Alloy Wheels",
    description: "Lightweight alloy construction with vintage styling. Enhanced performance meets classic aesthetics. These wheels offer the perfect blend of modern engineering and retro design, providing both style and substance for your F-250.",
    price: "$449",
    features: [
      "Lightweight alloy construction",
      "Vintage-inspired design",
      "Enhanced performance characteristics",
      "Perfect fit for newer F-250 trucks",
      "Includes mounting hardware",
      "2-year warranty"
    ],
    specs: [
      { label: "Material", value: "Aluminum Alloy" },
      { label: "Finish", value: "Silver Machined" },
      { label: "Size", value: "17x8 inches" },
      { label: "Bolt Pattern", value: "8x170mm" },
      { label: "Offset", value: "+25mm" },
      { label: "Load Rating", value: "3,750 lbs per wheel" },
      { label: "Weight", value: "22 lbs each" },
      { label: "Warranty", value: "2 years" }
    ]
  };

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Added Retro Alloy Wheels to cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/products" className="text-blue-600 hover:text-blue-800">
            ← Back to Products
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Card */}
          <div>
            <ProductCard
              title={productData.title}
              description={productData.description}
              price={productData.price}
              features={productData.features}
              onAddToCart={handleAddToCart}
              showAddToCart={true}
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{productData.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Specifications */}
            <ProductSpecs specs={productData.specs} />

            {/* Additional Information */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why Choose Retro Alloy Wheels?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">Lightweight design for improved performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">Superior heat dissipation for better braking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">Retro styling with modern engineering</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">Extended warranty for peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compatibility Notice */}
        <div className="mt-12">
          <CompatibilityNotice />
        </div>
      </div>
    </div>
  );
};

export default ProductTwo; 