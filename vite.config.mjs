import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true, filename: "bundle-report.html" }), // Generates a bundle report
    dts({
      insertTypesEntry: true,
      rollupTypes: false,
      exclude: [
        "src/stories",
        "src/hooks",
        "src/styles",
        "src/types",
        "src/utils",
        "src/**/__tests__",
        "src/**/__mocks__",
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "TempoUI",
      fileName: (format) => `tempo-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
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
