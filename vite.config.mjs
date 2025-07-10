import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "TempoUI",
      fileName: (format) => `tempo-ui.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        inlineDynamicImports: false,

        manualChunks(id) {
          if (id.includes("/src/components/")) {
            const componentName = id.split("/src/components/")[1].split("/")[0];
            return `components/${componentName}`;
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/styles"), // Alias for styles
      "@components": path.resolve(__dirname, "./src/components"), // Alias for components
    },
  },
});
