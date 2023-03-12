import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://JustinRdev0921.github.io/react-rickandmorty/',
  plugins: [react()],
})
