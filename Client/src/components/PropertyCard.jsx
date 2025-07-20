import React from 'react';
import { useNavigate } from 'react-router-dom';
import placeholder from '../assets/pexels-binyaminmellish-186077.jpg';

const PropertyCard = ({ property, onDelete, isAuthenticated }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-property/${property._id}`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      onDelete(property._id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col min-h-[420px] border border-gray-100 hover:shadow-lg transition-all duration-300 relative group">
      <img
        src={property.image || placeholder}
        alt={property.title}
        className="w-full h-48 object-cover object-center bg-gray-100 rounded-xl mb-4"
      />
      <h2 className="text-xl font-extrabold text-blue-700 mb-1 tracking-tight text-center line-clamp-1">{property.title}</h2>
      <p className="text-gray-600 mb-2 text-center line-clamp-2">{property.description}</p>
      <span className="text-lg font-bold text-purple-700 mb-1">₹{property.price}</span>
      <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full shadow font-semibold uppercase tracking-wide mb-1">
        {property.subCategory}
      </span>
      {property.type && (
        <span className="text-xs text-gray-500 mb-1">Type: {property.type}</span>
      )}
      {property.location && (
        <span className="text-xs text-gray-500 mb-1">Location: {property.location}</span>
      )}
      {property.area && (
        <span className="text-xs text-gray-500">Area: {property.area} sqft</span>
      )}
      {isAuthenticated && (
        <div className="flex gap-3 mt-auto justify-end flex-wrap">
          {/* Delete button removed as per request */}
        </div>
      )}
    </div>
  );
};

export default PropertyCard; 