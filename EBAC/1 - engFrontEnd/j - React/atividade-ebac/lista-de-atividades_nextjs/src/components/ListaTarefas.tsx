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
      {/* Mensagem de lista vazia com estilo centralizado e suave */}
      {tarefas.length === 0 ? (
        <p className="text-center text-gray-500 py-10 italic">
          Nenhuma tarefa cadastrada
        </p>
      ) : (
        // w-full garante que a lista use o espaço do container pai; max-w-md limita em telas grandes
        <ul className="w-full max-w-md space-y-2">
          {tarefas.map((tarefa) => (
            <ItemTarefa key={tarefa.id} tarefa={tarefa} />
          ))}
        </ul>
      )}

      {/* Contador responsivo: centralizado no mobile e com margem superior para respiro */}

      <div className="w-full flex justify-center">
        <span
          data-testid="contador-valor"
          className="text-xs font-bold uppercase tracking-wider bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full inline-block"
        >
          {contador} tarefa(s)
        </span>
      </div>
    </>
  );
}
