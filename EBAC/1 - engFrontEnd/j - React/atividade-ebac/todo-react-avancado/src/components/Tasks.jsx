// Aqui será o componente que terá as tarefas. A estilização de cada tarefa mostrada será aqui. À medida que novas tarefas forem criadas, elas aparecerão aqui
import { Trash2 } from "lucide-react";

// Destructuring das props: elimina a necessidade do "props."
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 bg-purple-200 rounded-md shadow p-6">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className="bg-purple-400 text-white font-bold p-2 rounded-md w-full text-left hover:cursor-pointer flex justify-between items-center"
          >
            {/* 1. Elemento que recebe o risco (task.title) */}
            <span className={`text-lg ${task.isCompleted && "line-through"}`}>
              {task.title}
            </span>

            {/* 2. Elemento que NÃO recebe o risco (CONCLUÍDA) */}
            {task.isCompleted && (
              <span className="text-xs font-semibold bg-green-500 py-1 px-2 rounded-full ml-4">
                CONCLUÍDA
              </span>
            )}
          </button>
          <button
            className="bg-purple-950 text-white px-4 py-2 rounded-md hover:cursor-pointer"
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
