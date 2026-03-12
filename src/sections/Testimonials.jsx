import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            text: "KindredCare didn't just treat my daughter's flu; they treated her like a person. The doctor spent 10 minutes talking about her favorite book before the exam even started. That level of empathy is rare.",
            author: "Jessica Miller",
            role: "Parent of 5-year old",
            image: "https://i.pravatar.cc/150?u=jess"
        },
        {
            text: "As a first-time parent, I was anxious about everything. The staff here made me feel empowered and educated. Their 24/7 emergency line has been a lifesaver on more than one occasion.",
            author: "David Chen",
            role: "Parent of Newborn",
            image: "https://i.pravatar.cc/150?u=david"
        },
        {
            text: "The clinic environment is so bright and welcoming. My son actually looks forward to his checkups now. They've truly mastered the art of pediatric care with a friendly touch.",
            author: "Sarah Thompson",
            role: "Parent of 8-year old",
            image: "https://i.pravatar.cc/150?u=sarah"
        }
    ];

    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <SectionWrapper id="testimonials" className="bg-navy overflow-hidden">
            <div className="flex flex-col items-center">
                <Quote className="text-primary mb-8" size={60} fill="currentColor" opacity={0.2} />

                <div className="relative w-full max-w-4xl min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center px-6"
                        >
                            <p className="text-2xl md:text-3xl font-poppins text-white leading-relaxed mb-12 italic">
                                "{testimonials[index].text}"
                            </p>
                            <div className="flex flex-col items-center">
                                <img
                                    src={testimonials[index].image}
                                    alt={testimonials[index].author}
                                    className="w-20 h-20 rounded-full border-4 border-primary/30 mb-4"
                                />
                                <h4 className="text-xl font-bold text-white">{testimonials[index].author}</h4>
                                <p className="text-primary/70 font-medium">{testimonials[index].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0 md:-px-10">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden md:block"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden md:block"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex gap-3 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-primary w-8' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
