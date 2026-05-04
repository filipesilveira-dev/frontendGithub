import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NovaTarefa from '@/components/NovaTarefa';

// Describe funciona como um agrupador de testes, permitindo organizar os casos de teste relacionados a um componente ou funcionalidade específica. Ele ajuda a estruturar os testes de forma mais legível e compreensível, facilitando a identificação do que está sendo testado e o contexto em que os testes estão inseridos. Como se trata de um teste de NovaTarefa, o describe é utilizado para agrupar os testes relacionados à validação e submissão de tarefas, tornando o código mais organizado e fácil de entender.
describe('NovaTarefa - Validação e Submissão', () => {
  // Cria o mock da função que o componente exige
  const mockOnAddTarefa = jest.fn();

test('deve validar o fluxo completo de adição de uma tarefa', () => {
    // 1. Renderização (passando a prop obrigatória)
    render(<NovaTarefa onAddTarefa={mockOnAddTarefa} />);

    // 2. Localização dos elementos

    // Localiza o input pelo placeholder e o botão pelo texto
    // Utilizar as duas barras ao invés de aspas para evitar problemas com acentos e maiúsculas. Entre aspas é buscada uma string exata, enquanto as barras permitem uma busca mais flexível (regex).
    // O "i" ao final torna a busca case-insensitive, ou seja, não diferencia maiúsculas de minúsculas.
    const input = screen.getByPlaceholderText(/digite uma nova tarefa/i) as HTMLInputElement;
    const botao = screen.getByRole('button', { name: /adicionar/i });

    // *** TESTE DE VALIDAÇÃO DE INPUT (Vazio) ***
    // Simula clique sem digitar nada
    fireEvent.click(botao);
    
    // Verifica se a função NÃO foi chamada (validação impediu a submissão)
    expect(mockOnAddTarefa).not.toHaveBeenCalled();

    // *** TESTE DE INPUT E SUBMISSÃO ***
    // Simula digitação
    fireEvent.change(input, { target: { value: 'Nova tarefa' } });
    expect(input.value).toBe('Nova tarefa');

    // Simula clique no botão para submeter
    fireEvent.click(botao);

    // *** ASSERÇÕES FINAIS ***
    // Verifica se a submissão enviou os dados corretos
    expect(mockOnAddTarefa).toHaveBeenCalledTimes(1);
    expect(mockOnAddTarefa).toHaveBeenCalledWith('Nova tarefa');

    // Verifica se o input foi limpo após o sucesso
    expect(input.value).toBe('');
  });
});