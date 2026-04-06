import purgeCss from "vite-plugin-purgecss";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    purgeCss({}),
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
  base: process.env.NODE_ENV === "production" ? "/react-admin-dashboard/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
