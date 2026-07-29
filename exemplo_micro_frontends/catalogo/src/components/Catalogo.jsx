export default function Catalogo() {
  const produtos = ["Notebook", "Celular", "Fone de ouvido"];
  return (
    <>
      <h2>Catálogo</h2>
      <ul>
        {produtos.map((p) => (
          <li key={p}>
            {p}
            <button
              onClick={() => {
                // dispara (emite) esse evento globalmente para o objeto "window" do navegador. Qualquer parte da aplicação que esteja "escutando" esse evento específico (geralmente usando "window.addEventListener('adicionarCarrinho', callback)") será notificada imediatamente
                window.dispatchEvent(
                  // cria um novo evento customizado no navegador chamado "adicionarCarrinho". É por meio do "detail" que você envia dados junto com o evento (a variável "p" nesse caso)
                  new CustomEvent("adicionarCarrinho", { detail: p }),
                );
              }}
            >
              Adicionar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
