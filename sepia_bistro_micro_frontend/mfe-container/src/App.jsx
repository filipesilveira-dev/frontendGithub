import React, { Suspense } from "react";
import "./App.css";

// importação dos módulos remotos
const Menu = React.lazy(() => import("menu/Menu"));
const Checkout = React.lazy(() => import("checkout/Checkout"));

function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-content">
          <span className="logo-sepia">Sépia <span className="logo-bistro">Bistrô</span></span>
          <nav className="nav-links">
            <a href="#menu" className="active">Cardápio</a>
            <a href="#about">Nosso Bistrô</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section id="menu" className="menu-column">
          <Suspense fallback={<div className="loading-state">Carregando o Cardápio...</div>}>
            <Menu />
          </Suspense>
        </section>

        <aside className="checkout-column">
          <Suspense fallback={<div className="loading-state">Carregando o Pedido...</div>}>
            <Checkout />
          </Suspense>
        </aside>
      </main>
    </div>
  );
}

export default App;
