'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    Map,
    HardHat,
    Wrench,
    Paintbrush
} from 'lucide-react';

const services = [
    {
        title: 'Residential Construction',
        description: 'Building high-quality homes with precision, durability, and modern design standards.',
        icon: HardHat,
        image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000',
    },
    {
        title: 'Commercial Projects',
        description: 'Delivering excellence in commercial building solutions for modern business needs.',
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    },
    {
        title: 'Renovation & Remodeling',
        description: 'Transforming and upgrading existing structures with expert craftsmanship.',
        icon: Wrench,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000',
    },
    {
        title: 'Interior & Exterior Works',
        description: 'Comprehensive design and finishing works to elevate every square foot.',
        icon: Paintbrush,
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    },
    {
        title: 'Infrastructure Development',
        description: 'Specializing in road construction and large-scale infrastructure projects.',
        icon: Map,
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000',
    },
];

const ServicesGrid = () => {
    return (
        <section id="services" className="py-32 bg-brand-slate/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-6">
                        Expertise
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Tailored <span className="gradient-text">Solutions</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        From the initial blueprint to the final finishing touch, we provide
                        everything needed to bring your architectural vision to life.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.8,
                                delay: (index % 3) * 0.2,
                                type: 'spring',
                                damping: 20
                            }}
                            className="bg-brand-charcoal rounded-[2rem] border border-white/5 hover:border-brand-blue/40 transition-all duration-500 group relative overflow-hidden h-[450px] md:h-[500px] flex flex-col shadow-xl"
                        >
                            {/* Image Background with Gradient Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/90 to-transparent" />
                            </div>

                            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-brand-blue transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                    <service.icon className="text-brand-blue w-7 h-7 md:w-8 md:h-8 group-hover:text-white transition-colors duration-500" />
                                </div>

                                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 group-hover:text-brand-blue transition-colors">{service.title}</h4>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                    Learn More
                                    <div className="w-8 h-[1px] bg-brand-blue ml-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
