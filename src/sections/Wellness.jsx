import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Wellness = () => {
    return (
        <SectionWrapper id="wellness" bg="cream" className="relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative rounded-[50px] overflow-hidden shadow-2xl skew-y-1">
                            <img
                                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2031&auto=format&fit=crop"
                                alt="Calm child and therapist"
                                className="w-full aspect-[4/5] object-cover"
                            />
                        </div>
                        {/* Float labels */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border border-gray-100"
                        >
                            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-navy">Emotional Support</p>
                                <p className="text-[10px] text-navy/50">Guided sessions</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="lg:w-1/2 order-1 lg:order-2">
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Psychological Wellness
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">Nurturing Minds <br />Just as We Heal Bodies.</h2>
                    <p className="text-lg text-navy/70 leading-relaxed mb-8">
                        A child's emotional health is the foundation of their physical recovery. Our pediatric psychologists work alongside doctors to ensure every visit is a positive building block in your child's developmental journey.
                    </p>

                    <ul className="space-y-6 mb-10">
                        {[
                            "Play-based assessment techniques",
                            "Anxiety management for surgical procedures",
                            "Parent coaching for behavioral milestones",
                            "Neurodivergent-friendly clinic environments"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 group">
                                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-125 transition-transform">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span className="font-medium text-navy/80">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Button variant="peach">Explore Wellness Programs</Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Wellness;
