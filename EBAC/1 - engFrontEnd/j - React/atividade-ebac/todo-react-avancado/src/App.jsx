import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    // pega as strings armazenadas no localstorage e atribui à variável "tasks"
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Função para mudar o estado de conclusão de uma tarefa, aplicando !task.isCompleted na tarefa com id idêntico ao id passado como argumento
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  // Função para filtrar apenas as tarefas que possuem o id diferente do id passado como argumento
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // Função chamada ao clicar para adicionar uma tarefa. Ela cria um objeto que será adicionado ao useState que recebe as tarefas
  function onAddTaskSubmit(title) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  // utilizado para salvar os objetos "tarefa" no local storage. Necessita transformá-los para string
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-screen min-h-screen bg-purple-500 p-6 flex flex-col items-center">
      <div className="w-125 flex flex-col gap-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          To-do List
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
