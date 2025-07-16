// src/pages/BookingPage.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import playtomicLogo from '../assets/PLAYTOMIC_LOGO.png';

const BookingPage = () => {
  const playtomicLink = "https://playtomic.com/clubs/la-jugada-padelclub";

  // RECOMENDACIÓN: La redirección automática puede ser frustrante para el usuario.
  // Es mejor dejar que hagan clic por sí mismos. Por eso lo he comentado.
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   window.location.href = playtomicLink;
    // }, 5000);
    // return () => clearTimeout(timer);
  }, [playtomicLink]);

  return (
    // Mantenemos el fondo global para consistencia
    <div className="bg-brand-verde-oscuro">
      <Navbar />
      <main className="relative text-white min-h-screen flex flex-col items-center justify-center text-center px-4 py-32">
        {/* El mismo fondo de líneas que en el resto de la página */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="globalLines" patternUnits="userSpaceOnUse" width="400" height="400">
                <path d="M 50 0 V 400 M 0 50 H 400" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#globalLines)" />
          </svg>
        </div>

        {/* La "Tarjeta Gateway" con un layout centrado */}
        <motion.div
          className="relative z-10 max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden p-8 sm:p-12 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img src={playtomicLogo} alt="Playtomic Logo" className="h-8 mb-6" />
          
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-tight">
            Completa tu Reserva en <span className="text-brand-verde-lima">Playtomic</span>
          </h1>
          
          <p className="mt-4 text-gray-300 max-w-lg">
            Gestionamos nuestras reservas a través de su plataforma líder para garantizarte la mejor experiencia: rápida, segura y siempre disponible.
          </p>
          
          <div className="mt-8">
            <a
              href={playtomicLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-verde-lima text-brand-verde-oscuro font-display font-bold uppercase py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-verde-lima/30"
            >
              <span>Ir a Playtomic</span>
              <FiArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        <p className="mt-8 text-sm text-gray-500">
          Serás redirigido al sitio seguro de Playtomic.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;