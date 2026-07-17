import type { Log } from "../App";

interface LogItemProps {
  logs: Log[];
  onDeleteLog: (id: number) => void;
}

export function LogItem({ logs, onDeleteLog }: LogItemProps) {
  return (
    <div>
      {logs.map((log) => (
        <li key={log.id}>
          Título: {log.title} <br />
          Descrição: {log.description} <br />
          Data: {log.data} <br />
          <button onClick={() => onDeleteLog(log.id)}>Remover X</button>
        </li>
      ))}
    </div>
  );
}
