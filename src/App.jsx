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

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Wellness />
        <Doctors />
        <Emergency />
        <FAQ />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
