// client side component
"use client";

import ListaTarefas from "./ListaTarefas";
import NovaTarefa from "./NovaTarefa";
import useContadorDeTarefas from "../hooks/useContadorDeTarefas";


export default function ListaTarefasContainer() {
  // Desestruturação do hook personalizado para obter as tarefas, a função de atualização e o contador. Importado aqui por conta de addTarefa
  const { tasks, setTasks, contador } = useContadorDeTarefas();

  // Função para adicionar uma nova tarefa, que é passada como prop para o componente NovaTarefa
  const addTarefa = (title: string) => {
    // Ao ser acionada, a função cria um novo objeto "nova" com um id único (utilizando Date.now()) e o título da tarefa recebido como parâmetro
    const nova = { id: Date.now(), title: title };
    // Atualiza o estado global de tarefas utilizando a função setTasks do hook personalizado, adicionando a nova tarefa ao array existente
    setTasks([...tasks, nova]);
  };
  
  return (
    <>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Minhas Atividades</h1>
          <NovaTarefa onAddTarefa = {addTarefa}/>
          <ListaTarefas tarefas = {tasks} contador = {contador}/>
        </div>
      </main>
    </>
  );
}
