import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-violet-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Zomatoo</Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
          <li><Link to="/addseller" className="hover:text-gray-300">Add Seller</Link></li>
          <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 bg-blue-700">
          <Link to="/" className="block py-1" onClick={toggleMenu}>Home</Link>
          <Link to="/products" className="block py-1" onClick={toggleMenu}>Products</Link>
          <Link to="/addseller" className="block py-1" onClick={toggleMenu}>Add Seller</Link>
          <Link to="/login" className="block py-1" onClick={toggleMenu}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;