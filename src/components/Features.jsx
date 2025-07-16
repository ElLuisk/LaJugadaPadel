// src/components/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { IoIosTennisball, IoMdSchool, IoIosCafe } from 'react-icons/io';

const featuresData = [ { number: '01', icon: <IoIosTennisball size={32} />, title: 'Pistas World Padel Tour', description: 'Disfruta de la máxima calidad en nuestras pistas de césped texturizado y paredes de cristal. Iluminación LED profesional.', }, { number: '02', icon: <IoMdSchool size={32} />, title: 'Escuela Para Todos', description: 'Desde iniciación hasta competición. Nuestros entrenadores certificados te ayudarán a llevar tu juego al siguiente nivel.', }, { number: '03', icon: <IoIosCafe size={32} />, title: 'Cafetería y Terraza', description: 'El post-partido es tan importante como el juego. Relájate en nuestra cafetería o disfruta del buen tiempo con otros jugadores.', }, ];
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2, }, }, };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], }, }, };

const Features = () => {
  return (
    <section 
      id="club" 
      className="relative bg-transparent py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center">
          <motion.p className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl uppercase" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.5 }}>
            Una Experiencia Completa
          </motion.p>
        </div>
        <motion.div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {featuresData.map((feature) => (
            <motion.div key={feature.number} className="relative bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 transition-colors duration-300 hover:border-brand-verde-lima/50" variants={cardVariants}>
              <div className="absolute top-4 left-6 font-display text-5xl font-bold text-white/10">
                {feature.number}
              </div>
              <div className="relative z-10">
                <div className="mb-6 h-14 w-14 flex items-center justify-center rounded-lg bg-brand-verde-lima/10 text-brand-verde-lima">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white font-display uppercase">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Features;