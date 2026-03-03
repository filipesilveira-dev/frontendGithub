import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__logo}>
          <Link href="/">Cinelista</Link>
        </h1>
        <nav className={styles.header__nav}>
          {/* "Link" é um componente, recurso do next.js, com o qual o next.js intercepta a navegação e faz apenas a troca do conteúdo necessário e que:
                        - Permite navegação sem recarregar a página
                        - Mantém estados no cliente
                        - Pré-carregamento automático (prefetch)
                        - Melhor performance: atualiza a URL, atualiza o conteúdo e não recarrega o documento inteiro
                    */}
          <Link href="/">Início</Link>
          {/* Pasta criada em app para receber o arquivo que será renderizado ao se clicar no Link */}
          <Link href="/filmes/em-alta">Em alta</Link>
          <Link href="/filmes/populares">Populares</Link>
          <Link href="/filmes/top-filmes">Top filmes</Link>
        </nav>
      </div>
    </header>
  );
};

// Exportado para layout.tsx (componente pai)
export default Header;
