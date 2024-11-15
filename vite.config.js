import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "build", // folder output build
    },
    base: "/React-1/", // Sesuaikan dengan nama repository kamu di GitHub
});
