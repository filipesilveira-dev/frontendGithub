// Custom hook criado para ser o intermediário entre o app.ts e o código React
import { create } from "zustand";

// interface para o evento do PWA
export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface useInstallButton {
  deferredPrompt: BeforeInstallPromptEvent | null;
  showInstallButton: boolean;
  setDeferredPrompt: (prompt: BeforeInstallPromptEvent | null) => void;
  install: () => void;
}

// Estrutura principal do Zustand
export const useInstallButton = create<useInstallButton>((set, get) => ({
  // Contrato de dados
  deferredPrompt: null,
  showInstallButton: false,

  // Ações
  setDeferredPrompt: (prompt) =>
    set({
      deferredPrompt: prompt,
      showInstallButton: !!prompt,
    }),

  install: async () => {
    const { deferredPrompt } = get();
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        set({ deferredPrompt: null, showInstallButton: false });
      }
    }
  },
}));
