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
const botaoInstalar = document.querySelector<HTMLButtonElement>(".btn-install");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Serviceworker registrado"))
    .catch((err: Error) => console.error("Erro ao registrar o serviceworker:", err));
}

// tipo da variável global do prompt (ela começa como undefined ou armazena o evento)
let deferredPrompt: BeforeInstallPromptEvent | undefined;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e as BeforeInstallPromptEvent;
  
  // o "if" garante que o botão existe antes de acessar as propriedades, evitando erros de build
  if (botaoInstalar) {
    botaoInstalar.style.display = "block";
  }
});

if (botaoInstalar) {
  botaoInstalar.addEventListener("click", () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    
    // Agora o autocomplete vai sugerir "choice.outcome" perfeitamente
    deferredPrompt.userChoice.then((choice) => {
      console.log(choice.outcome); // Retorna "accepted" ou "dismissed"
      
      deferredPrompt = undefined;
      botaoInstalar.style.display = "none";
    });
  });
}