// Client side porque utiliza o estado global
"use client";

import ItemTarefa from "./ItemTarefa";

interface Tarefa {
  id: number;
  title: string;
}

interface ListaTarefasProps {
  tarefas: Tarefa[];
  contador: number;
}

// Recebe props de ListaTarefasContainer
export default function ListaTarefas({ tarefas, contador }: ListaTarefasProps) {
  return (
    <>
      {/* Caso "tarefas" esteja vazia, renderiza o <p> com a mensagem "nenhuma tarefa cadastrada" */}
      {tarefas.length === 0 ? 
        <p>Nenhuma tarefa cadastrada</p>
       :
        // Caso contrário, renderiza a lista de tarefas utilizando o componente ItemTarefa para cada item do array "tarefas"
        <ul>
          {tarefas.map((tarefa) => (
            <ItemTarefa key={tarefa.id} tarefa={tarefa} />
          ))}
        </ul>
      }
      
      {/* Criado para o contador de tarefas */}
      <span data-testid="contador-valor">{contador} tarefa(s)</span>
    </>
  );
}
