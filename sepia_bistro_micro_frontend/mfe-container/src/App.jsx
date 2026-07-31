import React, { Suspense } from "react";
import "./App.css";

// importação dos módulos remotos
const Menu = React.lazy(() => import("menu/Menu"));
const Checkout = React.lazy(() => import("checkout/Checkout"));

function App() {
  return (
    <>
      <h1>Micro Frontends - Container</h1>
      {/* O componente "<Suspense>" gerencia o estado de carregamento */}
      <Suspense fallback={<div>Carregando o Menu</div>}>
        <Menu />
      </Suspense>
      <Suspense fallback={<div>Carregando o Pedido</div>}>
        <Checkout />
      </Suspense>
    </>
  );
}

export default App;
