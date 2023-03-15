// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        programs: resolve(__dirname, "programs/index.html"),
        blog: resolve(__dirname, "blog/index.html"),
      },
    },
  },
});
