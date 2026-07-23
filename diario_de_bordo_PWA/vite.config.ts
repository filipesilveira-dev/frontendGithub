import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    // Uso do plugin VitePWA: transfere as informações do antigo manifesto para dentro da ferramenta de build
    VitePWA({
      // Atualiza o SW automaticamente
      registerType: "autoUpdate",
      // Arquivos estáticos da pasta public
      includeAssets: ["favicon.png", "favicon.svg", "screenshots/*.png"],
      // CONFIGURAÇÃO DO WORKBOX PARA ARMAZENAR FONTES NO CACHE
      workbox: {
        // Padrão de arquivos que devem ir para o precache do Service Worker
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
      },
      manifest: {
        name: "Diário de bordo",
        short_name: "Diário",
        description: "`PWA de um diário de bordo`",
        display: "standalone",
        background_color: "#151F32",
        theme_color: "#151F32",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "screenshots/screenshot.png",
            sizes: "736x519",
            type: "image/png",
            form_factor: "wide",
            label: "Mini Diário de bordo on Desktop",
          },
          {
            src: "screenshots/screenshot.png",
            sizes: "736x519",
            type: "image/png",
            form_factor: "narrow",
            label: "Mini Diário de bordo on Mobile",
          },
        ],
      },
    }),
  ],
});
