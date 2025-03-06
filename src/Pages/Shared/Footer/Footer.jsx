import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-16 pt-12 md:pt-16 pb-6">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">FlyAid Travels</h2>
            <p className="mb-6 text-sm text-pretty">
              Your trusted partner for air travel. We provide the best deals on flights, hotels, and car rentals.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:underline">Services</a>
              </li>
              <li>
                <a href="/destinations" className="hover:underline">Popular Destinations</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h2 className="text-lg font-bold mb-4">Customer Support</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/faq" className="hover:underline">FAQ</a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/support" className="hover:underline">Support Center</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Information</h2>
            <div className="text-sm space-y-2">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <p>1234 Air Travel Lane, Suite 100, Anytown, USA 12345</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <p>support@flyaidtravels.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='divider divider-neutral mt-12'></div>
        <div className="text-sm text-center">
          <p>&copy; {new Date().getFullYear()} FlyAid Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
