// Possibilita criar mocks
import { jest } from "@jest/globals";
// Hooks não podem ser chamados como funções comuns (renderHook)
import { renderHook, act } from "@testing-library/react";
// Importa o hook a ser testado e a lista de cores que utiliza
import { useStyleSwitcher, colors } from "./app/hook/useStyleSwitcher"; // Importe o hook e o array

// Agrupa os testes (todos se referem ao hook useStyleSwitcher)
describe("useStyleSwitcher", () => {
    // Descreve o comportamento esperado
  it("deve alternar para uma cor diferente da atual", () => {

    // 1. Arrange: Mock do Math.random: o "spyOn" permite controlar o resultado randômico
    const randomSpy = jest
      .spyOn(Math, "random")
      // O primeiro sorteio retorna 0 (índice 0, cor atual: 'text-black')
      .mockReturnValueOnce(0)
      // O segundo sorteio retorna 0.99 (índice 3, cor: 'text-blue-500')
      .mockReturnValueOnce(0.99);

    // Passamos a constante 'colors' para o hook
    const { result } = renderHook(() => useStyleSwitcher(colors));

    // 2. Act: Executa a troca de estilo
    act(() => {
      result.current.changeStyle();
    });

    // 3. Assert: Verifica se o estado mudou para a cor do índice 3
    expect(result.current.currentStyle.text).toBe("text-blue-500");
    expect(randomSpy).toHaveBeenCalledTimes(2);

    // Limpeza
    randomSpy.mockRestore();
  });

  it("deve inicializar com a primeira cor do array fornecido", () => {
    const { result } = renderHook(() => useStyleSwitcher(colors));

    expect(result.current.currentStyle).toEqual(colors[0]);
  });
});
