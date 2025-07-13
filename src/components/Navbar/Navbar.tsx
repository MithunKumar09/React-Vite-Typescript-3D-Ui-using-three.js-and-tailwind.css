// frontend/src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const navLinks = ['Home', 'Services', 'Technologies', 'Portfolio', 'Contact'];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close mobile menu on click
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d0d2b]/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-bold text-xl">MithunKumar</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center font-medium text-white">
          {navLinks.map((link, i) => (
            <div key={i} className="flex items-center">
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="relative px-4 cursor-pointer group"
                onClick={() => scrollToSection(link)}
              >
                <span className="hover:text-cyan-400 transition-colors">{link}</span>
                <motion.div
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"
                />
              </motion.li>

              {/* Divider except last */}
              {i !== navLinks.length - 1 && (
                <div className="h-5 w-[1px] bg-gradient-to-b from-cyan-400 to-blue-500 mx-1 opacity-40" />
              )}
            </div>
          ))}

          <motion.li whileHover={{ scale: 1.05 }} className="ml-4">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2 rounded-full font-semibold text-white hover:opacity-90 transition">
              Get Started
            </button>
          </motion.li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white" onClick={handleToggle}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col bg-[#0d0d2b] text-white space-y-4 px-6 pt-4 pb-6 shadow-lg"
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                className="border-b border-white/10 pb-2 cursor-pointer"
                onClick={() => scrollToSection(link)}
              >
                <span className="block text-lg">{link}</span>
              </motion.li>
            ))}

            <motion.li whileHover={{ scale: 1.05 }}>
              <button className="w-full mt-2 bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2 rounded-full font-semibold text-white">
                Get Started
              </button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
