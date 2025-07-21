import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check login state from localStorage
    setIsLoggedIn(!!localStorage.getItem('isLoggedIn'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded">
            RealEstate
          </div>
        </a>
        
        <nav className="ml-10 hidden md:flex space-x-6">
          <a href="/" className={`${isActive('/') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>Home</a>
          <a href="/search" className={`${isActive('/search') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>Search</a>
          <a href="/calculator" className={`${isActive('/calculator') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>Calculator</a>
          <a href="/about" className={`${isActive('/about') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>About</a>
          <a href="/services" className={`${isActive('/services') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>Services</a>
          <a href="/blog" className={`${isActive('/blog') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>Blog</a>
          <a href="/contact" className={`${isActive('/contact') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>Contact</a>
        </nav>
      </div>
      
      <div className="flex items-center space-x-3">
        {!isLoggedIn ? (
          <>
            <a href="/login" className="text-gray-600 border border-gray-300 px-4 py-1 rounded hover:bg-gray-50">Login</a>
            <a href="/signup" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Sign Up</a>
          </>
        ) : (
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Log Out</button>
        )}
      </div>
    </header>
  );
};

export default Header;