// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importa todos tus componentes de sección
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    // El contenedor principal ahora tiene el fondo oscuro y las líneas animadas
    <div className="relative isolate bg-brand-verde-oscuro text-white overflow-x-hidden">
      
      {/* Fondo de líneas animado global */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="globalLines" patternUnits="userSpaceOnUse" width="400" height="400">
              <motion.path 
                d="M 50 0 V 400 M 0 50 H 400" 
                stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.05"
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
               <motion.path 
                d="M 200 0 V 400 M 0 200 H 400" 
                stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.05"
                initial={{ strokeDasharray: 1000, strokeDashoffset: -1000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#globalLines)" />
        </svg>
      </div>
      
      {/* Fondo de aurora para más profundidad */}
      <div 
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" 
        aria-hidden="true"
      >
         <div 
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#91c13e] to-[#c5e898] opacity-10 sm:left-[calc(50%-40rem)] sm:h-[42.375rem] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      {/* Todo el contenido se renderiza sobre el fondo global */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Partners />
          <Testimonials />
          <Gallery />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;