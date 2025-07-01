import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import netlify from "@netlify/vite-plugin";

export default defineConfig(
  {
    base: './',
    plugins: [
      react(), 
      tsconfigPaths(),
      tailwindcss(),
      netlify()
    ], 
  }
)