import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 60, compressionLevel: 9 },
      jpeg: { quality: 65, progressive: true, mozjpeg: true },
      webp: { quality: 60, lossy: true },
      avif: { quality: 50, speed: 8 },
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'sortAttrs', active: true },
          { name: 'removeDimensions', active: true },
        ],
      },
    }),
  ],
})
