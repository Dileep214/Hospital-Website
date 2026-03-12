import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, ExternalLink } from 'lucide-react';

const Emergency = () => {
    return (
        <SectionWrapper id="emergency" className="relative !py-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-accent rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl"
            >
                {/* Animated background pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 border-[60px] border-white/20 rounded-full"
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-md"
                    >
                        <Phone size={40} className="text-white" />
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Immediate Assistance?</h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                        Our pediatric emergency response team is available 24/7. Whether it's a high fever or an unexpected injury, we are here for you and your little one.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <a
                            href="tel:+919491649111"
                            className="px-10 py-5 bg-white text-accent rounded-full font-bold text-2xl shadow-xl hover:scale-105 transition-transform flex items-center gap-4"
                        >
                            <Phone size={24} />
                            +91 94916 49111
                        </a>
                        <div className="flex items-center gap-8 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                            <div className="flex items-center gap-3 text-left">
                                <Clock className="text-white/70" size={24} />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/50">Response Time</p>
                                    <p className="font-bold">Prompt Care</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-white/20" />
                            <div className="flex items-center gap-3 text-left">
                                <MapPin className="text-white/70" size={24} />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/50">Location</p>
                                    <p className="font-bold">Tuni, AP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default Emergency;
