import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material'; // Import Typography from MUI
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Location from './pages/Location';
import SocialMedia from './pages/SocialMedia';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import AdminRoute from './components/AdminRoute';
import Menu from './pages/Menu'; // Import Menu component
import logo from './logo/ChikHenJhoe.png'; // Correct logo path

const NavigationItem = ({ to, label }) => {
  const location = useLocation(); // useLocation hook inside NavigationItem
  const isActive = location.pathname === to;
  return (
    <li className={`mr-8 ${isActive ? 'font-bold' : ''}`}>
      <Link to={to} className="text-white hover:text-secondary-yellow text-lg">{label}</Link>
    </li>
  );
};

const App = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Router>
      <div>
        <nav className="bg-primary-red py-6"> {/* Increased padding */}
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-2xl flex items-center"> {/* Increased font size */}
              <img src={logo} alt="Chik Hen Jhoe Logo" className="w-12 h-12 mr-2" /> {/* Increased logo size */}
              <span style={{ color: '#F2CE0A', fontSize: '1.5rem', marginRight: ".5rem" }}>CHIK HEN </span> <span style={{ color: '#FFFFFF', fontSize: '1.5rem' }}> JHOE</span> {/* Added space after HEN */}
            </div>
            <ul className="flex">
              <NavigationItem to="/" label="Dashboard" />
              <NavigationItem to="/menu" label="Menu" />
              <NavigationItem to="/about" label="About" />
              <NavigationItem to="/location" label="Location" />
              <NavigationItem to="/socialmedia" label="Social Media" />
              <NavigationItem to="/admin" label="Admin Panel" />
              {localStorage.getItem('token') && (
                <li>
                  <button onClick={handleLogout} className="text-white hover:text-secondary-yellow text-lg">Logout</button> {/* Increased font size */}
                </li>
              )}
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path='/menu' element={<Menu />} /> {/* Added Menu route */}
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminPanel />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
