import purgeCss from "vite-plugin-purgecss";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    purgeCss({}),
    // Custom plugin to copy index.html to 404.html after the build is complete to support client-side routing in static hosting environments(e.g., GitHub Pages), so we can refresh any route without getting a 404 error.
    {
      name: "copy-404",
      closeBundle() {
        const distPath = path.resolve(__dirname, "dist");
        fs.copyFileSync(
          path.join(distPath, "index.html"),
          path.join(distPath, "404.html"),
        );
      },
    },
  ],
  // Configuring base key with the end of the url(/react-admin-dashboard) to avoid conflicts in Github Pages[Common issue with Vite in Github pages]
  base: process.env.NODE_ENV === "production" ? "/react-admin-dashboard/" : "/", // 🔥 IMPORTANT
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
