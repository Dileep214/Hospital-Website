import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone } from 'lucide-react';

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
    const [showSupportNumber, setShowSupportNumber] = useState(false);

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
                        <button 
                            onClick={() => setShowSupportNumber(!showSupportNumber)}
                            className="px-6 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 min-w-[180px]"
                        >
                            {showSupportNumber ? (
                                <a href="tel:9959481755" className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <Phone size={18} /> 9959481755
                                </a>
                            ) : (
                                "Contact Support"
                            )}
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

            {/* Social and App Links */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-navy/10 pt-8 gap-6 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-4">
                    <span className="text-navy font-semibold text-lg font-inter">Follow us on</span>
                    <div className="flex items-center gap-2">
                        {/* Facebook */}
                        <a 
                            href="https://www.facebook.com/share/1NCuv8mmfV/?mibextid=wwXIfr" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[38px] h-[38px] rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                        >
                            <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="w-[38px] h-[38px] rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
                            <svg className="w-[16px] h-[16px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/shankar_childrens_hospital?igsh=eXFybjl3aGZ1anFk" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#405DE6] opacity-100"></div>
                            <svg className="w-[18px] h-[18px] text-white relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-[38px] h-[38px] rounded-full bg-[#0077b5] flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
                            <svg className="w-[16px] h-[16px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="#" className="w-[38px] h-[38px] rounded-full bg-black flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
                            <svg className="w-[14px] h-[14px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://play.google.com/store/apps/details?id=com.docterz.connect.shankarchildrenshospital&hl=en_IN" target="_blank" rel="https://play.google.com/store/apps/details?id=com.docterz.connect.shankarchildrenshospital&pcampaignid=web_share" className="hover:opacity-90 transition-opacity hover:-translate-y-0.5 transform duration-300">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[40px] object-contain" />
                    </a>
                    <a href="https://apps.apple.com/in/app/shankar-childrens-hospital/id1616777116" target="_blank" rel="App Link" className="hover:opacity-90 transition-opacity hover:-translate-y-0.5 transform duration-300">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-[40px] object-contain" />
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQ;
