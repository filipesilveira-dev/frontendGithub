import { useEffect, memo } from "react";

function Task({ task, onDeleteTask, onChangeTaskStatus }) {
  // constante que recebe o useState que controlará o estado de concluída da tarefa (Substituir pelo useContext??)
  // const [isCompleted, setCompleted] = useState(false);

  useEffect(() => {
    console.log("Componente Task executa", task);
  }, [task]);

  console.log("Componente Task executado", task);

  // função criada para alterar o estado da tarefa. Estabelece o valor booleano inverso do que estava antes. Ela é chamada com o evento de "onClick" (por se tratar de um button, mas se fosse um <input>, seria um "onChange") na tarefa selecionada (cada tarefa tem o pr´órpio "onChange")
  // const changeCompleted = (task) => {
  //   setCompleted(!isCompleted);
  // };

  return (
    <li
      className="flex justify-between items-center w-100 mb-2 p-2 rounded-xl border border-gray-300 hover:border-blue-500 hover:shadow-md transition-all"
    >
      {/* arrow function desnecessária por não possuir parâmetro */}
      <button onClick={() => onChangeTaskStatus(task._id)}>
        <span className={task.isCompleted ? "line-through" : " "}>
          {task.title}
        </span>
      </button>
      {/* necessário o uso de arrow function em deleteTask por necessitar de um parâmetro (task._id) */}
      <button
        onClick={() => {
          onDeleteTask(task._id);
        }}
        className="hover:cursor-pointer bg-red-500 text-white p-2 rounded-xl"
      >
        Remover
      </button>
    </li>
  );
}

export default memo(Task);
