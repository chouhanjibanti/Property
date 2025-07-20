import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    className="w-full md:w-1/2 border p-2 rounded mb-4"
    placeholder="Search properties..."
    value={value}
    onChange={onChange}
  />
);

export default SearchBar; 