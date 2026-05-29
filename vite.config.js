import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          // Only split heavy, route-level libraries to avoid circular chunk deps.
          if (id.includes('motion')) return 'vendor-motion'
          if (id.includes('ogl')) return 'vendor-ogl'
          if (id.includes('react-google-recaptcha')) return 'vendor-recaptcha'
        },
      },
    },
  },
})
