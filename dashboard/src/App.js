import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Location from './pages/Location';
import SocialMedia from './pages/SocialMedia';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-primary-red py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-lg">CHIK HEN JOE</div>
            <ul className="flex">
              <li className="mr-6">
                <Link to="/" className="text-white hover:text-secondary-yellow">Dashboard</Link>
              </li>
              <li className="mr-6">
                <Link to="/about" className="text-white hover:text-secondary-yellow">About</Link>
              </li>
              <li className="mr-6">
                <Link to="/location" className="text-white hover:text-secondary-yellow">Location</Link>
              </li>
              <li className="mr-6">
                <Link to="/socialmedia" className="text-white hover:text-secondary-yellow">Social Media</Link>
              </li>
              <li>
                <Link to="/admin" className="text-white hover:text-secondary-yellow">Admin Panel</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
