import { useCallback, useEffect } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import { useRecoilState, useRecoilValue } from "recoil";
import {userState} from "../state/user";
import {tasksState} from "../state/tasks";
import { filterState, filteredTasksSelector } from "../state/filter";

export default function ToDoList() {
  const API_URL =
    "https://crudcrud.com/api/213c4de024b246f2b9c06d6536ddd5ea/tasks";

  // tasks recebe o átomo tasksState. Utilizando o "useRecoilState", é possível ler e alterar seu valor. Aqui foi necessário para substotuir o state "const [tasks, setTasks] = useState([]);"
  const [tasks, setTasks] = useRecoilState(tasksState);

    // Uso do Recoil para pegar o valor (filter) e o setter (setFilter)
  const [filter, setFilter] = useRecoilState(filterState);

  // Constante que recebe o valor do selector "filteredTasksSelector", o qual retorna as tarefas filtradas
  const filteredTasks = useRecoilValue(filteredTasksSelector);

  // Uso do Recoil para pegar apenas o valor (value)
  const  user  = useRecoilValue(userState);

  console.log("Componente ToDoList executado");

  useEffect(() => {
    console.log("Componente montado");
  }, []);

  // Busca os dados na API quando o componente for montado
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => {
        console.error("Falha ao buscar tarefa", error);
        alert("Não foi possível carregar as tarefas. Altere o endpoint.");
      });
  }, []);

  const addTask = (title) => {
    // Envio da tarefa para a API. O nome do usuário vem do useContext estabelecido lá em App. O nome do usuário está salvo em "name", logo para resgatá-lo aqui será necessário o "user.name"
    const nova = { user: user.name, title, isCompleted: false };

    fetch(API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(nova),
    })
      .then((res) => res.json())
      .then((createdTask) => {
        setTasks((prev) => [...prev, createdTask]);
        console.log("Tarefa adicionada com sucesso!");
      })
      .catch((error) => console.error("Falha ao buscar tarefa", error));
  };

  // A função de deletar foi movida para o componente ToDoList para evitar a passagem do estado completo de tasks via props. Ao utilizar useCallback, garante-se que a referência da função deleteTask seja preservada entre os re-renders do ToDoList. Isso não impede que o componente pai seja re-renderizado quando o estado muda, mas evita que os componentes Task, que estão memorizados com memo, sejam re-renderizados desnecessariamente apenas por causa da recriação da função. Dessa forma, apenas o item efetivamente removido deixa de ser exibido, enquanto os demais componentes permanecem intactos, resultando em uma renderização mais eficiente.
  const deleteTask = useCallback((id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then(() => {
        // uso de callback evitando adicionar o array tasks (utilizado "prev" no lugar. Versão anterior logo abaixo)
        setTasks((prev) => prev.filter((task) => task._id !== id));
        //setTasks(tasks.filter((task) => task._id !== id));
        console.log("Tarefa deletada com sucesso!");
      })
      .catch((error) => {
        console.error("Falha ao deletar tarefa", error);
        alert("Não foi possível deletar a tarefa.");
      });
  }, []);

    // função criada para alternar (toggle) a propriedade, no backend, "isCompleted" da task clicada como concluída
  const changeTaskStatus = (taskId) => {
    // Variável criada para receber a task, dentro de tasks, que possui o seu "_id" igual ao "taskId" passado como argumento na função
    const task = tasks.find((taskToUpdate) => taskToUpdate._id === taskId);
    // Um servidor de API nunca deve receber um "_id" no body (ele já saber qual o _id pela URL). Aqui está sendo feita uma desestruturação do objeto "task", ou seja estão sendo extraídas propriedades do objeto "task" e estão sendo salvas em variáveis. No caso, "_id" está sendo extraída para uma "const _id" e, por meio de um rest operator "...", todas as outras propriedades estão sendo salvas em uma "const taskWithoutId", a qual será passada no body ao invés de "task". Em resumo, a ideia é retirar o "_id" do objeto "task" para não dar erro no momento de atualizar a tarefa. Rest operator junta o restante. Spread operator copia.
    const { _id, ...taskWithoutId } = task;

    fetch(`${API_URL}/${taskId}`, {
      // Atualiza toda a task (todas suas propriedades, menos _id)
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // "...taskWithoutId" representa todas as propriedades que não foram desestruturadas. Elas então são enviadas, invertendo o estado de "isCompleted", ao servidor, que não responde nada, por isso não há ".then((res)=> res.json())". Enviar "...taskWithoutId", apenas as propriedades do objeto "taskWithoutId", ou seja, apenas {"title": "surfar", "isCompleted": flase}, é diferente de enviar o objeto "taskWithoutId". No segundo caso, suas propriedades vão "encapsuladas" por "taskWithoutId".
        ...taskWithoutId,
        isCompleted: !task.isCompleted,
      }),
    })
      // Pega a task em json, aqui chamada de updatedTask e atualiza o estado no frontend
      .then(() => {
        // Atualização do estado no frontend
        setTasks((prev) =>
          // Percorre o estado anterior de tasks, procura a task que possui o _id igual ao passado como argumento e, caso ache, copia todas as outras propriedades de "task", por meio do "...task", e inverte a propriedade "isCompleted". Caso contrário, mantém a task inalterada
          prev.map((t) =>
            t._id === taskId ? { ...t, isCompleted: !t.isCompleted } : t,
          ),
        );
      })
      .catch((error) => {
        console.error("Falha ao atualizar tarefa", error);
        alert("Não foi possível atualizar a tarefa.");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* componente responsável pelas tarefas adicionadas. Passadas as propriedades para alterar o useState "tasks" */}
      <AddTask onAddTask={addTask} />

      <div>
        <select
          className="cursor-pointer text-center mb-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option
            className="cursor-pointer text-center m-2 p-2 bg-white"
            value="all"
          >
            {" "}
            Todas{" "}
          </option>
          <option
            className="cursor-pointer text-center m-2 p-2 bg-white"
            value="completed"
          >
            {" "}
            Concluídas{" "}
          </option>
          <option
            className="cursor-pointer text-center m-2 p-2 bg-white"
            value="pending"
          >
            {" "}
            Pendentes{" "}
          </option>
        </select>
      </div>

      {/* componente responsável pelas tarefas que aparecem para o usuário */}
      {/* map() feito em filteredTasks: só aparecerão as tarefas que passarem pelo filtro */}
      {filteredTasks
        // filtra apenas as tarefas em que o nome do usuário salvo no ato de adicionar a tarefa seja igual ao nome do usuário do login no momento
        .filter((task) => task.user === user.name)
        .map((task) => (
          <Task
            key={task._id}
            // criado pelo método map() abrange todas as características de UMA tarefa (_id e title). Trata-se de uma variável temporária. Representa cada item da array durante a iteração. Utilizado em filter() para comparar o _id da tarefa em questão com o id recebido como argumento da função "deleteTask".
            task={task}
            onDeleteTask={deleteTask}
            onChangeTaskStatus={changeTaskStatus}
          />
        ))}
    </div>
  );
}
