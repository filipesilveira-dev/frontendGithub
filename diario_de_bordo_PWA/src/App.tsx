import { useState } from "react";
import "./App.css";
import { AddLog } from "./components/AddLog";
import { LogList } from "./components/LogList";

export interface Log {
  id: number
  title: string
  description: string
  data: string
}

function App() {
  const [logs, setLogs] = useState<Log[]>([]);

  const addLog = (title: string, description: string) =>{
    const data = new Date().toLocaleDateString('pt-BR')
    const newLog = {id: Date.now(), title, description, data}
    setLogs(prev=>[...prev,newLog])
  }
    
  return (
    <>
      <h1>Diário de Bordo</h1>
      <AddLog onAddLog={addLog}/>
      <LogList logs={logs}/>
    </>
  );
}

export default App;
