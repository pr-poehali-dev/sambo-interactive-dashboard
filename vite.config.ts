import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
    hmr: {
      clientPort: 443, // Используем SSL порт для WebSocket соединения
      host: 'preview--sambo-interactive-dashboard.poehali.dev', // Задаем хост для WebSocket 
      overlay: false // Отключаем оверлей ошибок (по желанию)
    },
    cors: true // Включаем CORS для запросов
  },
});
