import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded">
            PropertyEase
          </div>
        </a>
        
        <nav className="ml-10 hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="/about" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="/services" className="text-gray-600 hover:text-blue-500">Services</a>
          <a href="/blog" className="text-gray-600 hover:text-blue-500">Blog</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </nav>
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="text-gray-600 border border-gray-300 px-4 py-1 rounded hover:bg-gray-50">Login</button>
        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;