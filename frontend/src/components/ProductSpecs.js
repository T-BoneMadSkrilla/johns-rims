import React from 'react';

const ProductSpecs = ({ specs = [] }) => {
  if (!specs.length) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Specifications</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
            <span className="font-medium text-gray-700">{spec.label}</span>
            <span className="text-gray-600">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecs; 