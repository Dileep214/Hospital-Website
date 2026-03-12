import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Baby, Zap, Activity, Brain, Eye, Headphones, Shield } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Neonatology",
            icon: <Baby size={40} className="text-primary" />,
            desc: "Advanced specialized newborn care including NICU facilities.",
            color: "bg-primary/5"
        },
        {
            title: "Pediatric Care",
            icon: <Zap size={40} className="text-accent" />,
            desc: "General pediatric consultations for children of all ages.",
            color: "bg-accent/5"
        },
        {
            title: "24/7 Emergency",
            icon: <Shield size={40} className="text-secondary" />,
            desc: "Round-the-clock emergency services for urgent childhood medical needs.",
            color: "bg-secondary/5",
            id: "shield-icon"
        },
        {
            title: "Immunizations",
            icon: <Activity size={40} className="text-primary" />,
            desc: "Routine vaccinations in a gentle, stress-free setting.",
            color: "bg-primary/5"
        },
        {
            title: "NICU Unit",
            icon: <Brain size={40} className="text-accent" />,
            desc: "Newborn Intensive Care Unit for specialized medical support.",
            color: "bg-accent/5"
        },
        {
            title: "Child Health Checkups",
            icon: <Eye size={40} className="text-secondary" />,
            desc: "Regular screening and developmental monitoring for children.",
            color: "bg-secondary/5"
        }
    ];

    return (
        <SectionWrapper id="services" className="bg-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Specialized Care</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4">Pioneering Pediatric <br />Medical Services.</h2>
                </div>
                <p className="text-navy/60 max-w-sm">
                    We offer a full spectrum of pediatric services tailored to the unique physiological and psychological needs of children.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((s, i) => (
                    <Card key={i} className="flex flex-col items-start gap-6">
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                                rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3
                            }}
                            className={`p-5 rounded-2xl ${s.color}`}
                        >
                            {s.icon}
                        </motion.div>
                        <div>
                            <h3 className="text-2xl font-bold text-navy mb-3">{s.title}</h3>
                            <p className="text-navy/70 leading-relaxed mb-6">
                                {s.desc}
                            </p>
                            <button className="text-primary font-bold group flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Services;
