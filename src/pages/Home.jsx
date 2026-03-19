import React, { Suspense, lazy } from 'react';
import SEO from '../components/SEO';
import TopHero from '../sections/TopHero';
import Hero from '../sections/Hero';

// Lazy load sections below the fold
const About = lazy(() => import('../sections/About'));
const Services = lazy(() => import('../sections/Services'));
const Wellness = lazy(() => import('../sections/Wellness'));
const Doctors = lazy(() => import('../sections/Doctors'));
const FAQ = lazy(() => import('../sections/FAQ'));
const Emergency = lazy(() => import('../sections/Emergency'));
const Contact = lazy(() => import('../sections/Contact'));
const InstagramShowcase = lazy(() => import('../sections/InstagramShowcase'));

const Home = () => {
    return (
        <main>
            <SEO 
                title="Shankar Children's Hospital | Trusted Pediatric & Neonatal Care in Tuni"
                description="Expert healthcare for your little ones. 24/7 emergency services, specialized newborn care, and pediatric consultations in Tuni, Andhra Pradesh by Dr. Shankar."
                keywords="Pediatrician in Tuni, Children Hospital Andhra Pradesh, Neonatal care Tuni, Dr. Shankar Children Specialist"
            />
            <TopHero />
            <Hero />
            
            <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
                <About />
                <Services />
                <InstagramShowcase />
                <Wellness />
                <Doctors />
                <Emergency />
                <FAQ />
                <Contact />
            </Suspense>
        </main>
    );
};

export default Home;
