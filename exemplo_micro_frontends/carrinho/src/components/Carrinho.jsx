import { useEffect, useState } from "react";

export default function Carrinho() {
  const [items, setItems] = useState([]);

  // ao ser montado o componente, é disparado o efeito de useEffect que no caso se trata na transformação do componete em um "ouvinte" de um evento chamado "adicionarCarrinho", disparado lá no micro frontend catalogo ao clicar no botão de "Adicionar ao carrinho". Caso o evento seja disparado lá, o seu "detail" (e.detail) é adicionado no estado de "items". Vale relembrar que o detail passado lá de catalogo é o nome do produto presente na lista de produtos.
  useEffect(() => {
    window.addEventListener("adicionarCarrinho", (e) =>
      setItems((prev) => [...prev, e.detail]),
    );
  });

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
