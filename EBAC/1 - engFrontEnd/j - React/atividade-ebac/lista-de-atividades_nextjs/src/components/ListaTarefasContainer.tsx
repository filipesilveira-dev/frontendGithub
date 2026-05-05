// client side component
"use client";

import ListaTarefas from "./ListaTarefas";
import NovaTarefa from "./NovaTarefa";
import useContadorDeTarefas from "../hooks/useContadorDeTarefas";
import { useEffect, useState } from "react";
import {initialTasks} from "@/lib/initialTasks";

export default function ListaTarefasContainer() {
  // Desestruturação do hook personalizado para obter as tarefas, a função de atualização e o contador. Importado aqui por conta de addTarefa
  const { tasks, setTasks, contador } = useContadorDeTarefas();
  // State para controlar o estado de carregamento das tarefas, inicialmente definido como true para indicar que as tarefas estão sendo carregadas
  const [loading, setLoading] = useState(true);

  // Simulação de carregamento de tarefas utilizando useEffect, que é executado apenas uma vez após a montagem do componente (devido ao array de dependências vazio). Dentro do useEffect, é definida uma função assíncrona fetchTasks que simula uma chamada de API com um delay de 1 segundo. Após o delay, o estado de tarefas é atualizado com os dados importados do arquivo initialTasks, e o estado de carregamento é definido como false para indicar que as tarefas foram carregadas.
  useEffect(() => {
    // Simulando uma chamada de API com fetch
    const fetchTasks = async () => {
      try {
        // Cria um objeto Promise que resolve após um delay de 1 segundo, simulando o tempo de resposta de uma API
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay de 1 segundo
        // Define o estado com os dados do arquivo que contém as tarefas iniciais, importado do arquivo initialTasks
        setTasks(initialTasks); 
        // Tratamento de erros: caso ocorra algum erro durante o processo de carregamento das tarefas, ele será capturado e exibido no console para facilitar a depuração
      } catch (error) {
        console.error("Erro ao carregar tarefas", error);
      } finally {
        // Altera o estado de carregamento para false, independentemente do sucesso ou falha da operação de carregamento
        setLoading(false);
      }
    };
    // Chama a função de carregamento das tarefas
    fetchTasks();
    // Preenchimento de dependências necessário para evitar warnings do React, garantindo que a função setTasks seja incluída como dependência do useEffect, mesmo que ela seja estável e não cause re-renderizações desnecessárias
  }, [setTasks]);

  // Função para adicionar uma nova tarefa, que é passada como prop para o componente NovaTarefa
  const addTarefa = (title: string) => {
    // Ao ser acionada, a função cria um novo objeto "nova" com um id único (utilizando Date.now()) e o título da tarefa recebido como parâmetro
    const nova = { id: Date.now(), title: title };
    // Atualiza o estado global de tarefas utilizando a função setTasks do hook personalizado, adicionando a nova tarefa ao array existente
    // O uso de prev dentro do setTasks garante que a atualização seja feita com base no estado anterior, evitando problemas de concorrência
    setTasks((prev) => [...prev, nova]);
  };

  if (loading) return <p>Carregando atividades...</p>;
  return (
    <>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Minhas Atividades
          </h1>
          <NovaTarefa onAddTarefa={addTarefa} />
          <ListaTarefas tarefas={tasks} contador={contador} />
        </div>
      </main>
    </>
  );
}
