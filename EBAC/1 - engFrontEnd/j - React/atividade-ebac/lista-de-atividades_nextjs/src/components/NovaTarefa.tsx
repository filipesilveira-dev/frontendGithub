// client side component: especifica ao next que este arquivo, por utilizar estados e hook, faz parte do lado do cliente
"use client";

import { SubmitEvent, useState } from "react";
import { NovaTarefaProps } from "@/types/type";

export default function NovaTarefa({ onAddTarefa }: NovaTarefaProps) {
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
    focus(); // mantém o foco no input após adicionar a tarefa
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        type="text"
        placeholder="Digite uma nova tarefa"
        className="flex-1 px-4 py-2 sm:mb-6 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all text-gray-700 w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 mb-6 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 active:bg-gray-900 transition-colors w-full sm:w-auto"
      >
        Adicionar
      </button>
    </form>
  );
}
