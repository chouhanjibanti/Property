import React from 'react';

const featureIcons = [
  // Buy & Sell
  <svg className="w-8 h-8 text-orange-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" /></svg>,
  // Rent
  <svg className="w-8 h-8 text-emerald-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m-4-5v9" /><path strokeLinecap="round" strokeLinejoin="round" d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z" /></svg>,
  // Smart Filters
  <svg className="w-8 h-8 text-purple-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15A7.97 7.97 0 0021 12c0-4.418-3.582-8-8-8S5 7.582 5 12c0 1.07.21 2.09.6 3" /></svg>,
  // Secure Messaging
  <svg className="w-8 h-8 text-blue-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
];

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 py-10 px-2">
    <div className="max-w-3xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-8 md:p-14">
      <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
        About NextProperty
      </h2>
      <p className="mb-8 text-lg text-gray-700 text-center">NextProperty is a modern real estate platform to buy, sell, and rent properties with ease. Built with the MERN stack.</p>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-3 text-orange-600 text-center">Why Choose NextProperty?</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 max-w-xl mx-auto">
          <li>Verified property listings across major Indian cities</li>
          <li>Advanced search and filter options for your perfect match</li>
          <li>Direct connect with property owners and agents</li>
          <li>Secure transactions and transparent process</li>
          <li>Modern, user-friendly interface on all devices</li>
          <li>24/7 support for all your property needs</li>
        </ul>
      </div>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-3 text-orange-600 text-center">Property Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
            {featureIcons[0]}
            <h4 className="font-bold text-lg mb-1">Buy & Sell</h4>
            <p>Find your dream home or list your property for sale with ease and security.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
            {featureIcons[1]}
            <h4 className="font-bold text-lg mb-1">Rent</h4>
            <p>Browse rental properties or post your own for thousands of verified users to see.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
            {featureIcons[2]}
            <h4 className="font-bold text-lg mb-1">Smart Filters</h4>
            <p>Filter by location, price, type, area, and more to find exactly what you need.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
            {featureIcons[3]}
            <h4 className="font-bold text-lg mb-1">Secure Messaging</h4>
            <p>Contact property owners and agents directly through our secure platform.</p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2 text-center">Contact Us</h3>
        <p className="mb-6 text-center">Email: <a href="mailto:support@nextproperty.com" className="text-blue-600 underline">support@nextproperty.com</a></p>
      </div>
      <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-2xl px-8 py-6 text-center font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-200">
        Ready to explore properties? <span className="underline"><a href="/properties">Browse Listings</a></span> or <span className="underline"><a href="/add-property">Add Your Property</a></span> now!
      </div>
    </div>
  </div>
);

export default About; 