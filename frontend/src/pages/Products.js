import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CompatibilityNotice from '../components/CompatibilityNotice';

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Classic Steel Rims",
      description: "Authentic 90s steel rim design with modern durability. Perfect for that classic truck look.",
      price: "$299",
      images: [
        { src: null, alt: "Classic Steel Rims - Front View" },
        { src: null, alt: "Classic Steel Rims - Side View" }
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
        { src: null, alt: "Retro Alloy Wheels - Front View" },
        { src: null, alt: "Retro Alloy Wheels - Side View" }
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
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        
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