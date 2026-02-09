import { useEffect, memo } from "react";

function Task({ task, onDeleteTask, onChangeTaskStatus }) {
  useEffect(() => {
    console.log("Componente Task executa", task);
  }, [task]);

  console.log("Componente Task executado", task);

  return (
    <li className="flex justify-between items-center w-100 mb-2 p-2 rounded-xl border border-gray-300 hover:border-blue-500 hover:shadow-md transition-all">
      <span className={task.isCompleted ? "line-through" : " "}>
        {task.title}
      </span>
      <div className="flex gap-1">
        <button
          className=" hover:cursor-pointer bg-green-500 text-white p-2 rounded-xl hover:bg-green-400"
          onClick={() => onChangeTaskStatus(task._id)}
        >
          {task.isCompleted? "Ok!" : "Concluída"}
        </button>
        {/* necessário o uso de arrow function em deleteTask por necessitar de um parâmetro (task._id) */}
        <button
          onClick={() => {
            onDeleteTask(task._id);
          }}
          className="hover:cursor-pointer bg-red-500 text-white p-2 rounded-xl hover:bg-red-400"
        >
          Remover
        </button>
      </div>
    </li>
  );
}

export default memo(Task);
