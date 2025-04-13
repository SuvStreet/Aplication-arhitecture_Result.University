import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@shared': '/src/shared',
      '@pages': '/src/Pages',
      '@app': '/src/App',
      '@features': '/src/Features',
    },
  },
})
