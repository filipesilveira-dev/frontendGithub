import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { useInstallButton } from "./store/useInstallButton.ts";
import type { BeforeInstallPromptEvent } from "./store/useInstallButton.ts";

// Lógica que havia em app.ts movida para cá por questões particulares do React e do typescript (o aparecimento do botão está ligado a uma condicional "showInstallButton" criada como um estado geral com o Zustand. Caso seja verdadeira, ou seja "deferredPromp" ocorreu, ouvido pelo "beforeinstallprompt", o botão será renderizado)
// 1. Registro do Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Serviceworker registrado"))
    .catch((err) => console.error("Erro ao registrar o serviceworker:", err));
}

// 2. Registro do Evento de PWA (Isso atualiza o Zustand)
window.addEventListener("beforeinstallprompt", (e) => {
  // Previne o banner padrão
  e.preventDefault();

  // Atualiza a Store do Zustand
  useInstallButton.getState().setDeferredPrompt(e as BeforeInstallPromptEvent);
});

// 3. Renderização do React
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
