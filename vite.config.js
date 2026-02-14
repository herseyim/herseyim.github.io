import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: repo adı 'github' ise base: '/github/'
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/github/' : '/',
})
