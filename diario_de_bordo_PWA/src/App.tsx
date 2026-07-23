import { useEffect, useState } from "react";
import "./styles.css";
import { AddLog } from "./components/AddLog";
import { LogList } from "./components/LogList";
import { useInstallButton } from "./store/useInstallButton";

export interface Log {
  id: number;
  title: string;
  description: string;
  data: string;
}

function App() {
  // Recurso do Zustand para renderizar ou não o botão de instalação
  const showInstallButton = useInstallButton(
    (state) => state.showInstallButton,
  );
  const install = useInstallButton((state) => state.install);
  
  // O valor inicial do estado "logs" será o que estiver salvo no localStorage na chave "logbook". Caso não haja nada, será retornado um array vazio
  const [logs, setLogs] = useState<Log[]>(() => {
    const savedLogbook = localStorage.getItem("logbook");
    try {
      return savedLogbook ? JSON.parse(savedLogbook) : [];
    } catch (error) {
      console.error("Erro ao fazer parse do localStorage:", error);
      return [];
    }
  });

  // O efeito colateral do useEffect atribui um novo valor (se adicionar, o array adicionado do novo registro. Se remover, o array sem o registro removido) à chave "logbook"
  useEffect(() => {
    localStorage.setItem("logbook", JSON.stringify(logs));
  }, [logs]);

  // Função que adiciona um novo registro
  const addLog = (title: string, description: string) => {
    const data = new Date().toLocaleDateString("pt-BR");
    const newLog = { id: Date.now(), title, description, data };
    setLogs((prev) => [...prev, newLog]);
  };
  // Função que remove o registro com id passado no argumento
  const deleteLog = (id: number) => {
    const filteredLogs = logs.filter((log) => log.id !== id);
    setLogs(filteredLogs);
  };

  return (
    <main>
      {showInstallButton && (
        <div className="container-title-installButton">
          <h1>Diário de Bordo</h1>
          {/* O aparecimento do botão customizado de instalar o PWA agora está ligado a uma condição para a renderização e não à manipulação direta de propriedades de estilização de um elemento HTML */}
          <button className="btn-install" onClick={install}>
            Instalar
          </button>
        </div>
      )}
      {!showInstallButton && (
        <div className="container-title">
          <h1>Diário de Bordo</h1>
        </div>
      )}
      <AddLog onAddLog={addLog} />
      <LogList logs={logs} onDeleteLog={deleteLog} />
    </main>
  );
}

export default App;
