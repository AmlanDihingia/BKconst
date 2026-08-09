'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                style={{
                    backgroundImage: 'url("/construction_site.png")',
                }}
            >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 md:mb-6"
                    >
                        Dedicated & Trusted Construction Partner
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight"
                    >
                        Turning Ideas into <br className="hidden md:block" />
                        <span className="gradient-text">Strong Foundations.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Building not just projects, but <span className="text-white font-medium">lasting structures</span> and <span className="text-white font-medium">long-term relationships</span> through <span className="text-brand-blue">trust</span>, <span className="text-brand-blue">quality</span>, and <span className="text-brand-blue">commitment</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto"
                    >
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto bg-brand-blue hover:bg-white text-white hover:text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_30px_rgba(37,99,235,0.3)] text-center"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href="#services"
                            className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10" />
        </section>
    );
};

export default Hero;
