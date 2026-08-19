import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from https://<user>.github.io/Website-Code/,
  // so asset URLs need the repo name as a base path.
  base: '/Website-Code/',
  build: {
    rollupOptions: {
      // Separate static pages for Impressum/Datenschutz, alongside the main SPA entry.
      input: {
        main: resolve(process.cwd(), 'index.html'),
        impressum: resolve(process.cwd(), 'impressum.html'),
        datenschutz: resolve(process.cwd(), 'datenschutz.html'),
      },
    },
  },
})
