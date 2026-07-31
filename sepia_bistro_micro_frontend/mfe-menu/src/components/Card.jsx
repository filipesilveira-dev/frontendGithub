const Card = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>
          <div>
            <img src="https://placehold.co/300x200" alt="" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
          <button
            onClick={() => {
              // dispara (emite) esse evento globalmente para o objeto "window" do navegador. Qualquer parte da aplicação que esteja "escutando" esse evento específico (geralmente usando "window.addEventListener('adicionarCarrinho', callback)") será notificada imediatamente
              window.dispatchEvent(
                // cria um novo evento customizado no navegador chamado "adicionarCarrinho". É por meio do "detail" que você envia dados junto com o evento (a variável "p" nesse caso)
                new CustomEvent("addToCheckout", { detail: item }),
              );
            }}
          >
            Adicionar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Card;
