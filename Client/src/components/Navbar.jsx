import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/add-property', label: 'Add Property', auth: true },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = isAuthenticated();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="backdrop-blur-lg bg-white/70 border-b border-gray-100 shadow-2xl p-3 flex justify-between items-center sticky top-0 z-50 rounded-b-3xl">
      <Link to="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-amber-500 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-500 drop-shadow">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h3.375a.375.375 0 00.375-.375V16.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.125c0 .207.168.375.375.375h3.375c.621 0 1.125-.504 1.125-1.125V9.75M8.25 22.5h7.5" />
        </svg>
        NextProperty
      </Link>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
      </button>
      {/* Nav links */}
      <div
        className={`flex-col md:flex-row md:flex gap-5 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white/95 md:bg-transparent border-b md:border-0 border-gray-100 shadow-xl md:shadow-none z-40 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden md:flex'}`}
      >
        {navLinks.map(
          (link) =>
            (!link.auth || auth) && (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`relative font-medium tracking-wide px-4 py-2 transition-all duration-200 focus:outline-none group
                  ${location.pathname === link.to
                    ? 'bg-gradient-to-r from-amber-100 to-orange-50 text-amber-700 font-bold shadow-md scale-105'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:shadow-md hover:scale-105'}
                  rounded-full
                `}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Animated underline on hover */}
                <span className="pointer-events-none absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            )
        )}
        {!auth ? (
          <>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 border-0"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 border-0"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 border-0"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 