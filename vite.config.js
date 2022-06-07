import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
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
});
