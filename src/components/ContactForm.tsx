'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { toast, Toaster } from 'sonner';
import { Send, Loader2 } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    location: z.string().min(3, { message: "Location is required." }),
    requirements: z.enum(['Assam Type', 'G+0', 'G+1', 'G+2', 'Renovation', 'Interior']),
    budget: z.enum(['15-20L', '20-30L', '30-50L', '50-1Cr', '1Cr+']),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        if (!supabase) {
            toast.error('Supabase connection is not configured. Please check .env.local.');
            return;
        }

        setIsSubmitting(true);
        try {
            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        name: data.name,
                        phone: data.phone,
                        location: data.location,
                        requirements: data.requirements,
                        budget: data.budget,
                        created_at: new Date()
                    }
                ]);

            if (error) throw error;

            toast.success('Your quote request has been sent successfully!');
            reset();
        } catch (error: any) {
            console.error('Error submitting form:', error);
            toast.error('Failed to send request. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 bg-brand-charcoal text-white relative flex items-center justify-center">
            <Toaster position="top-center" expand={true} richColors />

            {/* Decorative center accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-brand-blue/5 rounded-full blur-[150px] -z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <h2 className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-6 text-center lg:text-left">
                            Inquiry
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight text-center lg:text-left">
                            Let&apos;s Design Your <br className="hidden lg:block" /> <span className="gradient-text">Future</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed text-center lg:text-left">
                            We take pride in our personalized approach. Fill out the details below, and let&apos;s start the conversation about your next landmark residence.
                        </p>

                        <div className="space-y-8 flex flex-col items-center lg:items-start">
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 transition-colors group-hover:border-brand-blue/50">
                                    <Send className="text-brand-blue w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Responsiveness</p>
                                    <p className="text-white text-lg font-medium">Within 24 Hours</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 bg-white/[0.02] backdrop-blur-xl p-8 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden relative"
                    >
                        {/* Inner decorative light */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[100px] -z-0" />

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-2">Full Name</label>
                                    <input
                                        {...register('name')}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 placeholder:text-gray-600"
                                        placeholder="Enter your name"
                                    />
                                    {errors.name && <p className="text-red-500 text-[10px] ml-2 mt-1 uppercase tracking-wider">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-2">Phone Number</label>
                                    <input
                                        {...register('phone')}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 placeholder:text-gray-600"
                                        placeholder="+91 00000 00000"
                                    />
                                    {errors.phone && <p className="text-red-500 text-[10px] ml-2 mt-1 uppercase tracking-wider">{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-2">Project Location</label>
                                <input
                                    {...register('location')}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 placeholder:text-gray-600"
                                    placeholder="Where is your site located?"
                                />
                                {errors.location && <p className="text-red-500 text-[10px] ml-2 mt-1 uppercase tracking-wider">{errors.location.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-2">Type of Project</label>
                                    <div className="relative">
                                        <select
                                            {...register('requirements')}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 appearance-none"
                                        >
                                            <option value="" className="bg-brand-charcoal">Select Option</option>
                                            <option value="Assam Type" className="bg-brand-charcoal">Assam Type</option>
                                            <option value="G+0" className="bg-brand-charcoal">G+0</option>
                                            <option value="G+1" className="bg-brand-charcoal">G+1</option>
                                            <option value="G+2" className="bg-brand-charcoal">G+2</option>
                                            <option value="Renovation" className="bg-brand-charcoal">Renovation</option>
                                            <option value="Interior" className="bg-brand-charcoal">Interior</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                    {errors.requirements && <p className="text-red-500 text-[10px] ml-2 mt-1 uppercase tracking-wider">{errors.requirements.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-2">Planned Budget</label>
                                    <div className="relative">
                                        <select
                                            {...register('budget')}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 appearance-none"
                                        >
                                            <option value="" className="bg-brand-charcoal">Select Range</option>
                                            <option value="15-20L" className="bg-brand-charcoal">15-20 Lakhs</option>
                                            <option value="20-30L" className="bg-brand-charcoal">20-30 Lakhs</option>
                                            <option value="30-50L" className="bg-brand-charcoal">30-50 Lakhs</option>
                                            <option value="50-1Cr" className="bg-brand-charcoal">50 Lakhs - 1 Cr</option>
                                            <option value="1Cr+" className="bg-brand-charcoal">1 Cr +</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                    {errors.budget && <p className="text-red-500 text-[10px] ml-2 mt-1 uppercase tracking-wider">{errors.budget.message}</p>}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand-blue hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.2em] py-6 rounded-2xl transition-all duration-300 transform active:scale-95 flex items-center justify-center space-x-3 disabled:opacity-70 mt-4 shadow-xl shadow-brand-blue/10"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin w-5 h-5" />
                                        <span>Processing...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Request Exploration Call</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
