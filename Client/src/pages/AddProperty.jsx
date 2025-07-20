import React, { useState } from 'react';
import { post } from '../utils/api'; // aapke api.js se
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    type: '',
    subCategory: '',
    location: '',
    area: '',
    image: null // file object
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });
      await post('/properties', formData, true); // true = isFormData
      setSuccess('Property added successfully!');
      setForm({
        title: '', description: '', price: '', type: '', subCategory: '', location: '', area: '', image: null
      });
      navigate('/properties'); // ya navigate('/') for Home
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Failed to add property');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative animate-fadeIn">
        <h2 className="text-3xl font-extrabold mb-2 text-center bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 bg-clip-text text-transparent drop-shadow">
          Add New Property
        </h2>
        <div className="text-center text-gray-500 mb-6 text-base font-medium">Fill in the details to list your property</div>
        <div className="border-b border-gray-200 mb-8"></div>
        {success && <div className="mb-4 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-center font-semibold">{success}</div>}
        {error && <div className="mb-4 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-center font-semibold">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Enter property title" className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-gray-400 shadow-sm" required />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the property" className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-gray-400 shadow-sm" required />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Enter price in INR" type="number" className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-gray-400 shadow-sm" required />
          <input name="type" value={form.type} onChange={handleChange} placeholder="Type (e.g. Residential)" className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-gray-400 shadow-sm" required />
          <input name="subCategory" value={form.subCategory} onChange={handleChange} placeholder="SubCategory (e.g. Villa)" className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-gray-400 shadow-sm" required />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-gray-400 shadow-sm" required />
          <input name="area" value={form.area} onChange={handleChange} placeholder="Area (sqft)" type="number" className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-gray-400 shadow-sm" required />
          <input name="image" type="file" accept="image/*" onChange={handleChange} className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" required />
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-lg mt-2">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty; 