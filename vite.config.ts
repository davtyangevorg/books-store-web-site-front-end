import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.gevbooks.store",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' from the path
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "not-usable-content": ["./src/pages/not-usable-content/index.tsx"],
        },
      },
    },
  },
});
