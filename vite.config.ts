import purgeCss from "vite-plugin-purgecss";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), purgeCss({})],
  base: "/react-admin-dashboard/",
});
