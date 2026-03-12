import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "Where exactly is Shankar Children's Hospital located?",
            answer: "We are located at Park Center, above SBI Bank, on Tuni Main Road (opposite Kanaka Durga Temple), Tuni – 533401."
        },
        {
            question: "Is the hospital open 24/7 for emergencies?",
            answer: "Yes, we are open 24 hours every day for both general pediatric care and emergencies. Our dedicated team is always ready to assist."
        },
        {
            question: "Who is the lead pediatrician at the hospital?",
            answer: "The hospital is led by Dr. Shankar, a highly recommended pediatrician and neonatologist with extensive experience in child and newborn care."
        },
        {
            question: "What services do you provide for newborns?",
            answer: "We specialize in neonatal care (neonatology) and have specialized units for newborn care including NICU facilities for infants requiring intensive medical attention."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <SectionWrapper id="faq" bg="white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Common Concerns</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-8">Everything Parents <br />Need to Know.</h2>
                    <p className="text-lg text-navy/70 leading-relaxed mb-8">
                        We believe that informed parents are the best partners in a child's health. If you have a question not listed here, please don't hesitate to reach out.
                    </p>
                    <div className="p-8 bg-secondary/10 rounded-3xl border border-secondary/20">
                        <h4 className="text-xl font-bold text-navy mb-2">Still have questions?</h4>
                        <p className="text-navy/60 mb-6">Our patient coordinators are ready to help you.</p>
                        <button className="px-6 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow">
                            Contact Support
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-cream/30">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            >
                                <span className="font-bold text-navy text-lg">{faq.question}</span>
                                <div className={`p-2 rounded-full transition-colors ${activeIndex === i ? 'bg-primary text-white' : 'bg-gray-100'}`}>
                                    {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-navy/70 leading-relaxed border-t border-gray-100/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQ;
