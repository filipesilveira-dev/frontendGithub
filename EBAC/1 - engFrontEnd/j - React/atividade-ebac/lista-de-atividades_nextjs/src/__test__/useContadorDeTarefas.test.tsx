import{renderHook, act} from "@testing-library/react";
import useContadorTarefas from "@/hooks/useContadorDeTarefas";

// Describe é utilizado para agrupar os testes relacionados ao hook personalizado useContadorTarefas, permitindo organizar os casos de teste de forma clara e estruturada. Ele ajuda a identificar que os testes dentro desse bloco estão focados na funcionalidade específica do contador de tarefas, facilitando a leitura e manutenção dos testes.
describe('useContadorTarefas', () => {

    // ** TESTE DE INICIALIZAÇÃO **
  test('deve iniciar com valores vazios e contador em zero', () => {
    // renderHook monta o hook em um componente "invisível"
    const { result } = renderHook(() => useContadorTarefas());

    // acessa o result.current que contém o retorno do hook useContadorTarefas. É esperado que o array de tarefas inicie vazio e o contador seja zero, confirmando que o hook está inicializando corretamente.
    expect(result.current.tasks).toEqual([]);
    expect(result.current.contador).toBe(0);
  });

  // **TESTE DE ATUALIZAÇÃO DO CONTADOR**
  test('deve atualizar o contador quando uma nova tarefa for adicionada', () => {
    // renderiza o hook para obter acesso ao seu estado e funções
    const { result } = renderHook(() => useContadorTarefas());

    // Qualquer ação que mude o estado deve estar dentro do act()
    act(() => {
        // Adiciona uma nova tarefa usando a função setTasks do hook. Isso simula a adição de uma tarefa, o que deve atualizar o estado interno do hook e, consequentemente, o contador de tarefas.
      result.current.setTasks([{ id: 1, title: 'Estudar Testes' }]);
    });

    // Verifica se o array agora tem 1 item e o contador refletiu isso
    expect(result.current.tasks.length).toBe(1);
    expect(result.current.contador).toBe(1);
  });
});
