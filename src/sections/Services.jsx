import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Baby, Activity, ShieldCheck, Heart, Star, Sparkles, ClipboardList } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Pediatric Consultation",
            icon: <Activity size={40} className="text-primary" />,
            desc: "Expert diagnosis and treatment for all childhood illnesses and regular health check-ups.",
            color: "bg-primary/5",
            points: ["Expert diagnosis", "Regular check-ups"]
        },
        {
            title: "Newborn & Infant Care",
            icon: <Baby size={40} className="text-accent" />,
            desc: "Specialized care for newborns, including growth monitoring and nutrition guidance.",
            color: "bg-accent/5",
            points: ["Newborn check-ups", "Feeding guidance"]
        },
        {
            title: "Vaccination (Immunization)",
            icon: <ShieldCheck size={40} className="text-secondary" />,
            desc: "All routine childhood vaccines to protect against measles, polio, and more.",
            color: "bg-secondary/5",
            points: ["Routine vaccines", "Disease protection"]
        },
        {
            title: "Childhood Illnesses",
            icon: <Heart size={40} className="text-primary" />,
            desc: "Treatment for viral fever, cold, cough, infections, and allergies.",
            color: "bg-primary/5",
            points: ["Viral fever care", "Infection treatment"]
        },
        {
            title: "Emergency Child Care",
            icon: <Activity size={40} className="text-accent" />,
            desc: "24-hour emergency services for sudden fever, breathing problems, or injuries.",
            color: "bg-accent/5",
            points: ["24/7 Emergency", "Critical care"]
        },
        {
            title: "Developmental Monitoring",
            icon: <Sparkles size={40} className="text-secondary" />,
            desc: "Growth tracking and developmental screening for healthy child progress.",
            color: "bg-secondary/5",
            points: ["Growth tracking", "Screening advice"]
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
                            <div className="flex flex-wrap gap-2 mb-6">
                                {s.points.map((p, pi) => (
                                    <span key={pi} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-navy/40 px-2 py-1 rounded-md border border-gray-100">
                                        {p}
                                    </span>
                                ))}
                            </div>
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
