// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()], 
  build: {
    assets: 'assets' 
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false, // Forces all CSS into ONE file, preventing the @ symbol issues
      rollupOptions: {
        output: {
          // Alternative naming pattern
          assetFileNames: 'assets/style.[hash][extname]'
        }
      }
    }
  }  
});