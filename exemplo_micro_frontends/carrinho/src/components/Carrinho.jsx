import { useEffect, useState } from "react";

export default function Carrinho() {
  const [items, setItems] = useState([]);

  // ao ser montado o componente, é disparado o efeito de useEffect que no caso se trata na transformação do componete em um "ouvinte" de um evento chamado "adicionarCarrinho", disparado lá no micro frontend catalogo ao clicar no botão de "Adicionar ao carrinho". Caso o evento seja disparado lá, o seu "detail" (e.detail) é adicionado no estado de "items". Vale relembrar que o detail passado lá de catalogo é o nome do produto presente na lista de produtos.
  useEffect(() => {
    // função de callback: ela é cahamada apenas quando ouve o evento "adicionarCarrinho". Necessária sua declaração para dar a exata referência no momento de remover o evento
    const lidarComAdicao = (evento) => {
      // Dica: Sempre use o estado anterior (prev) em eventos globais 
      // para não depender do escopo da renderização inicial
      setItems((prev) => [...prev, evento.detail]);
    };

    // adição do ouvinte no objeto window
    window.addEventListener("adicionarCarrinho", lidarComAdicao);

    // função de retorno remove o ouvinte quando o componente for desmontado ou re-renderizado. Isso mata o vazamento de memória. 
    return () => {
      window.removeEventListener("adicionarCarrinho", lidarComAdicao);
    };
    // dependência com array vazia para o useEffect rodar apenas na montagem
  },[]);

  return (
    <>
      <h2>Carrinho</h2>
      {items.length === 0 ? (
        <p>nenhum item do carrinho</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
