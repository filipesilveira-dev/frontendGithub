// client side component: especifica ao next que este arquivo, por utilizar estados e hook, faz parte do lado do cliente 
"use client";

import { useTarefaStore } from "@/store/useTarefaStore";
import { SubmitEvent, useState } from "react";

export default function NovaTarefa() {
  // Estado local para controlar o que é inserido pelo usuário
  const [novaTarefa, setNovaTarefa] = useState("");

  // const addTarefa = useTarefaStore((state) => state.addTarefa);
  // Desestruturação de objeto
  const { addTarefa } = useTarefaStore();

  const handleSubmit = (e: SubmitEvent) => {
    // evita o recarregamento completo da página
    e.preventDefault();

    // Validação: utiliza o useState do useInput
    if (novaTarefa.trim() === "") return;

    // Envio de formulário e renderização: utiliza o useState local do Input e passa como parâmetro da função
    addTarefa(novaTarefa.trim());

    // Atualiza o estado local como vazio para receber a próxima tarefa
    setNovaTarefa("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        type="text"
        placeholder="Digite uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
