import React, { Suspense } from "react";
import "./App.css";

// importação dos módulos remotos
const Catalogo = React.lazy(() => import("catalogo/Catalogo"));
const Carrinho = React.lazy(()=> import("carrinho/Carrinho"));

function App() {
  return (
    <>
    <h1>Micro Frontends - Container</h1>
      {/* O componente "<Suspense>" gerencia o estado de carregamento */}
      <Suspense fallback={<div>Carregando o Catálogo de produtos</div>}>
        <Catalogo />
      </Suspense>
      <Suspense fallback={<div>Carregando o Carrinho de compras</div>}>
        <Carrinho />
      </Suspense>
    </>
  );
}

export default App;
