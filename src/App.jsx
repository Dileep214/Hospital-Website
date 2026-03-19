import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

// Lazy load other pages
const Blog = lazy(() => import('./sections/Blog'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-cream selection:bg-primary/20 selection:text-primary">
          <Navbar />

          <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Suspense>

          <Footer />
          <WhatsAppButton />
          <ChatWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
