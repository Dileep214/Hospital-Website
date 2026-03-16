import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import hospitalBg from '../assets/hospital-bg.png';

const TopHero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={hospitalBg} 
                    alt="Shankar Children's Hospital" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl xl:text-9xl font-black text-white tracking-tighter drop-shadow-2xl"
                >
                    Shankar <br />
                    <span className="text-primary italic">Children's</span> <br />
                    Hospital
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-white/80 mt-8 text-xl md:text-2xl font-medium tracking-widest uppercase font-inter"
                >
                    Care Beyond Recovery
                </motion.p>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    delay: 1.5, 
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 cursor-pointer group"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-xs font-bold uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                    Scroll Down
                </span>
                <ChevronDown className="w-6 h-6 group-hover:text-white transition-colors" />
            </motion.div>
        </section>
    );
};

export default TopHero;
