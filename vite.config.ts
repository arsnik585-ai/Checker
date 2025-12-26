
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Конфигурация для корректной работы в подпапках GitHub
export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
