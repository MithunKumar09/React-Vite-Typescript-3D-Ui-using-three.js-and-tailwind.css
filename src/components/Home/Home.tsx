// frontend/src/components/Home/Home.tsx
import React from 'react';
import Background3D from './Background3D';
import Lottie from 'lottie-react';
import animationData from '../../assets/2.json';

const Home: React.FC = () => {
  return (
    <div
    id="home"
    className="relative w-full h-screen overflow-hidden bg-[#0d0d2b] text-white">
      <Background3D />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-4 lg:gap-20 pt-28 lg:pt-10 pb-6">
        
        {/* LEFT - TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Transforming <br className="hidden lg:inline" />
            Ideas with <span className="text-blue-400">3D Innovation</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6">
            We create cutting-edge digital experiences with advanced 3D technology, interactive data visualization, and immersive user interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition">
              View Portfolio
            </button>
          </div>
        </div>

        {/* RIGHT - LOTTIE ANIMATION */}
        <div className="w-64 sm:w-72 md:w-80 lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] mt-6 sm:mt-8 lg:mt-0 mb-0">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
