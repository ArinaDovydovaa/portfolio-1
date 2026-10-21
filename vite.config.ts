import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    modules: {
      localsConvention: 'dashesOnly', // или 'camelCaseOnly', 'dashes', 'camelCase'
      generateScopedName: '[name]__[local]___[hash:base64:5]', // формат: ComponentName_className_hash
    },
  },
});

