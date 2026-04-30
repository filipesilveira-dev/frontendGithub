// Client side porque utiliza o estado global
"use client";

import ItemTarefa from "./ItemTarefa";

interface Tarefa {
  id: number;
  title: string;
}

interface ListaTarefasProps {
  tarefas: Tarefa[];
}

export default function ListaTarefas({ tarefas }: ListaTarefasProps) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <ItemTarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}
