
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-travel-ocean">BeOn</span>
            <span className="text-2xl font-semibold text-travel-blue">Vacation</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-travel-ocean transition-colors">Home</Link>
            <Link to="/explore" className="font-medium hover:text-travel-ocean transition-colors">Explore</Link>
            <Link to="/blogs" className="font-medium hover:text-travel-ocean transition-colors">Blogs</Link>
            <Link to="/about" className="font-medium hover:text-travel-ocean transition-colors">About Us</Link>
            <Link to="/contact" className="font-medium hover:text-travel-ocean transition-colors">Contact</Link>
            <Link to="/login" className="btn-primary">Login / Sign Up</Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-travel-ocean transition-colors px-4 py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/explore" className="font-medium hover:text-travel-ocean transition-colors px-4 py-2" onClick={toggleMenu}>Explore</Link>
              <Link to="/blogs" className="font-medium hover:text-travel-ocean transition-colors px-4 py-2" onClick={toggleMenu}>Blogs</Link>
              <Link to="/about" className="font-medium hover:text-travel-ocean transition-colors px-4 py-2" onClick={toggleMenu}>About Us</Link>
              <Link to="/contact" className="font-medium hover:text-travel-ocean transition-colors px-4 py-2" onClick={toggleMenu}>Contact</Link>
              <Link to="/login" className="btn-primary mx-4" onClick={toggleMenu}>Login / Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
