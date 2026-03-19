import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, ShieldCheck, Activity } from 'lucide-react';
import Button from '../components/Button';
const heroImg = '/doctor.jpeg';

const Hero = () => {
    const [showReviews, setShowReviews] = useState(false);
    const [showServices, setShowServices] = useState(false);

    const mainServices = [
        {
            title: "Pediatric Consultation",
            icon: <Activity className="text-primary" />,
            points: ["Child specialist doctor consultation", "Diagnosis and treatment for children's illnesses", "Regular health check-ups for babies and kids"]
        },
        {
            title: "Newborn & Infant Care",
            icon: <Heart className="text-secondary" />,
            points: ["Newborn baby check-ups", "Growth and development monitoring", "Feeding and nutrition guidance"]
        },
        {
            title: "Vaccination (Immunization)",
            icon: <ShieldCheck className="text-primary" />,
            points: ["All routine childhood vaccines", "Protection against diseases like measles, polio, etc."]
        },
        {
            title: "Childhood Illness Treatment",
            icon: <Activity className="text-accent" />,
            points: ["Viral fever, Cold and cough", "Infections and allergies", "Stomach problems in children"]
        },
        {
            title: "Emergency Child Care",
            icon: <Activity className="text-secondary" />,
            points: ["24-hour pediatric emergency services", "Treatment for sudden fever, breathing problems, or injuries"]
        },
        {
            title: "Pediatric Monitoring",
            icon: <Activity className="text-primary" />,
            points: ["Growth tracking", "Developmental screening for children", "Advice for healthy child development"]
        },
        {
            title: "Parent Guidance",
            icon: <Star className="text-accent" />,
            points: ["Nutrition and diet advice", "Child health counseling for parents"]
        }
    ];
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--color-primary-10),_transparent_50%),radial-gradient(circle_at_bottom_left,_var(--color-secondary-10),_transparent_50%)] bg-cream">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 180, 270, 360],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
                    {/* Left Content Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-7/12 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/60 backdrop-blur-md border border-primary/20 rounded-full shadow-sm hover:border-primary/40 transition-colors"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-bold tracking-wide text-primary uppercase font-inter">
                                Trusted Pediatric & Neonatal Care
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 text-navy tracking-tight">
                            Care That Your <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-primary italic">Little Heroes</span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                    className="absolute bottom-2 left-0 h-4 bg-primary/10 -z-10 rounded-sm"
                                />
                            </span> <br />
                            Deserve.
                        </h1>

                        <p className="text-xl md:text-2xl text-navy/70 mb-12 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-nunito font-medium">
                            Shankar Children's Hospital in Tuni provides world-class healthcare for children 24x7. Led by the renowned <span className="text-navy font-bold underline decoration-secondary decoration-2">Dr. Shankar</span>, we combine expertise with a gentle touch.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-14">
                            <Button
                                variant="primary"
                                className="text-lg px-10 py-4 shadow-xl shadow-primary/20 hover:shadow-primary/40"
                                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.docterz.connect.shankarchildrenshospital&hl=en_IN", "_blank")}
                            >
                                Book Appointment
                            </Button>
                            <Button
                                variant="secondary"
                                className="text-lg px-10 py-4 flex items-center justify-center gap-2"
                                onClick={() => setShowServices(true)}
                            >
                                <Activity className="w-5 h-5" />
                                Our Services
                            </Button>
                        </div>

                        {/* Social Proof */}
                        <div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8 border-t border-navy/5 cursor-pointer relative group"
                            onClick={() => setShowReviews(!showReviews)}
                        >
                            <div className="absolute inset-x-0 -inset-y-2 bg-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.1, zIndex: 50 }}
                                        className="w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-md transform transition-all cursor-pointer"
                                    >
                                        <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Happy Parent" className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                                <div className="w-14 h-14 rounded-full border-4 border-white bg-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                                    +5k
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="flex text-accent mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-sm font-bold text-navy">
                                    10,000+ Happy Recoveries
                                    <span className="block text-xs font-medium text-navy/50">Across Tuni & Surrounding Areas</span>
                                </p>
                            </div>
                        </div>

                        {/* Reviews Overlay */}
                        <AnimatePresence>
                            {showReviews && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-navy/60 backdrop-blur-xl"
                                        onClick={() => setShowReviews(false)}
                                    />

                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                        className="relative bg-white w-full max-w-4xl max-h-[85vh] rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
                                    >
                                        <div className="p-8 md:p-10 border-b border-gray-100 flex justify-between items-center bg-accent/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                                                    <Star className="w-6 h-6 fill-current" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl md:text-3xl font-black text-navy">Patient Reviews</h2>
                                                    <p className="text-navy/60 font-medium text-sm">Real experiences from our parents</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setShowReviews(false)}
                                                className="p-3 bg-white hover:bg-gray-100 rounded-2xl shadow-lg border border-gray-100 transition-all text-navy/40 hover:text-navy"
                                            >
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                                            <div className="grid grid-cols-1 gap-6 md:gap-8">
                                                {[
                                                    {
                                                        name: "RAJU",
                                                        date: "07 Oct 2024",
                                                        text: "Very good experience at Shankar Children's Hospital. Waiting time was very short and the staff responded quickly. The doctor treated my child with great care.",
                                                        tags: ["Short wait"]
                                                    },
                                                    {
                                                        name: "Vasudha",
                                                        date: "03 May 2024",
                                                        text: "Excellent pediatric care. The doctor explained everything clearly and the hospital maintains very clean and sterilised equipment. Staff are very gentle with children.",
                                                        tags: ["Professional counselling", "Sterilised equipment", "Quick service", "Gentle care"]
                                                    },
                                                    {
                                                        name: "Amar Teja",
                                                        date: "12 Aug 2024",
                                                        text: "Shankar hospital is very clean and the behavior with patients is very good. Dr. Shankar sir is a very good human being first and then a great doctor. Overall very satisfied.",
                                                        tags: ["Clean hospital", "Good behaviour", "Great doctor"]
                                                    }
                                                ].map((rev, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="bg-cream/20 p-8 rounded-3xl border border-accent/5 hover:border-accent/20 transition-all"
                                                    >
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div>
                                                                <h4 className="font-bold text-navy text-lg">{rev.name}</h4>
                                                                <p className="text-xs text-navy/40 flex items-center gap-1 mt-1">
                                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                                    {rev.date}
                                                                </p>
                                                            </div>
                                                            <div className="flex text-accent">
                                                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                                                            </div>
                                                        </div>
                                                        <p className="text-navy/70 italic leading-relaxed mb-4 text-base">
                                                            "{rev.text}"
                                                        </p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {rev.tags.map((tag, tIdx) => (
                                                                <span key={tIdx} className="inline-flex items-center gap-1 text-[11px] font-bold bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-100/50">
                                                                    👍 {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-8 border-t border-gray-100 bg-gray-50/50 flex flex-col md:flex-row justify-center gap-4">
                                            <Button
                                                onClick={() => window.open('https://www.justdial.com/Tuni/Shankar-Childrens-Hospital-About-Adb-Bank-Tuni-Main-Road/9999P8854-8854-211129175752-K2V7_BZDET', '_blank')}
                                                className="px-8 py-4 bg-[#0076D7] hover:bg-[#005fa3] text-white border-none shadow-lg"
                                            >
                                                View More Reviews on Justdial
                                            </Button>
                                            <Button variant="accent" onClick={() => setShowReviews(false)} className="px-12 py-4">
                                                Close Reviews
                                            </Button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>


                        {/* Services Overlay */}
                        <AnimatePresence>
                            {showServices && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-navy/60 backdrop-blur-xl"
                                        onClick={() => setShowServices(false)}
                                    />

                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                        className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
                                    >
                                        <div className="p-8 md:p-12 border-b border-gray-100 flex justify-between items-center bg-cream/30">
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-black text-navy">Our Main Services</h2>
                                                <p className="text-navy/60 font-medium mt-2">Comprehensive health care for your little ones</p>
                                            </div>
                                            <button
                                                onClick={() => setShowServices(false)}
                                                className="p-3 bg-white hover:bg-gray-100 rounded-2xl shadow-lg border border-gray-100 transition-all text-navy/40 hover:text-navy"
                                            >
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                                {mainServices.map((service, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="bg-cream/20 p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all group"
                                                    >
                                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                                                            {React.cloneElement(service.icon, { size: 28 })}
                                                        </div>
                                                        <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                                                        <ul className="space-y-3">
                                                            {service.points.map((point, pIdx) => (
                                                                <li key={pIdx} className="flex items-start gap-3 text-sm text-navy/70 leading-snug">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                                    {point}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-8 border-t border-gray-100 bg-gray-50/50 flex justify-center">
                                            <Button variant="primary" onClick={() => setShowServices(false)} className="px-12 py-4">
                                                Close Services
                                            </Button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </motion.div>

                    {/* Right Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-5/12 relative mt-12 lg:mt-0"
                    >
                        <div className="relative z-10">
                            {/* Main Image Container */}
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/50 backdrop-blur-sm group">
                                <img
                                    src={heroImg}
                                    alt="Expert Pediatrician with Child"
                                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating Stats Card 1 */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 md:-right-10 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 z-20 flex items-center gap-4 max-w-[200px]"
                            >
                                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-navy/50 uppercase tracking-wider">Safety</p>
                                    <p className="text-sm font-black text-navy leading-tight">100% Hygienic Environment</p>
                                </div>
                            </motion.div>

                            {/* Floating Stats Card 2 */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-8 -left-6 md:-left-12 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 z-20 flex flex-col gap-2 min-w-[180px]"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                                        <Heart className="w-6 h-6 fill-current" />
                                    </div>
                                    <p className="text-sm font-black text-navy">24/7 Service</p>
                                </div>
                                <p className="text-xs text-navy/60 font-medium">Specialized Emergency <br /> Pediatric Care Unit</p>
                            </motion.div>

                            {/* Experience Badge */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                className="absolute top-1/2 -left-16 hidden xl:flex flex-col items-center justify-center w-32 h-32 bg-secondary text-white rounded-full shadow-xl border-4 border-white z-20 cursor-pointer"
                            >
                                <span className="text-3xl font-black">20+</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Years of</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter text-center line-clamp-1">Experience</span>
                            </motion.div>
                        </div>

                        {/* Decorative Background Shapes */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
