// src/components/Partners.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Importa los logos y las imágenes de fondo de las tarjetas
import texGrillLogo from '../assets/tex_grill_logo.png';
import caffeempaticoLogo from '../assets/empatico_logo.jpg';
import texGrillBg from '../assets/text-grill-bg.jpg';
import caffeempaticoBg from '../assets/empatico_bg.jpg';

const partnersData = [
  { id: 'tex-grill', logo: texGrillLogo, name: 'Tex Grill', description: 'Hamburguesas, alitas y costillas. El lugar perfecto para después del partido.', link: '/socios/tex-grill', bgImage: texGrillBg },
  { id: 'caffeempatico', logo: caffeempaticoLogo, name: 'Empatico Coffee Bar', description: 'Un coffee bar para relajarte y disfrutar de un café de especialidad.', link: '/socios/caffeempatico', bgImage: caffeempaticoBg },
];

const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], }, }), };

const Partners = () => {
  return (
    // LA CORRECCIÓN ESTÁ AQUÍ: id="partners" en lugar de "socios"
    <section id="partners" className="relative bg-transparent py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-base font-bold text-brand-verde-lima tracking-wider uppercase">
            Nuestra Comunidad
          </h2>
          <p className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl uppercase">
            Socios del Club
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {partnersData.map((partner, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="group relative h-96 rounded-2xl shadow-lg overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${partner.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-16 w-auto object-contain self-start mb-4 drop-shadow-lg"
                />
                <h3 className="font-display text-3xl font-bold">{partner.name}</h3>
                <p className="mt-2 text-white/80">{partner.description}</p>
                <Link
                  to={partner.link}
                  className="group/link inline-flex items-center gap-2 mt-4 font-bold text-brand-verde-lima self-start opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <span>Ver más</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;