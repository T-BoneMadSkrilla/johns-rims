import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CompatibilityNotice from '../components/CompatibilityNotice';
import modernTruckOne from '../images/modern_truck_one.jpg';
import modernTruckTwo from '../images/modern_truck_two.jpg';
import modernTruckThree from '../images/modern_truck_three.jpg';
import oldTruckOne from '../images/old_truck_one.jpg';
import singleWheelTwo from '../images/single_wheel_two.jpeg';
import singleWheelThree from '../images/single_wheel_three.jpeg';

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Classic Steel Rims",
      description: "Authentic 90s steel rim design with modern durability. Perfect for that classic truck look.",
      price: "$299",
      images: [
        { src: modernTruckOne, alt: "Classic Steel Rims - Front View" },
        { src: modernTruckTwo, alt: "Classic Steel Rims - Side View" },
        { src: modernTruckThree, alt: "Classic Steel Rims - Installed View" }
      ],
      features: [
        "Authentic 90s design aesthetic",
        "Heavy-duty steel construction",
        "Corrosion-resistant finish",
        "Perfect fit for newer F-250 trucks"
      ],
      link: "/products/classic-steel-rims"
    },
    {
      id: 2,
      title: "Retro Alloy Wheels",
      description: "Lightweight alloy construction with vintage styling. Enhanced performance meets classic aesthetics.",
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
        "Perfect fit for newer F-250 trucks"
      ],
      link: "/products/retro-alloy-wheels"
    }
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                title={product.title}
                description={product.description}
                price={product.price}
                images={product.images}
                features={product.features}
                onClick={() => handleCardClick(product.link)}
                showAddToCart={false}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <CompatibilityNotice />
        </div>
      </div>
    </div>
  );
};

export default Products;