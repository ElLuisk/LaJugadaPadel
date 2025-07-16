// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-verde-oscuro': '#00594C', // Nuevo verde del texto del logo
        'brand-verde-lima': '#D1F13C',   // Nuevo verde de la pelota
        'brand-blanco': '#FFFFFF',
        'brand-gris': '#F3F4F6',        // Un gris claro para fondos sutiles
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],      // Fuente para párrafos
        'display': ['Exo 2', 'sans-serif'],
        'serif': ['Lora', 'serif'],  // Fuente para títulos
      },
      animation: {
        'text-gradient': 'text-gradient-anim 3s linear infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },

       keyframes: {
        'text-gradient-anim': {
          'to': { backgroundPosition: '200% center' },
        },

        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(209, 241, 60, 0.4)' }, // D1F13C en rgba
          '50%': { boxShadow: '0 0 35px rgba(209, 241, 60, 0.9)' },
        },

        'stroke-draw': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },

         'grid-pan': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },

        backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
        // --- AÑADE ESTO ---
        'hexagon-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'%23d1d5db\' fill-opacity=\'0.2\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.99-7.5L26 15v18l-13 7.5L0 33V15z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          'paper-texture': 'url("https://www.transparenttextures.com/patterns/lined-paper.png")',
      },
      },

      
      
      
    },
  },
  plugins: [],
}

