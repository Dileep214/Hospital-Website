import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShieldCheck, Activity } from 'lucide-react';
import Button from '../components/Button';
import heroImg from '../assets/hero-main.png';

const Hero = () => {
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
                            <Button variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-primary/20 hover:shadow-primary/40">
                                Book Appointment
                            </Button>
                            <Button variant="secondary" className="text-lg px-10 py-4 flex items-center justify-center gap-2">
                                <Activity className="w-5 h-5" />
                                Our Services
                            </Button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8 border-t border-navy/5">
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
                                    alt="Modern Pediatric Clinic"
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
