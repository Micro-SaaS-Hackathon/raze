import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md shadow-2xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
              🔍
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              ScanMaster
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Link
              to="/analytics"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === '/analytics'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              Analytics Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
