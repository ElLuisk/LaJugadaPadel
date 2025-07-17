// src/components/Pricing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiUsers, FiShoppingBag, FiAward } from 'react-icons/fi';
import { IoIosTennisball } from 'react-icons/io';
import TennisPadel from '../assets/pelota_padel.png'

// La información de las tarifas se mantiene
const allPricingData = [
  { icon: <FiSun size={28} />, title: 'Tarifa AM', price: '250', description: 'Por hora, hasta 5pm', isPromo: false, },
  { icon: <FiMoon size={28} />, title: 'Tarifa PM', price: '450', description: 'Por hora, desde 5pm', isPromo: false, },
  { icon: <FiUsers size={28} />, title: 'Fin de Semana', price: '250', description: 'Sábados y Domingos', isPromo: false, },
  { icon: <IoIosTennisball size={28} />, title: 'Bote de Pelotas', price: '155', description: 'Penn (3 pelotas)', isPromo: false, },
  { 
  icon: <img src={TennisPadel} alt="Pelota de padel" className="w-7 h-7" style={{ filter: 'brightness(0) saturate(100%) invert(66%) sepia(96%) saturate(804%) hue-rotate(30deg) brightness(150%) contrast(70%)'}} />, 
  title: 'Renta de Pala', 
  price: '80', 
  description: 'Tiempo ilimitado', 
  isPromo: false 
  
},
  { icon: <FiAward size={28} />, title: 'Domingo Familiar', price: '350', description: 'Palas y pelotas incluidas', isPromo: true, },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
    },
  },
};

const Pricing = () => {
  return (
    // 1. Fondo transparente para integrarse con el diseño global
    <section id="precios" className="relative bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-base font-bold text-brand-verde-lima tracking-wider uppercase">
            Nuestras Tarifas
          </h2>
          <p className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl uppercase">
            Todo lo que necesitas para jugar
          </p>
        </div>

        {/* 2. Un grid flexible para mostrar las múltiples tarifas */}
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {allPricingData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className={`relative flex flex-col items-center text-center p-6 rounded-2xl
                          bg-white/5 backdrop-blur-sm border
                          transition-all duration-300 hover:border-brand-verde-lima/50
                          ${item.isPromo 
                            ? 'border-brand-verde-lima' 
                            : 'border-white/10'
                          }`
                        }
            >
              {/* 3. Insignia para destacar la promoción de forma elegante */}
              {item.isPromo && (
                <div className="absolute top-0 right-4 -translate-y-1/2 bg-brand-verde-lima text-brand-verde-oscuro px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Promo
                </div>
              )}

              <div className="text-brand-verde-lima mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white leading-tight">{item.title}</h3>
              <p className="my-2 font-black text-4xl text-white">
                {item.price}<span className="text-lg font-bold text-gray-300 ml-1">MX</span>
              </p>
              <p className="text-sm text-gray-400 flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;