// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/LOGO_PADEL_LAJUGADA.png';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

// El componente NavLink no necesita cambios
const NavLink = ({ href, children, closeMenu, isHovered, onHover }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (closeMenu) closeMenu();
    const targetId = href.substring(1);
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { targetId } });
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      onMouseEnter={() => onHover(href)}
      className="relative py-2 transition-colors duration-300 text-gray-200 hover:text-white"
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-verde-lima"
          layoutId="underline"
          initial={false}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
      )}
    </a>
  );
};

// --- Componente Principal del Navbar ---
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=%2B5216683965550";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Añadimos un manejador de clic específico para el logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('inicio');
    if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
  };
  
  const navLinksContent = (
    <>
      <NavLink href="#club" closeMenu={() => setIsMenuOpen(false)} isHovered={hoveredLink === '#club'} onHover={setHoveredLink}>El Club</NavLink>
      <NavLink href="#partners" closeMenu={() => setIsMenuOpen(false)} isHovered={hoveredLink === '#partners'} onHover={setHoveredLink}>Socios</NavLink>
      <NavLink href="#testimonios" closeMenu={() => setIsMenuOpen(false)} isHovered={hoveredLink === '#testimonios'} onHover={setHoveredLink}>Opiniones</NavLink>
      <NavLink href="#galeria" closeMenu={() => setIsMenuOpen(false)} isHovered={hoveredLink === '#galeria'} onHover={setHoveredLink}>Galería</NavLink>
      <NavLink href="#precios" closeMenu={() => setIsMenuOpen(false)} isHovered={hoveredLink === '#precios'} onHover={setHoveredLink}>Tarifas</NavLink>
      <NavLink href="#contacto" closeMenu={() => setIsMenuOpen(false)} isHovered={hoveredLink === '#contacto'} onHover={setHoveredLink}>Contacto</NavLink>
    </>
  );

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.header 
            key="navbar"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onMouseLeave={() => setHoveredLink(null)}
            className="w-full py-3 px-4 sm:px-8 flex justify-between items-center fixed top-0 z-50 bg-brand-verde-oscuro/50 backdrop-blur-lg shadow-xl shadow-black/20"
          >
            {/* 2. Reemplazamos el <Link> por un <a> con el onClick */}
            <a href="/" onClick={handleLogoClick} className="flex-shrink-0 z-50 cursor-pointer">
              <img src={logo} alt="La Jugada Padel Club Logo" className="h-16" />
            </a>

            <nav className="hidden md:flex items-center space-x-8 font-semibold">
              {navLinksContent}
            </nav>
            
            <div className="hidden md:flex items-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ml-8 bg-brand-verde-lima text-brand-verde-oscuro font-bold uppercase py-2 px-6 rounded-full text-sm transform hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                    <FaWhatsapp />
                    <span>Contactar</span>
                </a>
            </div>

            <div className="md:hidden z-50">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, display: 'block' },
          closed: { opacity: 0, y: "-100%", transitionEnd: { display: 'none' } },
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="md:hidden fixed top-0 left-0 w-full h-screen bg-brand-verde-oscuro p-6 pt-32 z-40"
      >
        <nav className="flex flex-col items-center gap-6 font-semibold text-lg" onMouseLeave={() => setHoveredLink(null)}>
          {navLinksContent}
        </nav>
      </motion.div>
      
      <AnimatePresence>
        {showNavbar && (
            <motion.a
                key="whatsapp-button"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-brand-verde-lima text-brand-verde-oscuro p-4 rounded-full shadow-lg z-50"
                aria-label="Contactar por WhatsApp"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
            >
                <FaWhatsapp size={32} />
            </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;