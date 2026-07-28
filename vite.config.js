import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 3000
  }
}
