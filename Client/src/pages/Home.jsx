import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import PropertyCard from '../components/PropertyCard';
import { get, del } from '../utils/api';
import { isAuthenticated } from '../utils/auth';

const locations = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"];
const types = ["Apartment", "Villa", "Plot", "Studio"];
const budgets = ["< 50L", "50L - 1Cr", "1Cr - 2Cr", "> 2Cr"];

const WhyUs = () => (
  <section className="w-full max-w-7xl mx-auto mb-16 px-4 py-10 bg-white rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-100">
    <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
      <h2 className="text-3xl font-extrabold mb-2 text-gray-900">Why Choose <span className="text-orange-500">NextProperty?</span></h2>
      <p className="text-lg text-gray-600 mb-4">We connect you to the best properties across India with trust and transparency.</p>
    </div>
    <div className="flex flex-1 justify-center gap-6 md:gap-8">
      {/* Listings */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-sm px-8 py-6 border border-gray-100">
        <span className="mb-2">
          <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" /></svg>
        </span>
        <span className="text-3xl font-bold text-gray-800">2000+</span>
        <span className="text-gray-600 font-medium mt-1">Listings</span>
      </div>
      {/* Cities */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-sm px-8 py-6 border border-gray-100">
        <span className="mb-2">
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" /></svg>
        </span>
        <span className="text-3xl font-bold text-gray-800">60+</span>
        <span className="text-gray-600 font-medium mt-1">Cities</span>
      </div>
      {/* Experience */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-sm px-8 py-6 border border-gray-100">
        <span className="mb-2">
          <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
        </span>
        <span className="text-3xl font-bold text-gray-800">10yr</span>
        <span className="text-gray-600 font-medium mt-1">Experience</span>
      </div>
    </div>
  </section>
);

const Home = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await get('/properties');
        setProperties(Array.isArray(data) ? data : data.properties || []);
      } catch (err) {
        setProperties([]);
      }
    };
    fetchProperties();
  }, []);

  const handleDelete = async (id) => {
    try {
      await del(`/properties/${id}`);
      setProperties(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      alert(err.message || 'Failed to delete property');
    }
  };

  // Filter and search logic
  const filtered = properties.filter((property) => {
    const matchesSearch = (property.title || '').toLowerCase().includes(search.toLowerCase());
    const matchesType = !filters.type || property.type === filters.type;
    const matchesSub = !filters.subCategory || property.subCategory === filters.subCategory;
    let matchesPrice = true;
    if (filters.price) {
      const [min, max] = filters.price.split('-');
      matchesPrice = property.price >= (parseInt(min) || 0) && (!max || property.price <= parseInt(max));
    }
    return matchesSearch && matchesType && matchesSub && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-10 min-h-[80vh]">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-8 drop-shadow-lg">
        Find Your Dream Property
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-stretch">
        <div className="bg-white rounded-xl shadow p-4 flex-1 max-w-xl mx-auto">
          <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex-1 max-w-xl mx-auto">
          <FilterBar filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <div>
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="text-6xl mb-4">🏠</span>
            <div className="text-2xl font-semibold text-gray-400 mb-2">No properties found.</div>
            <div className="text-gray-500">Try adjusting your search or filters.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {filtered.map(property => (
              <PropertyCard
                key={property._id}
                property={property}
                onDelete={handleDelete}
                isAuthenticated={isAuthenticated()}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-16">
        <WhyUs />
      </div>
    </div>
  );
};

export default Home; 