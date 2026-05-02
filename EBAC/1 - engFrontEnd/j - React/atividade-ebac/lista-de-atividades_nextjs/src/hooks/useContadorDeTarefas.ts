import { useState } from "react";

interface Tarefa {
  id: number;
  title: string;
}

export default function useContadorDeTarefas(initialValue = []) {
    // substitui o uso de um useState local
    const [tasks, setTasks] = useState<Tarefa[]>(initialValue);

    // contador de tarefas: utiliza o length do array de tarefas para contar quantas tarefas existem. É atualizado automaticamente toda vez que o estado de tarefas é atualizado, garantindo que o contador esteja sempre correto.  
    const contador = tasks.length;

    return{
        tasks,
        setTasks,
        contador,
    };
}