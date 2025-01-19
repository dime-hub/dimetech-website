import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-bold text-white mb-4">Dimetechnologies</h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <LinkedIn size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-indigo-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-indigo-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/software-development" className="hover:text-indigo-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="hover:text-indigo-400 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="hover:text-indigo-400 transition-colors">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>13 Sundown Road</li>
              <li>Belvedere, Harare ZW</li>
              <li>Phone: +263775449580</li>
              <li>Email: dimetech2@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dimetechnologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
