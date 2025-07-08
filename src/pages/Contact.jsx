// File: Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen md:ml-64 bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 uppercase mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <span className="text-gray-300">+92 317 0634531</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <span className="text-gray-300">harisakbar5566@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-500 text-xl" />
              <a href="https://www.linkedin.com/in/muhammad-haris-6b682a274/" target="_blank" rel="noreferrer" className="hover:underline text-gray-300">
                linkedin.com/in/muhammad-haris-6b682a274/
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-blue-500 text-xl" />
              <a href="https://github.com/Hariskhan55" target="_blank" rel="noreferrer" className="hover:underline text-gray-300">
                github.com/Hariskhan55
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaInstagram className="text-pink-500 text-xl" />
              <a href="https://instagram.com/hariskhan" target="_blank" rel="noreferrer" className="hover:underline text-gray-300">
                instagram.com/hariskhan
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded transition"
            >
              ✉️ Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
