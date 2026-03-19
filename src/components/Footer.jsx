import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.svg';


const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-24 pb-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-1">
                                <img src="/logo.jpeg" alt="Logo" width={48} height={48} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-white font-poppins font-bold text-xl tracking-tight">Shankar Children's Hospital</span>
                        </div>
                        <p className="text-white/60 leading-relaxed mb-8 max-w-xs">
                            Providing compassionate, professional, and world-class pediatric and neonatal care for the children of Tuni and beyond.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/shankar_childrens_hospital?igsh=eXFybjl3aGZ1anFk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://www.facebook.com/share/1NCuv8mmfV/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Navigation</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Pediatric Services</a></li>
                            <li><a href="#doctors" className="hover:text-primary transition-colors">Our Specialists</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">Patient FAQ</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Specialties</h4>
                        <ul className="space-y-4 text-white/60">
                            <li>Neonatology</li>
                            <li>NICU Care</li>
                            <li>Pediatric Health</li>
                            <li>Immunizations</li>
                            <li>Emergency Response</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Get In Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-primary shrink-0" size={20} />
                                <span className="text-white/60">Park Center, above SBI Bank, Tuni Main Road, Tuni – 533401, Andhra Pradesh</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-primary shrink-0" size={20} />
                                <a href="tel:+919491649111" className="text-white/60 hover:text-primary transition-colors">+91 94916 49111</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-primary shrink-0" size={20} />
                                <span className="text-white/60">shankarchildrenshospital@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm flex items-center gap-1">
                        © 2026 Shankar Children's Hospital. Made with <Heart size={14} className="text-accent" /> for families everywhere.
                    </p>
                    <div className="flex gap-8 text-white/40 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Patient Rights</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
