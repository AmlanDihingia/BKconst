'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-32 bg-brand-charcoal relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -mr-48 -mt-48" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1, type: 'spring', damping: 20 }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-6">
                            Our Legacy
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
                            Excellence in Every <br /> <span className="gradient-text">Square Foot</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                            We are a dedicated and trusted construction company committed to delivering high-quality building solutions. With strong experience in <span className="text-white font-medium">residential</span>, <span className="text-white font-medium">commercial</span>, and <span className="text-white font-medium">infrastructure</span> projects, we focus on excellence, safety, and timely completion.
                        </p>
                        <div className="p-8 bg-brand-slate/30 border-l-4 border-brand-blue rounded-r-2xl mb-12">
                            <p className="text-white text-xl font-medium italic leading-relaxed">
                                &quot;Our mission is to turn ideas into strong foundations and lasting structures.&quot;
                            </p>
                        </div>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                            Our team of skilled engineers, supervisors, and workers ensures every project is built with precision, durability, and modern design standards. From planning to execution, we maintain transparency, quality materials, and customer satisfaction as our top priorities.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                'Quality Craftsmanship',
                                'Transparent Process',
                                'Timely Delivery',
                                'Sustainable Vision'
                            ].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                        <CheckCircle2 className="text-brand-blue w-4 h-4" />
                                    </div>
                                    <span className="text-gray-300 font-medium tracking-wide">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1, type: 'spring', damping: 20 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
                                alt="Construction Excellence"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-charcoal/30 group-hover:bg-brand-charcoal/10 transition-colors duration-500" />
                        </div>

                        {/* Decorative frame */}
                        <div className="absolute top-10 -right-10 w-full h-full border-2 border-brand-blue/20 rounded-3xl -z-0 hidden lg:block" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
