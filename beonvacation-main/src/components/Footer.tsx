
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-travel-ocean">BeOn</span>
              <span className="text-2xl font-semibold text-travel-blue">Vacation</span>
            </div>
            <p className="text-gray-300 mb-4">Making dream vacations a reality for Indian travelers since 2023.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-travel-ocean transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-travel-ocean transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-travel-ocean transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/911234567890" className="hover:text-green-400 transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Explore</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Goa</Link></li>
              <li><Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Kerala</Link></li>
              <li><Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Thailand</Link></li>
              <li><Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Dubai</Link></li>
              <li><Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Singapore</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Travel Street, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare size={20} className="flex-shrink-0" />
                <a href="https://wa.me/911234567890" className="text-gray-300 hover:text-white transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} BeOnVacation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
