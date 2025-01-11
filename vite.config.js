import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  server:{
    proxy: {
      '/backend' : 'https://aiidc.regalartech.com'
    }
  },
  plugins: [react()],
})
