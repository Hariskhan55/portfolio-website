import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <header className="fixed top-0 left-0 bg-[#0f172a] text-white px-6 py-4 shadow-md z-40 lg:ml-64 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Toggle button for sidebar (visible on small screens only) */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo / Title */}
        <h1 className="text-lg font-bold text-blue-400 tracking-wider uppercase ml-4">
          Portfolio
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
