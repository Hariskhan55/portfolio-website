import React from 'react';
import {
  FaHome, FaUser, FaTools, FaFileAlt, FaLaptopCode,
  FaCogs, FaEnvelope, FaQuoteRight
} from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa6';
import profileImage from '../assets/profile.png';

const Sidebar = ({ isOpen }) => {
  const navItems = [
    { href: '#home', icon: <FaHome />, label: 'Home' },
    { href: '#about', icon: <FaUser />, label: 'About' },
    { href: '#skills', icon: <FaTools />, label: 'Skills' },
    { href: '#resume', icon: <FaFileAlt />, label: 'Resume' },
    { href: '#projects', icon: <FaLaptopCode />, label: 'Projects' },
    { href: '#services', icon: <FaCogs />, label: 'Services' },
    { href: '#testimonials', icon: <FaQuoteRight />, label: "Testimonials" },
    { href: '#contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-black to-gray-800 text-white z-40 py-10 px-4
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}
    >
      {/* Profile Image */}
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400 shadow-md mx-auto">
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold mt-4 tracking-wide uppercase text-center">Muhammad Haris</h2>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4 justify-center">
        <a href="https://github.com/Hariskhan55" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com/in/muhammad-haris-6b682a274/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-400 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-400 transition" />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10 w-full space-y-5">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group flex items-center gap-3 text-gray-300 px-3 py-2 hover:text-blue-400 transition-all"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium relative">
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
