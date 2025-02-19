import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: "/github.com/Alpy81/",
  ...(command !== "serve" && { base: "/outlet-shop-e-commerce/" }),
}));
