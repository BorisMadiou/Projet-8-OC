import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Projet-8-OC/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Pour inclure tous les fichiers
      },
    },
  },
});

