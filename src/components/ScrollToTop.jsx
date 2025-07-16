// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente no renderiza nada visual.
// Su único propósito es resetear el scroll en cada navegación.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "pathname" cambia cada vez que navegas a una nueva URL.
    // Este efecto se ejecutará en cada cambio, llevando la página al tope.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;