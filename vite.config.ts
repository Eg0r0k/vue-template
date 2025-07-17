import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [VueRouter({}), vue(), vueDevTools(), tailwindcss()],
  server: {
    host: '0.0.0.0',
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false,
      },
    },
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
