import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black to-gray-700 text-white px-[5%] py-[5%] transition-all duration-300"
    >
      <div className="max-w-[90%] lg:max-w-[75%] mx-auto">
        {/* Page Title */}
        <motion.h2
          className="text-[6vw] sm:text-[4vw] lg:text-[2.5vw] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 uppercase mb-[5%]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6%] items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-[4%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                icon: <FaPhoneAlt className="text-blue-500 text-[1.5vw] sm:text-xl" />,
                text: '+92 317 0634531',
              },
              {
                icon: <FaEnvelope className="text-blue-500 text-[1.5vw] sm:text-xl" />,
                text: 'harisakbar5566@gmail.com',
              },
              {
                icon: <FaLinkedin className="text-blue-500 text-[1.5vw] sm:text-xl" />,
                text: 'linkedin.com/in/muhammad-haris-6b682a274/',
                href: 'https://www.linkedin.com/in/muhammad-haris-6b682a274/',
              },
              {
                icon: <FaGithub className="text-blue-500 text-[1.5vw] sm:text-xl" />,
                text: 'github.com/Hariskhan55',
                href: 'https://github.com/Hariskhan55',
              },
              {
                icon: <FaInstagram className="text-pink-500 text-[1.5vw] sm:text-xl" />,
                text: 'instagram.com/hariskhan',
                href: 'https://instagram.com/hariskhan',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-[3%]">
                {item.icon}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-[3.5vw] sm:text-[1.1vw] text-gray-300 break-all"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-[3.5vw] sm:text-[1.1vw] text-gray-300">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-gray-900 p-[6%] rounded-[1.5vw] shadow-lg hover:shadow-blue-500/20 space-y-[4%] transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-[4%] py-[3%] rounded bg-black text-white border border-gray-700 text-[3.5vw] sm:text-[1.1vw] focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-[4%] py-[3%] rounded bg-black text-white border border-gray-700 text-[3.5vw] sm:text-[1.1vw] focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-[4%] py-[3%] rounded bg-black text-white border border-gray-700 text-[3.5vw] sm:text-[1.1vw] focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white py-[3%] rounded text-[3.5vw] sm:text-[1.2vw] transition"
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
