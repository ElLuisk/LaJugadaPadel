// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [ { quote: "Las mejores pistas que he pisado. Iluminación profesional y un césped impecable.", title: 'Jugador Habitual', }, { quote: "El ambiente es lo mejor. Siempre hay partidos y gente nueva para jugar y socializar.", title: 'Socio del Club', }, { quote: "La escuela para niños es espectacular. Mi hijo ha mejorado y se divierte como nunca.", title: 'Madre de Alumno', }, ];
const cardVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1], } }), };

const Testimonials = () => {
  return (
    <section 
      id="testimonios" 
      className="relative bg-transparent py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-base font-bold text-brand-verde-lima tracking-wider uppercase opacity-70">
            Opiniones
          </h2>
          <p className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl uppercase">
            Lo que Dicen Nuestros Jugadores
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="relative flex flex-col justify-between bg-white/5 rounded-xl shadow-lg p-8 backdrop-blur-sm border border-white/10 transition-colors duration-300 hover:border-brand-verde-lima/50"
            >
              <FaQuoteLeft className="absolute top-6 left-6 text-5xl text-white/10" aria-hidden="true" />
              <blockquote className="relative z-10 font-light text-lg text-gray-200 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <footer className="relative z-10 mt-6 pt-6 border-t border-white/20">
                <p className="font-semibold text-brand-verde-lima">{testimonial.title}</p>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;