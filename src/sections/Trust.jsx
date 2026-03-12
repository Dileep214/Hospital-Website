import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { ShieldCheck, Thermometer, Clock, Sparkles } from 'lucide-react';

const Trust = () => {
    const stats = [
        { icon: <ShieldCheck size={32} />, label: "Certified Excellence", sub: "JCI Accredited" },
        { icon: <Thermometer size={32} />, label: "Safety First", sub: "100% Hygiene Score" },
        { icon: <Clock size={32} />, label: "24/7 Availability", sub: "On-call Specialists" },
        { icon: <Sparkles size={32} />, label: "Kid-Friendly", sub: "Joy-focused Design" }
    ];

    return (
        <SectionWrapper id="trust" bg="cream" className="!pb-32">
            <div className="bg-white rounded-[60px] p-12 md:p-20 shadow-2xl relative overflow-hidden border border-gray-50 text-center">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-12">Rated <span className="text-secondary">4.7/5</span> by the Parents <br />of Tuni. <span className="text-primary italic">Expert Trust.</span></h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-16 border-b border-gray-100">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                    className="w-16 h-16 bg-cream rounded-3xl flex items-center justify-center text-primary mb-4 shadow-inner"
                                >
                                    {stat.icon}
                                </motion.div>
                                <h4 className="font-bold text-navy text-lg">{stat.label}</h4>
                                <p className="text-navy/50 text-xs font-semibold uppercase tracking-widest">{stat.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-navy rounded-full" />
                            <p className="font-bold text-left leading-tight text-navy">American Board <br />of Pediatrics</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-navy rounded-full" />
                            <p className="font-bold text-left leading-tight text-navy">Clinical Hygiene <br />Standard ISO:9001</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-navy rounded-full" />
                            <p className="font-bold text-left leading-tight text-navy">Global Safety <br />Foundation</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Trust;
