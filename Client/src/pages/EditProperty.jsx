import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropertyForm from '../components/PropertyForm';

const EditProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  // 1. Fetch property by id
  useEffect(() => {
    async function fetchProperty() {
      try {
        const res = await fetch(`http://localhost:5001/api/properties/${id}`);
        const data = await res.json();
        setProperty(data.property || data); // backend response ke hisaab se
        setImagePreview(data.property?.image || data.image || null);
      } catch (err) {
        // error handle
      }
    }
    fetchProperty();
  }, [id]);

  // 2. Update property logic
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(property).forEach(key => {
        formData.append(key, property[key]);
      });
      if (imagePreview && typeof imagePreview !== 'string') {
        formData.append('image', imagePreview);
      }
      const res = await fetch(`http://localhost:5001/api/properties/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        if (errorData.message === 'Property not found') {
          alert('This property does not exist.');
          return;
        }
        // Show the backend error message to the user
        alert(errorData.message || 'Failed to update property');
        console.error('Update failed:', errorData);
        return;
      }
      navigate('/properties');
    } catch (err) {
      console.error('Update error:', err);
      alert('Failed to update property');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative animate-fadeIn">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-6 top-6 text-gray-400 hover:text-blue-600 text-2xl transition"
          aria-label="Go Back"
        >
          ←
        </button>
        {/* Heading */}
        <h2 className="text-3xl font-extrabold mb-2 text-center bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 bg-clip-text text-transparent drop-shadow">
          Edit Property
        </h2>
        {/* Subtitle */}
        <div className="text-center text-gray-500 mb-6 text-base font-medium">Update your property details below</div>
        {/* Divider */}
        <div className="border-b border-gray-200 mb-8"></div>
        <PropertyForm
          onSubmit={handleSubmit}
          property={property}
          setProperty={setProperty}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          isEdit={true}
        />
      </div>
    </div>
  );
};

export default EditProperty; 