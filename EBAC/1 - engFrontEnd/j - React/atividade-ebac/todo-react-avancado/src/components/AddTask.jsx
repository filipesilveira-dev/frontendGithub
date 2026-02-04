// Aqui estará o código para:
//      1 - Armazenar localmente
//      2 - Chamar localmente
//      3 - Chamada de API para montar e renderizar (método GET)
//      4 - A estrutura do formulário que cadastrará ou deletará a tarefa
import { useState } from "react";
// import { useInput } from "../../../../exercicios/my-app/src/hooks/useInput";

function AddTask({ onAddTaskSubmit }) {
  // variável criada para receber o setState que receberá o valor do input (título da tarefa)
  const [title, setTitle] = useState("");
  return (
    <div
      className="space-y-4 p-6 bg-purple-200 rounded-md shadow flex flex-col"
      //onSubmit={onAddTaskSubmit(title)}
    >
      <input
        type="text"
        placeholder="Digite uma tarefa"
        className=" text-slade-500 bg-white border border-purple-300 outline-purple-400 px-4 py-2 rounded-md"
        value={title}
        // estabelece o que o usuário inserir em setTitle
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="bg-purple-950 text-white px-4 py-2 rounded-md hover:cursor-pointer"
        onClick={() => {
          // verifica se o título está prrenchido
          if(!title.trim()){
            return alert("Insira alguma tarefa");
          }
          onAddTaskSubmit(title);
          setTitle("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
