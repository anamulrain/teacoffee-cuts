import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-cream-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <Scissors className="h-5 w-5 text-accent-500" />
                <span className="mx-1 text-cream-100">&</span>
                <Coffee className="h-5 w-5 text-accent-500" />
              </div>
              <h2 className="text-lg font-bold">Tea, Coffee & Cuts</h2>
            </Link>
            <p className="text-cream-300 mb-4">
              A unique space where style meets relaxation. Get a perfect haircut while enjoying premium coffee and tea.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-cream-300 hover:text-accent-400 transition-colors duration-300">
                  Salon Services
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-cream-300 hover:text-accent-400 transition-colors duration-300">
                  Coffee Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream-300 hover:text-accent-400 transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300 hover:text-accent-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-300 hover:text-accent-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-500 mt-1 flex-shrink-0" />
                <span className="text-cream-300">123 Style Avenue, Fashion District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-500 flex-shrink-0" />
                <span className="text-cream-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-500 flex-shrink-0" />
                <span className="text-cream-300">hello@teacoffeecuts.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-cream-300">Monday - Friday</span>
                <span className="text-cream-300">8am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-cream-300">Saturday</span>
                <span className="text-cream-300">9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-cream-300">Sunday</span>
                <span className="text-cream-300">10am - 6pm</span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-cream-300 hover:text-accent-400 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-cream-300 hover:text-accent-400 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-cream-300 hover:text-accent-400 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-700 mt-8 pt-8 text-center text-cream-400">
          <p>&copy; {new Date().getFullYear()} Tea, Coffee & Cuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;