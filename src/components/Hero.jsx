// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdSportsTennis } from 'react-icons/md';
import TennisPadel from '../assets/pelota_padel.png'

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2, }, }, };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], }, }, };

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative bg-transparent min-h-screen flex items-center pt-24 pb-32 lg:pt-0 lg:pb-0 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
          <motion.p className="font-display text-lg font-bold text-brand-verde-lima uppercase tracking-widest" variants={itemVariants}>
            Bienvenido al Club
          </motion.p>
          <motion.h1 className="mt-2 font-display text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter" variants={itemVariants} style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            <span className="block">Donde tu mejor</span>
            <span className="block text-brand-verde-lima">Jugada comienza</span>
          </motion.h1>
          <motion.p className="mt-6 text-lg md:text-xl text-gray-200/90 max-w-lg mx-auto lg:mx-0" variants={itemVariants}>
            Pistas de última generación, escuela para todos los niveles y un ambiente inmejorable. Bienvenido a <span className="font-bold text-white">La Jugada Padel Club</span>.
          </motion.p>
          <motion.div className="mt-10" variants={itemVariants}>
            <Link to="/reservar" className="bg-brand-verde-lima text-brand-verde-oscuro font-display font-bold uppercase py-4 px-10 rounded-full text-lg transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-verde-lima/30">
              RESERVAR AHORA
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="hidden lg:flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{once: true}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}>
          <div className="relative w-96 h-96 rounded-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-md">
           <img
            src={TennisPadel}
            alt="Pelota de pádel"
            className="w-48 h-48 object-contain"
            style={{
              filter: 'brightness(0) saturate(100%) invert(66%) sepia(96%) saturate(804%) hue-rotate(30deg) brightness(150%) contrast(70%)'
            }}
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;