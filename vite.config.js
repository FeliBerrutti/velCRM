import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/velCRM/',
  server: {
    proxy: {
      '/api': {
        target: 'https://crmapi.somee.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
