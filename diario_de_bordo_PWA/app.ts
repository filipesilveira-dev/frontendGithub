// interface para o evento do PWA
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

// uso do Generics (<HTMLButtonElement>)
const botaoInstalar =
  document.querySelector<HTMLButtonElement>(".btn-install")!;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Serviceworker registrado"))
    .catch((err: Error) =>
      console.error("Erro ao registrar o serviceworker:", err),
    );
}

// tipo da variável global do prompt (ela começa como undefined ou armazena o evento)
let deferredPrompt: BeforeInstallPromptEvent | null;

if (botaoInstalar) {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    botaoInstalar.style.display = "block";
  });

  botaoInstalar.addEventListener("click", () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      console.log(choice.outcome);
      deferredPrompt = null;
      botaoInstalar.style.display = "none";
    });
  });
} else{
  console.error("Botão de instalação não encontrado")
}
