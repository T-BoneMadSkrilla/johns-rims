import React from 'react';

const CompatibilityNotice = ({ 
  title = "Compatibility Check", 
  message = "These rims are designed for newer F-250 trucks. Please verify your truck's specifications before ordering. Contact us if you need help with fitment.",
  variant = "warning" 
}) => {
  const variants = {
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
    error: "bg-red-50 border-red-200 text-red-800",
    success: "bg-green-50 border-green-200 text-green-800"
  };

  const selectedVariant = variants[variant] || variants.warning;

  return (
    <div className={`border rounded-lg p-6 max-w-2xl mx-auto ${selectedVariant}`}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm">
        {message}
      </p>
    </div>
  );
};

export default CompatibilityNotice; 