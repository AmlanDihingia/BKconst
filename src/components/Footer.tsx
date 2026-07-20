'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-brand-charcoal border-t border-white/5 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start"
                    >
                        <Link href="/" className="flex items-center mb-8">
                            <img
                                src="/logo.png"
                                alt="BK Construction"
                                className="h-20 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed">
                            Building not just projects, but long-term relationships with our clients through trust, quality, and commitment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center md:text-left"
                    >
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="#about" className="hover:text-brand-blue transition-colors font-medium">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-brand-blue transition-colors font-medium">Our Expertise</Link></li>
                            <li><Link href="#contact" className="hover:text-brand-blue transition-colors font-medium">Inquiry</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center md:text-left"
                    >
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Connect</h4>
                        <div className="flex space-x-6 justify-center md:justify-start">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-brand-blue/10 transition-all border border-white/5"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]"
                >
                    <p className="text-center md:text-left">© {new Date().getFullYear()} BK Construction. Built with Excellence.</p>
                    <div className="mt-8 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 items-center">
                        <span>Guwahati, Assam</span>
                        <span>+91 98765 43210</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
