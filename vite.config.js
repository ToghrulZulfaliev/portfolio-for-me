import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Vercel + domain üçün
  plugins: [react()],
});
