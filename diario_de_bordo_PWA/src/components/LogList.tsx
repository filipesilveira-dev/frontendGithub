import type { Log } from "../App";
import { LogItem } from "./LogItem";

interface LogListProps {
  logs: Log[];
  onDeleteLog: (id: number) => void;
}

export function LogList({ logs, onDeleteLog }: LogListProps) {
  return (
    <div className="list-container">
      <h3 className="list-title">
        Lista de registros
        <span className="list-counter">{logs.length}</span>
      </h3>
      {logs.length === 0 ? (
        <div className="empty-message">Nenhum registro no diário de bordo.</div>
      ) : (
        <ul className="log-list">
          <LogItem logs={logs} onDeleteLog={onDeleteLog} />
        </ul>
      )}
    </div>
  );
}

