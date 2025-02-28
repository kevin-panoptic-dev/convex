import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                background: path.resolve(__dirname, "src/background.ts"),
                popup: path.resolve(__dirname, "index.html"),
            },
            output: {
                format: "es",
                entryFileNames: "[name].js",
            },
        },
    },
});
