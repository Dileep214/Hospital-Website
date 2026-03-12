import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Heart, Shield, Star, Smile } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Heart className="text-primary" size={32} />,
            title: "Child-First Philosophy",
            desc: "Every clinical decision is guided by the emotional and physical needs of the child."
        },
        {
            icon: <Shield className="text-secondary" size={32} />,
            title: "Safe & Secure",
            desc: "State-of-the-art hygiene and safety protocols used in world-class pediatric institutions."
        },
        {
            icon: <Star className="text-accent" size={32} />,
            title: "Expert Specialists",
            desc: "Our board-certified pediatricians bring decades of specialized experience to your family."
        },
        {
            icon: <Smile className="text-primary" size={32} />,
            title: "Anxiety-Free Care",
            desc: "Friendly environments designed to reduce stress for children and provide peace of mind for parents."
        }
    ];

    return (
        <SectionWrapper id="about" bg="cream">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Our Mission is Simple: <br /><span className="text-secondary">Healthy Kids, Happy Parents.</span></h2>
                <p className="text-navy/70 max-w-2xl mx-auto text-lg leading-relaxed">
                    Founded in Tuni, Shankar Children's Hospital (led by Dr. Shankar) is dedicated to providing specialized pediatric and neonatal care. We believe that child healthcare should be both technologically advanced and emotionally nurturing, ensuring the best start for every newborn and the best care for every child.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {highlights.map((h, i) => (
                    <div key={i} className="group p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white hover:bg-white hover:shadow-xl transition-all duration-500">
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                            className="w-16 h-16 bg-white rounded-2xl shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                        >
                            {h.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-navy mb-4">{h.title}</h3>
                        <p className="text-navy/60 leading-relaxed text-sm">{h.desc}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default About;
