import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://crmapi.somee.com/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    vue()
  ],
  base: 'https://feliberrutti.github.io/velCRM',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
