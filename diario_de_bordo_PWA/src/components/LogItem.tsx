import type { Log } from "../App";

interface LogItemProps {
  logs: Log[];
  onDeleteLog: (id: number) => void;
}

export function LogItem({ logs, onDeleteLog }: LogItemProps) {
  return (
    <>
      {logs.map((log) => (
        <li key={log.id} className="log-item-card">
          <div className="log-item-header">
            <h4 className="log-item-title">{log.title}</h4>
            <span className="log-item-date">{log.data}</span>
          </div>
          <div className="log-item-description">{log.description}</div>
          <div className="log-item-footer">
            <button className="btn-delete" onClick={() => onDeleteLog(log.id)}>
              Remover &times;
            </button>
          </div>
        </li>
      ))}
    </>
  );
}
