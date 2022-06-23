import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    Components(
      {
        resolvers: [AntDesignVueResolver()],
      },
    )],
  server: {
    proxy: {
      '/api': {
        target: 'http://47.98.154.142/',
        changeOrigin: true,
      },
    },
  },
  node: {
    global: true,
    process: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
