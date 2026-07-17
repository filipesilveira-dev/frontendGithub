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
          {log.title}
          <button onClick={() => onDeleteLog(log.id)}>X</button>
        </li>
      ))}
    </div>
  );
}
