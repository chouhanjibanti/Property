import React, { useState, useEffect } from 'react';
import { get, del } from '../utils/api';
import { isAuthenticated } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    const fetchAllProperties = async () => {
      try {
        const data = await get('/properties');
        setProperties(Array.isArray(data) ? data : data.properties || []);
      } catch (err) {
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProperties();
  }, []);

  // **Add this delete handler**
  const handleDelete = async (id) => {
    try {
      await del(`/properties/${id}`);
      setProperties(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      alert(err.message || 'Failed to delete property');
    }
  };

  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-[#0a174e] to-[#19376d] py-8 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Properties
        </h2>
        <p className="text-gray-200 text-center mb-6 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Here are all the properties listed in the system. You can edit or delete them if you have permission.
        </p>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="text-xl text-gray-400 animate-pulse">Loading properties...</span>
          </div>
        ) : properties.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="text-6xl mb-4">🏠</span>
            <div className="text-2xl font-semibold text-gray-400 mb-2">No properties found.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {properties.map(property => (
              <div key={property._id} className="bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden relative group transition hover:shadow-2xl">
                <img src={property.image || 'https://via.placeholder.com/400x200?text=No+Image'} alt={property.title} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{property.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-4 flex-1 line-clamp-2">{property.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-base sm:text-lg font-bold text-gray-800">₹{property.price}</span>
                    {/* Edit Button for authenticated users */}
                    {isAuthenticated() && (
                      <button
                        className="px-3 sm:px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold border border-blue-200 hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-400 transition-all duration-150 flex items-center gap-2 text-xs sm:text-sm"
                        onClick={() => navigate(`/edit-property/${property._id}`)}
                        aria-label="Edit property"
                      >
                        ✏️ Edit
                      </button>
                    )}
                    {/* Add Delete Button */}
                    {isAuthenticated() && (
                      <button
                        className="px-3 sm:px-4 py-1.5 rounded-full bg-red-100 text-red-700 font-semibold border border-red-200 hover:bg-red-200 focus-visible:ring-2 focus-visible:ring-red-400 transition-all duration-150 flex items-center gap-2 text-xs sm:text-sm"
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this property?')) {
                            handleDelete(property._id);
                          }
                        }}
                        aria-label="Delete property"
                      >
                        🗑️ Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties; 