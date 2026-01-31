import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ✅ Base untuk user/organization GitHub Pages (root domain)
  base: '/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor libraries into separate chunks for better caching
          if (id.includes('node_modules/react')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/@mui')) {
            return 'vendor-mui';
          }
          if (id.includes('node_modules/@emotion')) {
            return 'vendor-emotion';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer';
          }
          if (id.includes('node_modules/react-router-dom')) {
            return 'vendor-router';
          }
        },
      },
    },
    // Increase chunk size warning threshold
    chunkSizeWarningLimit: 700,
    // Minification using esbuild (Vite's default, faster than terser)
    minify: 'esbuild',
    // CSS minification
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled'],
  },
})
