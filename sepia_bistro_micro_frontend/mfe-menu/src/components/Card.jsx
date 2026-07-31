const Card = ({ menuItems }) => {
  return (
    <ul className="menu-grid">
      {menuItems.map((item) => (
        <li key={item.id} className="menu-card">
          <div className="card-body">
            <img src="https://placehold.co/300x200" alt="" className="card-image" />
            <h3 className="card-title">{item.name}</h3>
            <p className="card-description">{item.description}</p>
            <p className="card-price">{item.price}</p>
          </div>
          <button
            className="card-button"
            onClick={() => {
              // dispara (emite) esse evento globalmente para o objeto "window" do navegador. Qualquer parte da aplicação que esteja "escutando" esse evento específico (geralmente usando "window.addEventListener('adicionarCarrinho', callback)") será notificada imediatamente
              window.dispatchEvent(
                // cria um novo evento customizado no navegador chamado "adicionarCarrinho". É por meio do "detail" que você envia dados junto com o evento (a variável "p" nesse caso)
                new CustomEvent("addToCheckout", { detail: item.name }),
              );
            }}
          >
            Adicionar ao pedido
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Card;
