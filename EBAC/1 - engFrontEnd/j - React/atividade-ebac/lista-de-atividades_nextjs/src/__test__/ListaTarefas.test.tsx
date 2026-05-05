import { render, screen } from "@testing-library/react";
// Importado por conta do uso do "tobeInTheDocument" para verificar se os elementos estão presentes no DOM
import "@testing-library/jest-dom";
import ListaTarefas from "@/components/ListaTarefas";

describe("ListaTarefas - Renderização e Contador", () => {
  test("deve renderizar a lista e o contador corretamente", () => {
    // 1. Renderiza o componente real
    render(<ListaTarefas tarefas={[]} contador={0} />);

    // 2. Verifica a "Renderização dos elementos" (Estado Inicial)
    const mensagemVazia = screen.getByText(/nenhuma tarefa cadastrada/i); // verifica o <p> de mensagem vazia
    const contador = screen.getByTestId("contador-valor"); // verifica o contador, que deve estar presente mesmo com a lista vazia
    expect(mensagemVazia).toBeInTheDocument(); // uso da testing library para verificar se a mensagem de lista vazia está presente no DOM
    expect(contador).toBeInTheDocument(); // uso da testing library para verificar se a mensagem de lista vazia está presente no DOM

    // 3. Verifica se o contador exibido na tela bate com o valor inicial do Hook
    const contadorNoDom = screen.getByTestId("contador-valor");
    expect(contadorNoDom).toHaveTextContent("0"); // Espera-se que o tasks.length seja 0
  });
});
