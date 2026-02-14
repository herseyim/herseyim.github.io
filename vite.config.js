import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: username.github.io repo ise base: '/'. Proje repo ise base: '/repo-adi/'
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
