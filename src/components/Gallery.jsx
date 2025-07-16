// src/components/Gallery.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importamos las imágenes locales (sin cambios aquí)
import fotoVistaCanchas from '../assets/Padel_Foto_Vista_Canchas.jpg';
import fotoCanchas from '../assets/Padel_Foto_Canchas.jpg';
import fotoRaquetas from '../assets/Padel_Foto_Raquetas.jpg';
import fotoSnacks from '../assets/Padel_Foto_Snacks.jpg';

const galleryImages = [
  { src: fotoVistaCanchas, alt: 'Vista panorámica de las canchas' },
  { src: fotoCanchas, alt: 'Jugadores en plena acción' },
  { src: fotoRaquetas, alt: 'Equipamiento profesional' },
  { src: fotoSnacks, alt: 'Nuestra zona de relax' },
];

const Gallery = () => {
  // 1. NUEVO ESTADO: Más simple, solo necesitamos el índice de la imagen activa.
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="galeria" className="relative bg-brand-verde-oscuro py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* FONDO: Se mantiene el mismo fondo de líneas */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="galleryLines" patternUnits="userSpaceOnUse" width="400" height="400">
              <path d="M 50 0 V 400 M 0 50 H 400" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#galleryLines)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto z-10 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="font-display text-base font-bold text-brand-verde-lima tracking-wider uppercase">
            Nuestras Instalaciones
          </h2>
          <p className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl uppercase">
            Un Espacio Hecho para Disfrutar
          </p>
        </div>

        {/* 2. NUEVO DISEÑO: Contenedor para la imagen principal y las miniaturas */}
        <div className="w-full max-w-4xl">
          {/* Contenedor de la Imagen Principal */}
          <div className="relative mb-4 w-full aspect-video bg-black/20 rounded-xl shadow-2xl overflow-hidden border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                // La key es crucial para que AnimatePresence detecte el cambio
                key={activeIndex}
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Título de la imagen superpuesto */}
             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                <motion.p 
                    key={activeIndex + '-title'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-semibold text-white text-lg"
                >
                    {galleryImages[activeIndex].alt}
                </motion.p>
             </div>
          </div>

          {/* 3. NUEVO DISEÑO: Fila de miniaturas interactivas */}
          <div className="flex justify-center gap-2 sm:gap-4 mt-6">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.src}
                onClick={() => setActiveIndex(index)}
                className={`relative w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden transition-all duration-300
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-verde-oscuro focus:ring-brand-verde-lima
                            ${
                              activeIndex === index
                                ? 'ring-2 ring-brand-verde-lima'
                                : 'ring-2 ring-transparent'
                            }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-opacity duration-300
                              ${activeIndex === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;