import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Disable source maps for production
    sourcemap: false,
    // Enable minification (using default esbuild)
    minify: true,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk splitting
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [],
  },

  // Performance optimizations
  server: {
    fs: {
      strict: false
    }
  },

  // Enable compression and tree shaking
  esbuild: {
    drop: ['console', 'debugger'],
    treeShaking: true
  }
})
