import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CompatibilityNotice from '../components/CompatibilityNotice';
import ProductSpecs from '../components/ProductSpecs';
import { useCart } from '../components/CartContext';
import { useInventory } from '../components/InventoryContext';
import modernTruckOne from '../images/modern_truck_one.jpg';
import modernTruckTwo from '../images/modern_truck_two.jpg';
import modernTruckThree from '../images/modern_truck_three.jpg';

const ProductOne = () => {
  const { addToCart } = useCart();
  const { getProductQuantity } = useInventory();
  const currentQuantity = getProductQuantity(1);

  const productData = {
    id: 1,
    title: "Classic Steel Rims",
    description: "Authentic 90s steel rim design with modern durability. Perfect for that classic truck look that never goes out of style. These rims combine the nostalgic appeal of the 90s with contemporary engineering standards.",
    price: "$299",
    images: [
      { src: modernTruckOne, alt: "Classic Steel Rims - Front View" },
      { src: modernTruckTwo, alt: "Classic Steel Rims - Side View" },
      { src: modernTruckThree, alt: "Classic Steel Rims - Installed on Truck" }
    ],
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
              
              {/* Inventory Status */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Current Stock:</span>
                  <span className={`text-lg font-bold ${currentQuantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {currentQuantity > 0 ? `${currentQuantity} in stock` : 'Out of stock'}
                  </span>
                </div>
              </div>
            </div>

            <ProductSpecs specs={productData.specs} />

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why Choose Classic Steel Rims?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-theme-600 text-xl">✓</span>
                  <p className="text-gray-700">Timeless design that never goes out of style</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-theme-600 text-xl">✓</span>
                  <p className="text-gray-700">Superior durability for heavy-duty applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-theme-600 text-xl">✓</span>
                  <p className="text-gray-700">Perfect fitment for modern F-250 trucks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-theme-600 text-xl">✓</span>
                  <p className="text-gray-700">Easy maintenance and cleaning</p>
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

export default ProductOne; 