import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',       // expose to Windows network
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true     // required for WSL file change detection
    },
    hmr: {
      host: 'localhost',   // or use your Windows host IP if localhost fails
      protocol: 'ws',
      port: 5173
    }
  }
})
