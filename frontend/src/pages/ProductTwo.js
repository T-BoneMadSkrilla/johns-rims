import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CompatibilityNotice from '../components/CompatibilityNotice';
import ProductSpecs from '../components/ProductSpecs';
import { useCart } from '../components/CartContext';
import oldTruckOne from '../images/old_truck_one.jpg';
import singleWheelTwo from '../images/single_wheel_two.jpeg';
import singleWheelThree from '../images/single_wheel_three.jpeg';

const ProductTwo = () => {
  const { addToCart } = useCart();

  const productData = {
    id: 2,
    title: "Retro Alloy Wheels",
    description: "Lightweight alloy construction with vintage styling. Enhanced performance meets classic aesthetics. These wheels offer the perfect blend of modern engineering and retro design, providing both style and substance for your F-250.",
    price: "$449",
    images: [
      { src: oldTruckOne, alt: "Retro Alloy Wheels - Front View" },
      { src: singleWheelTwo, alt: "Retro Alloy Wheels - Side View" },
      { src: singleWheelThree, alt: "Retro Alloy Wheels - Detail View" }
    ],
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
    addToCart(productData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link to="/products" className="text-theme-600 hover:text-theme-800">
            ← Back to Products
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ProductCard
              title={productData.title}
              description={productData.description}
              price={productData.price}
              images={productData.images}
              features={productData.features}
              onAddToCart={handleAddToCart}
              showAddToCart={true}
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{productData.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {productData.description}
              </p>
            </div>

            <ProductSpecs specs={productData.specs} />

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why Choose Retro Alloy Wheels?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-theme-600 text-xl">✓</span>
                  <p className="text-gray-700">Lightweight design for improved performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-theme-600 text-xl">✓</span>
                  <p className="text-gray-700">Superior heat dissipation for better braking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-theme-600 text-xl">✓</span>
                  <p className="text-gray-700">Retro styling with modern engineering</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-theme-600 text-xl">✓</span>
                  <p className="text-gray-700">Extended warranty for peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <CompatibilityNotice />
        </div>
      </div>
    </div>
  );
};

export default ProductTwo; 