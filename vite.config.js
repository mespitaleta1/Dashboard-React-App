import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/admin/api": {
        target: 'https://celes-app.myshopify.com',
        changeOrigin: true,
      }
    }
  }
})
