import { useEffect, useState } from "react";
import "./App.css";
import { AddLog } from "./components/AddLog";
import { LogList } from "./components/LogList";

export interface Log {
  id: number;
  title: string;
  description: string;
  data: string;
}

function App() {
  const [logs, setLogs] = useState<Log[]>(() => {
    const savedLogbook = localStorage.getItem("logbook");
    try {
      return savedLogbook ? JSON.parse(savedLogbook) : [];
    } catch (error) {
      console.error("Erro ao fazer parse do localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("logbook", JSON.stringify(logs));
  }, [logs]);

  const addLog = (title: string, description: string) => {
    const data = new Date().toLocaleDateString("pt-BR");
    const newLog = { id: Date.now(), title, description, data };
    setLogs((prev) => [...prev, newLog]);
  };

  const deleteLog = (id: number) => {
    const filteredLogs = logs.filter((log) => log.id !== id);
    setLogs(filteredLogs);
  };

  return (
    <>
      <h1>Diário de Bordo</h1>
      <AddLog onAddLog={addLog} />
      <LogList logs={logs} onDeleteLog={deleteLog} />
    </>
  );
}

export default App;
