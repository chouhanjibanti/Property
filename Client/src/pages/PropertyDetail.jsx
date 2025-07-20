import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch property by id and setProperty
  }, [id]);

  if (!property) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <img src={property.image} alt={property.title} className="w-full md:w-1/2 h-96 object-cover rounded" />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">{property.title}</h2>
        <div className="text-lg text-gray-600 mb-4">{property.subCategory} | {property.type}</div>
        <div className="font-bold text-2xl mb-4">₹{property.price}</div>
        <p className="mb-4">{property.description}</p>
        {/* Add more details or contact button here */}
      </div>
    </div>
  );
};

export default PropertyDetail; 