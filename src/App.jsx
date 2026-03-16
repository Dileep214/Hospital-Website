import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Wellness from './sections/Wellness';
import Doctors from './sections/Doctors';
import FAQ from './sections/FAQ';
import Emergency from './sections/Emergency';
import Trust from './sections/Trust';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Contact from './sections/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramShowcase from './sections/InstagramShowcase';

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <InstagramShowcase />
        <Wellness />
        <Doctors />
        <Emergency />
        <FAQ />
        <Trust />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
}

export default App;
