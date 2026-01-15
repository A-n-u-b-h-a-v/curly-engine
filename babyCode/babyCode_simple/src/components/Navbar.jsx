import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Elite IELTS</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                Home
              </a>
              <a href="#courses" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                Courses
              </a>
              <a href="#practice" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                Practice Tests
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                Contact
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
          <a 
            href="#home" 
            className="text-gray-900 hover:text-blue-600 block px-3 py-3 text-base font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#courses" 
            className="text-gray-600 hover:text-blue-600 block px-3 py-3 text-base font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </a>
          <a 
            href="#practice" 
            className="text-gray-600 hover:text-blue-600 block px-3 py-3 text-base font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Practice Tests
          </a>
          <a 
            href="#about" 
            className="text-gray-600 hover:text-blue-600 block px-3 py-3 text-base font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-gray-600 hover:text-blue-600 block px-3 py-3 text-base font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button className="w-full text-center bg-blue-600 text-white px-3 py-3 mt-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
