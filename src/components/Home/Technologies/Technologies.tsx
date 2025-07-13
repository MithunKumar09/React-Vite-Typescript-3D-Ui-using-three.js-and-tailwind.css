//frontend/src/components/Home/Technologies/Technologies.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaMobileAlt, FaFigma } from 'react-icons/fa';
import { SiExpress, SiFlutter, SiFirebase, SiMongodb } from 'react-icons/si';

const technologies = [
  {
    id: 1,
    name: 'React.js',
    icon: <FaReact className="text-blue-500" />,
    purpose: 'Modern JavaScript library for fast, interactive web UIs',
  },
  {
    id: 2,
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-500" />,
    purpose: 'Server-side runtime for scalable, high-performance backends',
  },
  {
    id: 3,
    name: 'Express.js',
    icon: <SiExpress className="text-gray-800" />,
    purpose: 'Minimalist backend framework ideal for RESTful APIs and microservices',
  },
  {
    id: 4,
    name: 'React Native',
    icon: <FaMobileAlt className="text-purple-500" />,
    purpose: 'Cross-platform mobile app development for both iOS and Android',
  },
  {
    id: 5,
    name: 'Flutter',
    icon: <SiFlutter className="text-sky-500" />,
    purpose: "Google's UI toolkit for natively compiled mobile (and web) apps",
  },
  {
    id: 6,
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-700" />,
    purpose: 'NoSQL database for flexible data storage in modern web/mobile apps',
  },
  {
    id: 7,
    name: 'Figma',
    icon: <FaFigma className="text-pink-500" />,
    purpose: 'Industry-standard design tool for UI/UX design & collaborative prototyping',
  },
  {
    id: 8,
    name: 'Firebase',
    icon: <SiFirebase className="text-yellow-500" />,
    purpose: 'Scalable BaaS for authentication, storage, and real-time DBs',
  },
];

const Technologies: React.FC = () => {
  return (
    <section className="w-full min-h-screen px-4 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center">
<motion.div
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-16"
>
  <h2 className="relative inline-block text-4xl font-bold text-white">
    {/* Waving letters */}
    {"Technologies We Use".split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          delay: index * 0.07,
          ease: "easeInOut",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}

    {/* Animated underline */}
    <motion.span
      className="absolute left-0 bottom-0 h-[2px] bg-white rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
      }}
    />
  </h2>
</motion.div>




        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: tech.id * 0.1 }}
              className="p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center text-5xl mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-300">{tech.purpose}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
