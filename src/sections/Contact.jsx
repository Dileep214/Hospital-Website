import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <SectionWrapper id="contact" bg="white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                            Find Us <span className="text-primary">&</span> Get In Touch
                        </h2>
                        <p className="text-navy/70 text-lg leading-relaxed max-w-xl">
                            We're here to provide the best care for your children. Reach out to us for appointments, emergencies, or any health-related inquiries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                <MapPin className="text-primary" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy mb-1">Our Location</h4>
                                <p className="text-navy/60 text-sm leading-relaxed">
                                    Park Center, above SBI Bank, Tuni Main Road, Tuni – 533401, AP
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                                <Phone className="text-secondary" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy mb-1">Phone Number</h4>
                                <p className="text-navy/60 text-sm">
                                    +91 94916 49111
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                                <Mail className="text-accent" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy mb-1">Email Address</h4>
                                <p className="text-navy/60 text-sm">
                                    shankarchildrenshospital@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Clock className="text-primary" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy mb-1">Working Hours</h4>
                                <p className="text-navy/60 text-sm">
                                    24/7 Emergency Care
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group h-[450px] w-full"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1574.8769846866749!2d82.5440546715182!3d17.356521563337136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39c76d1c3ea22d%3A0x5277109dc4cd1032!2sShankar%20children&#39;s%20hospital!5e1!3m2!1sen!2sin!4v1773667318531!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Shankar Children's Hospital Location"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
