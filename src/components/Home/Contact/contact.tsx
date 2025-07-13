// frontend/src/components/Contact/contact.tsx
import React from 'react';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaTwitter, FaFacebook, FaLinkedin, FaGithub
} from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen px-4 py-20 text-white overflow-hidden bg-black">

      {/* Top Animated Gradient Bars */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-10 py-4 z-10">
        <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-transparent animate-pulse rounded" />
        <div className="h-1 w-40 bg-gradient-to-l from-cyan-500 to-transparent animate-pulse rounded" />
      </div>

      <div className="relative z-10 text-center mt-10 mb-8">
  <h2 className="text-4xl md:text-5xl font-bold">
    <span className="text-white">Get In </span>
    <span className="text-cyan-400">Touch</span>
  </h2>
  <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
    We’d love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to help.
  </p>
</div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Left - Contact Info */}
        <div className="p-8 rounded-2xl border border-cyan-500 shadow-xl shadow-cyan-500/20 bg-[#111827]">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-400">123 Innovation Drive, Tech City, CA 94103</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">mithunkumarkulal@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">+91 8050527142</p>
              </div>
            </div>
          </div>

          <h4 className="mt-8 mb-3 font-semibold">Follow Us</h4>
          <div className="flex gap-4">
            <FaTwitter className="text-cyan-400 bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:scale-110 transition-transform" />
            <FaFacebook className="text-cyan-400 bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:scale-110 transition-transform" />
            <FaLinkedin className="text-cyan-400 bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:scale-110 transition-transform" />
            <FaGithub className="text-cyan-400 bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="p-8 rounded-2xl bg-[#111827] border border-white/10 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-[#0f172a] text-white px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              <input type="email" placeholder="Email" className="bg-[#0f172a] text-white px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-[#0f172a] text-white px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <textarea placeholder="Message" rows={5} className="w-full bg-[#0f172a] text-white px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 py-3 text-lg font-semibold rounded-md text-white hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Animated Gradient Bars */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between px-10 py-4 z-10">
        <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-transparent animate-pulse rounded" />
        <div className="h-1 w-40 bg-gradient-to-l from-cyan-500 to-transparent animate-pulse rounded" />
      </div>
    </section>
  );
};

export default Contact;
