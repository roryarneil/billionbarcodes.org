import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Three pages in one build: billionbarcodes.org plus the two subdomain sites.
// vercel.json routes each subdomain to its page.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        naughtyList: resolve(import.meta.dirname, 'naughty-list/index.html'),
        disclosedAlternatives: resolve(import.meta.dirname, 'disclosed-alternatives/index.html'),
      },
    },
  },
})
