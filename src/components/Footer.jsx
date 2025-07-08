// File: Footer.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-800 text-white py-10 md:ml-64 px-6 border-t-2 border-blue-400">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
    {/* Contact Info */}
    <div className="space-y-2">
      <h3 className="text-blue-400 font-semibold text-lg mb-2">Contact</h3>
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-blue-400" />
        <span>+92 317 0634531</span>
      </div>
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-blue-400" />
        <span>harisakbar5566@gmail.com</span>
      </div>
    </div>

    {/* Social Links */}
    <div className="space-y-2">
      <h3 className="text-blue-400 font-semibold text-lg mb-2">Follow Me</h3>
      <div className="flex gap-4 text-lg">
        <a href="https://www.linkedin.com/in/muhammad-haris-6b682a274/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Hariskhan55" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaGithub />
        </a>
        <a href="https://instagram.com/hariskhan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaInstagram />
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-gray-400 mt-4 md:mt-0 text-center md:text-right lg:col-span-1">
      <p>&copy; {new Date().getFullYear()} Haris Khan. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
