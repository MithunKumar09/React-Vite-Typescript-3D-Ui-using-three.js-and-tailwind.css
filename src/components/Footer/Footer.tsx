import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0c0f3f] via-[#1f0937] to-[#0c0f3f] text-white px-6 md:px-20 py-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-b from-cyan-400 to-blue-500 text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full">
              M
            </div>
            <h1 className="text-2xl font-extrabold">
              Mithun<span className="text-cyan-400">Kumar</span>
            </h1>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Transforming ideas into immersive 3D experiences with cutting-edge technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li>3D User Interfaces</li>
            <li>Interactive Maps</li>
            <li>Data Visualization</li>
            <li>3D Portfolio Websites</li>
            <li>Custom 3D UI/UX</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <div className="flex items-center border border-white/20 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2">
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-white/10" />

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
        <p>© 2025 Mithun Kumar. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
