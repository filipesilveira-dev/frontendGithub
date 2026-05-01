// client side component: especifica ao next que este arquivo, por utilizar estados e hook, faz parte do lado do cliente 
"use client";

import { SubmitEvent, useState } from "react";

interface NovaTarefaProps{
  onAddTarefa: (tarefa: string)=>void;
}

export default function NovaTarefa({onAddTarefa}: NovaTarefaProps) {
  // Estado local para controlar o que é inserido pelo usuário
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleSubmit = (e: SubmitEvent) => {
    // evita o recarregamento completo da página
    e.preventDefault();

    // Validação: utiliza o useState do useInput
    if (novaTarefa.trim() === "") return;

    // Envio de formulário e renderização: utiliza o useState local do Input e passa como parâmetro da função
    onAddTarefa(novaTarefa.trim());

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
