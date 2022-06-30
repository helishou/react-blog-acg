import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
import path from "path";
import commonjs from 'vite-plugin-commonjs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    commonjs,
    react(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://47.98.154.142/",
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
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [dynamicImportVars()],
    },
    // sourcemap: true,
  },
});
