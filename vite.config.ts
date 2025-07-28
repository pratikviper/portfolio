import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import netlify from "@netlify/vite-plugin";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig(
  {
    base: './',
    plugins: [
      react(),
      tsconfigPaths(),
      tailwindcss(),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 75 },
        webp: { quality: 80 },
        avif: { quality: 70 }
      }),
      netlify()
    ],
  }
)