import purgeCss from "vite-plugin-purgecss";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react(), purgeCss({})],
  base: process.env.NODE_ENV === "production" ? "/react-admin-dashboard/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
