import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-bootstrap": ["react-bootstrap", "bootstrap"],
          "vendor-particles": ["react-tsparticles", "tsparticles-slim"],
          "vendor-icons": ["react-icons"],
        },
      },
    },
  },
});
