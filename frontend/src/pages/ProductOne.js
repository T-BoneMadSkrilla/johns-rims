import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CompatibilityNotice from '../components/CompatibilityNotice';
import ProductSpecs from '../components/ProductSpecs';

const ProductOne = () => {
  const productData = {
    title: "Classic Steel Rims",
    description: "Authentic 90s steel rim design with modern durability. Perfect for that classic truck look that never goes out of style. These rims combine the nostalgic appeal of the 90s with contemporary engineering standards.",
    price: "$299",
    features: [
      "Authentic 90s design aesthetic",
      "Heavy-duty steel construction",
      "Corrosion-resistant finish",
      "Perfect fit for newer F-250 trucks",
      "Includes mounting hardware",
      "1-year warranty"
    ],
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Finish", value: "Black Powder Coat" },
      { label: "Size", value: "16x7 inches" },
      { label: "Bolt Pattern", value: "8x170mm" },
      { label: "Offset", value: "+20mm" },
      { label: "Load Rating", value: "3,500 lbs per wheel" },
      { label: "Weight", value: "28 lbs each" },
      { label: "Warranty", value: "1 year" }
    ]
  };

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Added Classic Steel Rims to cart');
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
              <h3 className="text-xl font-semibold mb-4">Why Choose Classic Steel Rims?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">Timeless design that never goes out of style</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">Superior durability for heavy-duty applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">Perfect fitment for modern F-250 trucks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">Easy maintenance and cleaning</p>
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

export default ProductOne; 