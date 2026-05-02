"use client";
import ListaTarefas from "./ListaTarefas";
import NovaTarefa from "./NovaTarefa";
import useContadorDeTarefas from "../hooks/useContadorDeTarefas";


export default function ListaTarefasContainer() {
  // Desestruturação do hook personalizado para obter as tarefas, a função de atualização e o contador
  const { tasks, setTasks, contador } = useContadorDeTarefas();

  // Função para adicionar uma nova tarefa, que é passada como prop para o componente NovaTarefa
  const addTarefa = (title: string) => {
    const nova = { id: Date.now(), title: title };
    // Atualiza o estado global de tarefas utilizando a função setTasks do hook personalizado, adicionando a nova tarefa ao array existente
    setTasks([...tasks, nova]);
  };
  
  return (
    <>
      <NovaTarefa onAddTarefa = {addTarefa}/>
      <ListaTarefas tarefas = {tasks}/>
      <span>{contador} tarefas</span>
    </>
  );
}
