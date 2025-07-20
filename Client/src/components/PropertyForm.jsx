import React from 'react';

const inputClass =
  'w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition mb-1 placeholder-gray-400 shadow-sm';
const labelClass = 'block mb-1 font-semibold text-gray-700';
const selectClass =
  'w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-gray-400 shadow-sm';
const buttonClass =
  'bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-xl shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-400 transition font-bold text-lg mt-2';

const PropertyForm = ({ onSubmit, property, setProperty, imagePreview, setImagePreview, isEdit }) => (
  <form className="bg-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto" onSubmit={onSubmit}>
    {/* Title */}
    <div className="mb-5">
      <label className={labelClass}>Title</label>
      <input type="text" className={inputClass} placeholder="Enter property title" value={property.title || ''} onChange={e => setProperty({ ...property, title: e.target.value })} required />
    </div>
    {/* Description */}
    <div className="mb-5">
      <label className={labelClass}>Description</label>
      <textarea className={inputClass} placeholder="Describe the property" value={property.description || ''} onChange={e => setProperty({ ...property, description: e.target.value })} required />
    </div>
    {/* Price */}
    <div className="mb-5">
      <label className={labelClass}>Price</label>
      <input type="number" className={inputClass} placeholder="Enter price in INR" value={property.price || ''} onChange={e => setProperty({ ...property, price: e.target.value })} required />
    </div>
    {/* Type & SubCategory */}
    <div className="mb-5 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label className={labelClass}>Type</label>
        <select className={selectClass} value={property.type || ''} onChange={e => setProperty({ ...property, type: e.target.value })} required>
          <option value="">Select type</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      <div className="flex-1">
        <label className={labelClass}>Sub Category</label>
        <select className={selectClass} value={property.subCategory || ''} onChange={e => setProperty({ ...property, subCategory: e.target.value })} required>
          <option value="">Select sub category</option>
          <option value="Flats">Flats</option>
          <option value="Builder Floors">Builder Floors</option>
          <option value="House Villas">House Villas</option>
          <option value="Plots">Plots</option>
          <option value="Farmhouses">Farmhouses</option>
          <option value="Hotels">Hotels</option>
          <option value="Lands">Lands</option>
          <option value="Office Spaces">Office Spaces</option>
          <option value="Hostels">Hostels</option>
          <option value="Shops Showrooms">Shops Showrooms</option>
        </select>
      </div>
    </div>
    {/* Image Upload */}
    <div className="mb-5">
      <label className={labelClass}>Image</label>
      <input type="file" accept="image/*" className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" onChange={e => setImagePreview(e.target.files[0])} />
      {imagePreview && (
        <img
          src={typeof imagePreview === 'string' ? imagePreview : URL.createObjectURL(imagePreview)}
          alt="Preview"
          className="mt-2 w-28 h-28 object-cover rounded-lg shadow border border-gray-200"
        />
      )}
    </div>
    {/* Error message placeholder */}
    {/* <div className="text-red-500 mb-4">Error message here</div> */}
    <button type="submit" className={buttonClass}>
      {isEdit ? 'Update Property' : 'Add Property'}
    </button>
  </form>
);

export default PropertyForm; 