"use client";

import { useState } from "react";
import ListaTarefas from "./ListaTarefas";
import NovaTarefa from "./NovaTarefa";
import useContadorDeTarefas from "../hooks/useContadorDeTarefas";


interface Tarefa {
  id: number;
  title: string;
}

interface ListaTarefasContainerProps {
  tarefas: Tarefa[];
}

export default function ListaTarefasContainer({tarefas}: ListaTarefasContainerProps) {
  const [tasks, setTasks] = useState<Tarefa[]>(tarefas);

  const addTarefa = (title: string) => {
    const nova = { id: Date.now(), title: title };
    setTasks([...tasks, nova]);
  };
  
  return (
    <>
      <NovaTarefa onAddTarefa = {addTarefa}/>
      <ListaTarefas tarefas = {tasks}/>
      <span>{tasks.length} tarefas</span>
    </>
  );
}
