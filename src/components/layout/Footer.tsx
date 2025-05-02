import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">MELLOW</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Curated products for your lifestyle needs. Quality is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=electronics" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=jewelry" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products?category=men's clothing" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/products?category=women's clothing" className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500">
                  Women's Clothing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Fashion Street, Design District, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-500" />
                <span className="text-gray-600 dark:text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-500" />
                <span className="text-gray-600 dark:text-gray-400">info@mellow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Mellow. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <Link to="/privacy" className="hover:text-teal-600 dark:hover:text-teal-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-teal-600 dark:hover:text-teal-500">
                Terms of Service
              </Link>
              <Link to="/shipping" className="hover:text-teal-600 dark:hover:text-teal-500">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;