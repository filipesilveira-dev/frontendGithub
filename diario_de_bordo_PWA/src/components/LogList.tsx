import type { Log } from "../App"

interface LogListProps{
    logs: Log[]
}

export function LogList({logs}: LogListProps){
    return(
        <div>
            <h3>Lista de registros</h3>
            <ul>
                {logs.map(log => <li key={log.id}>{log.title}</li>)}
            </ul>
        </div>
    )
}