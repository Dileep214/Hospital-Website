import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Stethoscope } from 'lucide-react';

const Doctors = () => {
    const doctors = [
        {
            name: "Dr. Shankar",
            specialty: "Senior Pediatrician & Neonatologist",
            education: "Highly Recommended Physician",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
            color: "bg-primary/10"
        }
    ];

    return (
        <SectionWrapper id="doctors" className="bg-white">
            <div className="text-center mb-16">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Expert Hands</span>
                <h2 className="text-3xl md:text-5xl font-bold text-navy mt-4 mb-6">Meet Your Child's <br />Dedicated Care Team.</h2>
                <p className="text-navy/70 max-w-2xl mx-auto text-lg leading-relaxed">
                    Our specialists are more than doctors—they are researchers, educators, and most importantly, experts at making children feel at ease.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {doctors.map((doc, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        <div className={`relative aspect-[3/4] rounded-[40px] overflow-hidden mb-6 shadow-xl ${doc.color}`}>
                            <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50">
                                <Stethoscope size={20} className="text-primary" />
                            </div>
                        </div>

                        <div className="px-4">
                            <h3 className="text-2xl font-bold text-navy mb-1">{doc.name}</h3>
                            <p className="text-primary font-semibold mb-3">{doc.specialty}</p>

                            <div className="flex items-center gap-2 text-navy/60 text-sm">
                                <GraduationCap size={16} />
                                <span>{doc.education}</span>
                            </div>

                            <div className="mt-6 flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-navy/40 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                                    <Award size={18} />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-navy/40 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Doctors;
