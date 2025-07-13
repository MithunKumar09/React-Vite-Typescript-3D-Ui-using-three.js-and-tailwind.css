// frontend/src/components/Services/Services.tsx
import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPencilRuler } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import Background3D from './Background3D';
import { motion } from 'framer-motion';

const services = [
    {
        icon: (
            <FaLaptopCode
                size={30}
                className="text-cyan-400 transition-transform duration-300 group-hover:rotate-[360deg] group-active:rotate-[360deg]"
            />
        ),
        title: 'Custom Software Development',
        description:
            'We develop robust and scalable custom software tailored specifically to your business processes, improving operational efficiency and reducing costs. Our solutions evolve with your business to ensure long-term value.',
    },
    {
        icon: (
            <MdWeb
                size={30}
                className="text-cyan-400 transition-transform duration-300 group-hover:rotate-[360deg] group-active:rotate-[360deg]"
            />
        ),
        title: 'Web Application Development',
        description:
            'Our web applications are secure, responsive, and intuitive — designed with modern frameworks to offer excellent performance and usability across all devices. Built to scale as your business grows.',
    },
    {
        icon: (
            <FaMobileAlt
                size={30}
                className="text-cyan-400 transition-transform duration-300 group-hover:rotate-[360deg] group-active:rotate-[360deg]"
            />
        ),
        title: 'Mobile App Development (iOS/Android)',
        description:
            'From strategy to deployment, we build mobile apps that provide a smooth and engaging user experience on both iOS and Android platforms. Be it native or cross-platform, we ensure performance and usability.',
    },
    {
        icon: (
            <FaPencilRuler
                size={30}
                className="text-cyan-400 transition-transform duration-300 group-hover:rotate-[360deg] group-active:rotate-[360deg]"
            />
        ),
        title: 'UI/UX Design & Prototyping',
        description:
            'Our team crafts visually stunning and intuitive interfaces that enhance user satisfaction. We prioritize design thinking and iterative prototyping to transform your ideas into interactive, user-friendly products.',
    },
];

const Services: React.FC = () => {
    return (
        <section
            id="services"
            className="relative z-10 min-h-screen py-20 bg-[rgba(13,13,43,0.9)] text-white px-4 sm:px-8 md:px-16 lg:px-28 xl:px-40"
        >
            <Background3D />
            <div className="relative z-10 max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
                    Our <span className="text-cyan-400">Services</span>
                </h2>
                <p className="text-center text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-12">
                    We create cutting-edge digital experiences with advanced 3D technology, interactive data visualization, and immersive user interfaces.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.6, delay: index * 0.2 }}
                            className="bg-[#111132] p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/40 transition-transform transform hover:-translate-y-2 hover:scale-[1.03] duration-300 group"
                        >

                            <div className="mb-4 flex items-center gap-4">
                                <div className="bg-cyan-500/10 p-3 rounded-full">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold group-hover:text-cyan-400">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <button className="text-cyan-400 text-sm font-medium hover:underline hover:text-white transition">
                                Learn More →
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
