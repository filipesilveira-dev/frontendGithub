// 1. Imports das fontes diretamente do node_modules via Vite
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";

import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

// 2. Import do CSS com as regras globais da aplicação
import "./styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { useInstallButton } from "./store/useInstallButton.ts";
import type { BeforeInstallPromptEvent } from "./store/useInstallButton.ts";
// Importação do módulo virtual do plugin
import { registerSW } from "virtual:pwa-register";

// Lógica que havia em app.ts movida para cá por questões particulares do React e do typescript (o aparecimento do botão está ligado a uma condicional "showInstallButton" criada como um estado geral com o Zustand. Caso seja verdadeira, ou seja "deferredPromp" ocorreu, ouvido pelo "beforeinstallprompt", o botão será renderizado)
// 3. Registro do Service Worker utilizando o plugin VitePWA (substitui o registro manual)
registerSW({
  onNeedRefresh() {
    console.log("Nova versão disponível!");
  },
  onOfflineReady() {
    console.log("Pronto para uso offline.");
  },
});

// 4. Registro do Evento de PWA (Isso atualiza o Zustand)
window.addEventListener("beforeinstallprompt", (e) => {
  // Previne o banner padrão
  e.preventDefault();

  //5. Atualiza a Store do Zustand
  useInstallButton.getState().setDeferredPrompt(e as BeforeInstallPromptEvent);
});

// 6. Renderização do React
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
