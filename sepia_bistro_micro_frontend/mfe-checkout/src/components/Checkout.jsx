import { useEffect, useState } from "react";
import "./Checkout.css";
import checkout from "../assets/checkout.webp"

export default function Checkout() {
  const [items, setItems] = useState([]);

  // ao ser montado o componente, é disparado o efeito de useEffect que no caso se trata na transformação do componete em um "ouvinte" de um evento chamado "adicionarCarrinho", disparado lá no micro frontend catalogo ao clicar no botão de "Adicionar ao carrinho". Caso o evento seja disparado lá, o seu "detail" (e.detail) é adicionado no estado de "items". Vale relembrar que o detail passado lá de catalogo é o nome do produto presente na lista de produtos.
  useEffect(() => {
    // função de callback: ela é cahamada apenas quando ouve o evento "adicionarCarrinho". Necessária sua declaração para dar a exata referência no momento de remover o evento
    const handleAdd = (event) => {
      // Dica: Sempre use o estado anterior (prev) em eventos globais 
      // para não depender do escopo da renderização inicial
      setItems((prev) => [...prev, event.detail]);
    };

    // adição do ouvinte no objeto window
    window.addEventListener("addToCheckout", handleAdd);

    // função de retorno remove o ouvinte quando o componente for desmontado ou re-renderizado. Isso mata o vazamento de memória. 
    return () => {
      window.removeEventListener("addToCheckout", handleAdd);
    };
    // dependência com array vazia para o useEffect rodar apenas na montagem
  },[]);

  return (
    <div className="checkout-container">
      <div className="checkout-desktop-view">
        <h2 className="checkout-heading">Seu Pedido</h2>
        {items.length === 0 ? (
          <div className="checkout-empty-state">
            <p className="checkout-empty-message">
              <img src={checkout} alt="imagem de prato vazio" />
              <br/>Adicione algum prato
            </p>
          </div>
        ) : (
          <div className="checkout-content">
            <ul className="checkout-list">
              {items.map((item, index) => (
                <li key={index} className="checkout-item">
                  <span className="checkout-item-name">{item}</span>
                  <span className="checkout-item-qty">1x</span>
                </li>
              ))}
            </ul>
            
            <div className="checkout-footer">
              <button className="checkout-btn-primary">
                Finalizar Pedido
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="checkout-mobile-bar">
        <div className="mobile-bar-info">
          <span className="mobile-bar-qty">{items.length} itens</span>
          <span className="mobile-bar-total">A calcular</span>
        </div>
        <button className="mobile-bar-btn">
          Ver Sacola
        </button>
      </div>
    </div>
  );
}
