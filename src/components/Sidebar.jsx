import React from 'react';
import {
  FaHome, FaUser, FaTools, FaFileAlt, FaLaptopCode,
  FaCogs, FaEnvelope, FaQuoteRight, FaBars, FaTimes
} from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa6';
import profileImage from '../assets/profile.png';

const navItems = [
  { href: '#home', icon: <FaHome />, label: 'Home' },
  { href: '#about', icon: <FaUser />, label: 'About' },
  { href: '#skills', icon: <FaTools />, label: 'Skills' },
  { href: '#resume', icon: <FaFileAlt />, label: 'Resume' },
  { href: '#projects', icon: <FaLaptopCode />, label: 'Projects' },
  { href: '#services', icon: <FaCogs />, label: 'Services' },
  { href: '#testimonials', icon: <FaQuoteRight />, label: 'Testimonials' },
  { href: '#contact', icon: <FaEnvelope />, label: 'Contact' },
];

// 👇 Replace with your actual URLs
const githubUrl = 'https://github.com/Hariskhan55';
const linkedinUrl = 'https://www.linkedin.com/in/muhammad-haris-6b682a274/';
const instagramUrl = '#';
const twitterUrl = '#';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-900 text-white z-50 transition-all duration-500 ease-in-out
        ${isOpen ? 'w-64' : 'w-16'} overflow-hidden border-r-4 border-blue-500/40 shadow-[4px_0_15px_rgba(0,255,255,0.1)] backdrop-blur-md`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-2 bg-gray-900 hover:bg-gray-700 p-2 rounded-full text-white text-xl z-50 lg:hidden"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Profile */}
      <div className={`transition-all duration-500 flex flex-col items-center ${isOpen ? 'mt-8' : 'mt-4'}`}>
        <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
        {isOpen && (
          <h2 className="text-center text-gray-300 mt-3 font-semibold tracking-wide text-sm">
            Muhammad Haris
          </h2>
        )}
      </div>

      {/* Social Icons with Links */}
      {isOpen && (
        <div className="flex justify-center gap-3 mt-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-blue-400 transition" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-400 transition" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-400 transition" />
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-400 transition" />
          </a>
        </div>
      )}

      {/* Navigation */}
      <nav className="mt-10 space-y-3 px-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-blue-400 transition"
          >
            <span className="text-lg">{item.icon}</span>
            {isOpen && (
              <span className="text-sm font-medium relative">
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
