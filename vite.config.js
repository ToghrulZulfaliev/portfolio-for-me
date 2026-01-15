import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages üçün: https://username.github.io/<REPO_NAME>/
export default defineConfig({
  plugins: [react()],
  base: "/aboutme/",
});
