import { useEffect, useState } from "react";
import "./Checkout.css";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export default function Checkout() {
  const [items, setItems] = useState([]);
  // variável que recebe o resultado de um reduce: é percorrido o array de objetos "items" onde o preço do item é multiplicado à sua quantidade. O resultado é somado ao acumulador que inicia no valor "0"
  const totalValue = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // ao ser montado o componente, é disparado o efeito de useEffect que no caso se trata na transformação do componete em um "ouvinte" de um evento chamado "addToCheckout", disparado lá no micro frontend catalogo ao clicar no botão de "Adicionar ao pedido". Caso o evento seja disparado lá, o seu "detail" (e.detail) é adicionado no estado de "items". Vale relembrar que o detail passado lá de catalogo é um objeto que contém as propriedades id, name e price.
  useEffect(() => {
    // função de callback: ela é cahamada apenas quando ouve o evento "adicionarCarrinho". Necessária sua declaração para dar a exata referência no momento de remover o evento
    const handleAdd = (event) => {
      // a variável recebe o objeto com as propriedades id, nome e preço do item adicionado
      const newItem = event.detail;
      // para não depender do escopo da renderização inicial
      setItems((prevItems) => {
        // variável recebe o resultado de um find que busca na lista de objetos aquele cuja propriedade id é idêntica à propriedade id do item adicionado
        const existingItem = prevItems.find((item) => item.id === newItem.id);

        // caso exista um objeto com id idêntico
        if (existingItem) {
          // será feito um map no itens (objetos) salvos no estado "item". Caso o id seja idêntico ao id do novo item, será adicionado um novo objeto à lista com uma nova propriedade chamada "quantity" que seu valor será o valor anterior +1. Caso não tenha o id idêntico, será retornado o item com está, sem qualquer alteração.
          return prevItems.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        // caso não exista um id idêntico, serão retornados os itens já presentes na lista e, ao final, acrescidos do newItem e suas propriedades iniciais acrescidas da nova propriedade "quantity" no valor de 1
        return [...prevItems, { ...newItem, quantity: 1 }];
      });
    };

    // adição do ouvinte no objeto window
    window.addEventListener("addToCheckout", handleAdd);

    // função de retorno remove o ouvinte quando o componente for desmontado ou re-renderizado. Isso mata o vazamento de memória.
    return () => {
      window.removeEventListener("addToCheckout", handleAdd);
    };
    // dependência com array vazia para o useEffect rodar apenas na montagem
  }, []);

  const incrementQuantity = (itemId) => {
    setItems((previItems) =>
      previItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementQuantity = (itemId) => {
    setItems((previItems) =>
      previItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  return (
    <div className="checkout-container">
      <div className="checkout-desktop-view">
        <h2 className="checkout-heading">Seu Pedido</h2>
        {items.length === 0 ? (
          <div className="checkout-empty-state">
            <p className="checkout-empty-message">
              Sua lista de pedidos está vazia
            </p>
          </div>
        ) : (
          <div className="checkout-content">
            <ul className="checkout-list">
              {items.map((item) => {
                if (item.quantity > 0)
                  return (
                    <li key={item.id} className="checkout-item">
                      <span className="checkout-item-name">{item.name}</span>
                      <button
                        className="checkout-qty-btn"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="checkout-item-qty">
                        {item.quantity}x
                      </span>
                      <button
                        className="checkout-qty-btn"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </li>
                  );
              })}
            </ul>

            <div className="checkout-footer">
              <div className="checkout-total-row">
                <span>Total:</span>
                <strong>{formatCurrency(totalValue)}</strong>
              </div>

              <button className="checkout-btn-primary">Finalizar Pedido</button>
            </div>
          </div>
        )}
      </div>

      <div className="checkout-mobile-bar">
        <div className="mobile-bar-info">
          <span className="mobile-bar-qty">{items.length} itens</span>
          <span className="mobile-bar-total">{formatCurrency(totalValue)}</span>
        </div>
        <button className="mobile-bar-btn">Ver Sacola</button>
      </div>
    </div>
  );
}
