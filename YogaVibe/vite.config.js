import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   port: 5173,
  //   host: true,    
  //   allowedHosts: true,
  //   // Important: Listen on all interfaces
  //   hmr: {
  //     clientPort: 443,    // Use 443 because ngrok gives HTTPS
  //     // host: 'your-subdomain.ngrok.io'   // Optional but recommended
  //   }
  // }
})