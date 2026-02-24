import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        bridge: resolve(__dirname, "src/pages/bridge.html"),
        engine: resolve(__dirname, "src/pages/engine.html"),
        engs28: resolve(__dirname, "src/pages/engs28.html"),
        tse: resolve(__dirname, "src/pages/TSE.html"),
        mobile: resolve(__dirname, "src/pages/mobile.html"),
        future: resolve(__dirname, "src/pages/future.html"),
      },
    },
  },
});
