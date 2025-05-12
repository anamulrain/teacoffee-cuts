import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Coffee, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Menu', path: '/menu' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brown-900 bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <div className="flex items-center">
            <Scissors className="h-6 w-6 text-accent-500" />
            <span className="mx-1 text-cream-100">&</span>
            <Coffee className="h-6 w-6 text-accent-500" />
          </div>
          <h1 className="text-xl font-bold text-cream-100">Tea, Coffee & Cuts</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-cream-100 hover:text-accent-400 transition-colors duration-300 ${
                location.pathname === link.path ? 'font-medium text-accent-400' : ''
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-accent-500 hover:bg-accent-600 text-brown-900 font-medium px-4 py-2 rounded-md transition-colors duration-300"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream-100 hover:text-accent-400 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brown-900 bg-opacity-95">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-cream-100 hover:text-accent-400 transition-colors duration-300 ${
                  location.pathname === link.path ? 'font-medium text-accent-400' : ''
                }`}
                onClick={closeMobileMenu}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-accent-500 hover:bg-accent-600 text-brown-900 font-medium px-4 py-2 rounded-md transition-colors duration-300 inline-block text-center"
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;