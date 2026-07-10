import { useMemo } from "react";

export function useResumoFilme(overview: string, max = 180) {
  // o useMemo utiliza uma referência da função
  return useMemo(() => {
    // se o “overview” for menor ou igual ao “max”, retorne o “overview” todo
    if (overview.length <= max) return overview;

    // caso contrário, retorna apenas um pedaço do “overview”, do caracter na posição “0” até o “180” e “...”
    return overview.slice(0, max) + "...";

    // dependências que, caso alterem, indicam que o useResumoFilme deve re-renderizar
  }, [overview, max]);
}
