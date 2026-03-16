import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Wellness from './sections/Wellness';
import Doctors from './sections/Doctors';
import FAQ from './sections/FAQ';
import Emergency from './sections/Emergency';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Contact from './sections/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramShowcase from './sections/InstagramShowcase';
import TopHero from './sections/TopHero';

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main>
        <TopHero />
        <Hero />
        <About />
        <Services />
        <InstagramShowcase />
        <Wellness />
        <Doctors />
        <Emergency />
        <FAQ />

        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
}

export default App;
