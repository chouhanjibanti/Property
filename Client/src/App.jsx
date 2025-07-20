import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProperty from './pages/AddProperty';
import EditProperty from './pages/EditProperty';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import ProtectedRoute from './components/ProtectedRoute';
import Properties from './pages/Properties';

function AppContent() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== '/dashboard' && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-property" element={<ProtectedRoute><AddProperty /></ProtectedRoute>} />
          <Route path="/edit-property/:id" element={<ProtectedRoute><EditProperty /></ProtectedRoute>} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<ProtectedRoute><Properties /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
