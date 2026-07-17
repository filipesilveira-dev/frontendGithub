import type { Log } from "../App";
import { LogItem } from "./LogItem";

interface LogListProps {
  logs: Log[];
  onDeleteLog: (id: number) => void;
}

export function LogList({ logs, onDeleteLog }: LogListProps) {
  return (
    <div>
      <h3>Lista de registros</h3>
      <ul>
        <LogItem logs={logs} onDeleteLog={onDeleteLog} />
      </ul>
    </div>
  );
}
