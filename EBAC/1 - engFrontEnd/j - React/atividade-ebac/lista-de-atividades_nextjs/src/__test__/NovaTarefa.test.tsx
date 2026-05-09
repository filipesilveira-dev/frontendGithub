import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NovaTarefa from '@/components/NovaTarefa';

// O jsdom (o ambiente que simula o navegador para o Jest) não implementa o método .focus() de forma nativa para disparar eventos complexos. Portanto, é necessário criar um mock para o método .focus() para evitar erros relacionados a ele durante os testes. O jest.fn() cria uma função simulada que pode ser monitorada e personalizada conforme necessário, garantindo que os testes possam ser executados sem falhas devido à ausência do método .focus() no ambiente de teste. Isso é especialmente importante para componentes que dependem de interações de foco para funcionar corretamente, como campos de input ou botões.  
window.focus = jest.fn();

// Describe funciona como um agrupador de testes, permitindo organizar os casos de teste relacionados a um componente ou funcionalidade específica. Ele ajuda a estruturar os testes de forma mais legível e compreensível, facilitando a identificação do que está sendo testado e o contexto em que os testes estão inseridos. Como se trata de um teste de NovaTarefa, o describe é utilizado para agrupar os testes relacionados à validação e submissão de tarefas.
describe('NovaTarefa - Validação e Submissão', () => {
  // Cria o mock da função que o componente exige
  const mockOnAddTarefa = jest.fn();

test('deve validar o fluxo completo de adição de uma tarefa', () => {
    // 1. Renderização (passando a prop obrigatória)
    render(<NovaTarefa onAddTarefa={mockOnAddTarefa} />);

    // 2. Localização dos elementos após a renderização
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
    // Simula digitação do usuário no input
    fireEvent.change(input, { target: { value: 'Nova tarefa' } });
    // Verifica se o valor do input foi atualizado corretamente com o texto digitado pelo usuário
    // O uso do toBe é mais indicado para tipos primitivos, como strings, números ou booleanos, onde a comparação é feita por valor. Já o toEqual é mais adequado para objetos e arrays, onde a comparação é feita por estrutura e conteúdo. No caso do input.value, que é uma string, o toBe é a escolha mais apropriada para verificar se o valor do input corresponde exatamente à string 'Nova tarefa'.
    expect(input.value).toBe('Nova tarefa');
    // Simula clique no botão para submeter
    fireEvent.click(botao);

    // *** ASSERÇÕES FINAIS ***
    // Verifica se a submissão enviou os dados corretos: é esperado que a função mockOnAddTarefa seja chamada exatamente uma vez e que tenha sido chamada com o argumento 'Nova tarefa', confirmando que a tarefa foi processada corretamente.
    expect(mockOnAddTarefa).toHaveBeenCalledTimes(1);
    expect(mockOnAddTarefa).toHaveBeenCalledWith('Nova tarefa');
    // Verifica se o input foi limpo após o sucesso
    expect(input.value).toBe('');
  });
});