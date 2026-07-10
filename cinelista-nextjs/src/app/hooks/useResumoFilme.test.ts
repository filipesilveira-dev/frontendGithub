// import{renderHook} from “@testing-library/react”;
// import{useResumoFilme} from “./useResumoFilme”;

// test(“Retorna overview inteiro se menor que o limite”, ()=> {
// 	const texto = “Resumo curto”;
// 	const{result} = renderHook(()=>useResumoFilme(texto, 256));
// 	expect(result.current).toBe(texto);
// });

// test(“Retorna overview cortado e reticências se passar do limite”,()=>{
// 	const texto = “Lorem ipsum dolor sit amet, consectetur adipsing elit”;
// 	const{result} = renderHook(()=>useResumoFilme(texto, 10));
// // apesar do texto maior, é esperado apenas os dez primeiros caracteres + “...”
// 	expect(result.current).toBe(“Lorem ipsu…”);
// });

import { renderHook } from "@testing-library/react";
import { useResumoFilme } from "./useResumoFilme";

test("Retorna overview inteiro se menor que o limite", () => {
  const texto = "Resumo curto";
  const { result } = renderHook(() => useResumoFilme(texto, 256));
  expect(result.current).toBe(texto);
});

test("Retorna overview cortado e reticências se passar do limite", () => {
  const texto = "Lorem ipsum dolor sit amet, consectetur adipsing elit";
  const { result } = renderHook(() => useResumoFilme(texto, 10));
  // Aqui foi utilizado "toBe" ao invés de "toEqual" por ser esperada uma "string". Caso fosse esperado algo com "{}" ou "[]", seria mais indicado p "toEqual"
  expect(result.current).toBe("Lorem ipsu...");
});
