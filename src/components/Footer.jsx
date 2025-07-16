// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/lajugadapadelclub_logo.jpg';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  // --- ¡AQUÍ ESTÁ TU URL ACTUALIZADA! ---
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.8838042022894!2d-108.99398772402562!3d25.80740720671394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba29c5e8ef4419%3A0x637c6574f5a9e341!2sLa%20Jugada%20Padel%20Club!5e0!3m2!1ses!2smx!4v1750296242754!5m2!1ses!2smx";

  return (
    // 1. Contenedor relativo para el fondo y se mantiene el color base. Se añade overflow-hidden.
    <footer id="contacto" className="relative bg-brand-verde-oscuro text-white overflow-hidden">
      
      {/* 2. Fondo de líneas de cancha (copiado de Gallery) */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Se usa un ID único 'footerLines' para evitar conflictos */}
            <pattern id="footerLines" patternUnits="userSpaceOnUse" width="400" height="400">
              <path d="M 50 0 V 400 M 0 50 H 400" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerLines)" />
        </svg>
      </div>

      {/* 3. Contenido principal con z-index para estar por encima del fondo */}
      <div className="relative z-10 max-w-7xl mx-auto pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        
        {/* Sección Principal con CTA y Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Información */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-extrabold uppercase">
              ¿Listo para tu próxima <span className="text-brand-verde-lima">Jugada</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Visítanos y descubre por qué somos el punto de encuentro preferido por los amantes del pádel en Los Mochis.
            </p>
            <div className="mt-8 space-y-4">
              <p><strong>Dirección:</strong> C. Libertad 992-Poniente, Jardines de Fátima, Los Mochis, Sin.</p>
              <p><strong>Teléfono y WhatsApp:</strong> 668 396 5550</p>
            </div>
          </motion.div>
          
          {/* Columna del Mapa */}
          <motion.div
            className="h-80 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>

        {/* Separador y sección final */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="La Jugada Padel Club" className="h-12 rounded-full mr-4" />
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} La Jugada Padel Club. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6 mt-6 sm:mt-0">
            <a href="https://www.instagram.com/lajugadapadelclub/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-verde-lima transition-colors duration-300 transform hover:scale-125"><FaInstagram size={24} /></a>
            <a href="https://www.facebook.com/profile.php?id=61573435821202" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-verde-lima transition-colors duration-300 transform hover:scale-125"><FaFacebook size={24} /></a>
            <a href="https://api.whatsapp.com/send?phone=%2B5216683965550" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-verde-lima transition-colors duration-300 transform hover:scale-125"><FaWhatsapp size={24} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;