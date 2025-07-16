// src/components/GalleryAccordion.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importamos las imágenes (sin cambios)
import fotoVistaCanchas from '../assets/Padel_Foto_Vista_Canchas.jpg';
import fotoCanchas from '../assets/Padel_Foto_Canchas.jpg';
import fotoRaquetas from '../assets/Padel_Foto_Raquetas.jpg';
import fotoSnacks from '../assets/Padel_Foto_Snacks.jpg';

const galleryImages = [
  { src: fotoVistaCanchas, alt: 'Vista panorámica de las canchas' },
  { src: fotoCanchas, alt: 'Jugadores en plena acción' },
  { src: fotoRaquetas, alt: 'Equipamiento profesional' },
  { src: fotoSnacks, alt: 'Nuestra zona de relax y snacks' },
];

const Gallery = () => {
  // El estado sigue siendo el índice de la imagen activa.
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="galeria" className="relative bg-brand-verde-oscuro py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo de líneas (sin cambios) */}
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

      <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-center">
        {/* Títulos (sin cambios) */}
        <div className="text-center mb-12">
          <h2 className="font-display text-base font-bold text-brand-verde-lima tracking-wider uppercase">
            Nuestras Instalaciones
          </h2>
          <p className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl uppercase">
            Un Espacio Hecho para Disfrutar
          </p>
        </div>

        {/* 1. NUEVO DISEÑO: Contenedor del acordeón horizontal */}
        <div className="w-full h-[500px] flex gap-2 md:gap-4 p-2 bg-black/20 rounded-xl shadow-2xl border border-white/10">
          {galleryImages.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={image.src}
                onClick={() => setActiveIndex(index)}
                // 2. LA MAGIA: Animamos la propiedad 'flex'.
                // La imagen activa ocupa 5 partes del espacio, las inactivas solo 1.
                // Framer Motion se encarga de la transición suave.
                initial={false}
                animate={{
                  flex: isActive ? 5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="relative h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {/* 3. TÍTULO SUPERPUESTO: Solo visible en la imagen activa */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent"
                    >
                      <h3 className="font-semibold text-white text-lg md:text-xl">
                        {image.alt}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;