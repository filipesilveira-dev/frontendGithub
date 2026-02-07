import useInput from "../hooks/useInput";

export default function AddTask({ onAddTask }) {

  // Recebe o objeto literal retornado peo useInput
  const task = useInput();

  //   Objetivos da função: prevenir recarregamento da página, validação simples, impedindo a inserção de tarefas sem nada escrito e adicionar a tarefa à lista preexeistente, utilizando função "addTask" passada via props.
  const handleSubmit = (e) => {
    // evita o recarregamento completo da página
    e.preventDefault();

    // Validação: utiliza o useState do useInput
    if (task.value.trim() === "") return;

    // Envio de formulário e renderização: utiliza o useState do Inpute e passa como parâmetro da função
    onAddTask(task.value.trim());
    
    // Função de limpeza obtida de useInput
    task.clean();
  };

  return (
    <div>
      <form 
      className="className= flex flex-col justify-center items-center"
      onSubmit={handleSubmit}>
        <input
        className="m-2 w-full
                  rounded-lg
                  border border-gray-300
                  px-3 py-2
                  focus:outline-none
                  focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500"
          type="text"
          placeholder="Digite uma nova tarefa"
          value={task.value}
          //   captura o evento como argumento da arrow function e vai estabelecer a variável nexTask com o valor gerado no input em específico
          onChange={task.onChange}
        />
        <button type="submit" className = "cursor-pointer mt-2 p-3 bg-gray-600 rounded-sm text-white hover:bg-gray-400">
          Adicionar
        </button>
      </form>
    </div>
  );
}
