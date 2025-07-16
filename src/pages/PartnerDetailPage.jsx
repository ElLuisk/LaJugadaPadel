// src/pages/PartnerDetailPage.jsx
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiExternalLink, FiChevronLeft, FiCheck } from 'react-icons/fi';

// --- Datos y logos ---
import texGrillLogo from '../assets/tex_grill_logo.png';
import caffeempaticoLogo from '../assets/empatico_logo.jpg';
import texGrillBg from '../assets/text-grill-bg.jpg';
import caffeempaticoBg from '../assets/empatico_bg.jpg';

const partnersData = [
  { id: 'tex-grill', logo: texGrillLogo, name: 'Tex Grill', tagline: 'Sabor para campeones', description: 'El lugar perfecto para después del partido. Disfruta de las mejores hamburguesas, alitas, boneless, costillas y ensaladas de la ciudad. Un ambiente relajado para compartir con amigos y familia.', link: 'https://www.instagram.com/texgrillmochis/', bgImage: texGrillBg, menu: ['Hamburguesas Clásicas', 'Alitas BBQ', 'Costillas a la parrilla', 'Boneless Búfalo', 'Ensalada César'], },
  { id: 'caffeempatico', logo: caffeempaticoLogo, name: 'Empatico Coffee Bar', tagline: 'Energía para tu juego', description: 'Un coffee bar para relajarte, conversar y disfrutar de un café de especialidad antes o después de jugar. El punto de encuentro ideal para tu dosis de cafeína.', link: 'https://www.instagram.com/empaticocoffeebar/', bgImage: caffeempaticoBg, menu: ['Espresso', 'Cappuccino', 'Latte Frío', 'Pastelería del día', 'Té Chai'], },
];

const PartnerDetailPage = () => {
  const { partnerId } = useParams();
  const partner = partnersData.find(p => p.id === partnerId);

  // LA CORRECCIÓN ESTÁ AQUÍ
  // Este efecto ahora se ejecutará cada vez que el partnerId cambie.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [partnerId]);

  if (!partner) { return <Navigate to="/" />; }

  return (
    <div className="bg-brand-verde-oscuro text-white">
      <Navbar />
      <main>
        <header className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${partner.bgImage})` }} />
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div className="relative z-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <p className="font-display text-lg text-brand-verde-lima uppercase tracking-widest">{partner.tagline}</p>
            <h1 className="font-display text-6xl md:text-8xl font-extrabold">{partner.name}</h1>
          </motion.div>
        </header>
        <div className="relative px-4 sm:px-6 lg:px-8 pb-24 -mt-24">
          <motion.div 
            className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="flex justify-center -mt-24 mb-8">
              <img src={partner.logo} alt={`${partner.name} logo`} className="h-28 w-28 object-cover bg-white p-2 rounded-2xl shadow-lg border-4 border-brand-verde-oscuro" />
            </div>
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3">
                <h2 className="font-display text-3xl font-bold mb-4">Sobre {partner.name}</h2>
                <p className="text-lg text-gray-300 leading-relaxed">{partner.description}</p>
              </div>
              <div className="md:col-span-2">
                 <h2 className="font-display text-3xl font-bold mb-4">Destacados</h2>
                 <ul className="space-y-3">
                    {partner.menu.map((item, index) => (
                      <motion.li key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}>
                        <FiCheck className="text-brand-verde-lima flex-shrink-0" size={20} />
                        <span className="text-gray-200">{item}</span>
                      </motion.li>
                    ))}
                 </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href={partner.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-verde-lima text-brand-verde-oscuro font-display font-bold uppercase py-3 px-8 rounded-full text-base transform hover:scale-105 transition-transform">
                <span>Visitar en Instagram</span>
                <FiExternalLink />
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerDetailPage;