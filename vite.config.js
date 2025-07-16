import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // Permite acceso desde otras máquinas
    port: 4000,         // Puedes cambiarlo si lo deseas
  },
});
