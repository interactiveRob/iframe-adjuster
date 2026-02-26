import { defineConfig } from 'vite';

/* --  https://vite.dev/config/  -- */

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  
  build: {
    lib: {
      name: 'iFrameAdjuster',
      entry: ['src/main.js'],
      formats: ['iife'],
      fileName: (format, entryName) => `iframe-adjuster.min.js`,
    },
    watch: {
      include: ['**/*.css', '**/*.js']
    }
  },
})
