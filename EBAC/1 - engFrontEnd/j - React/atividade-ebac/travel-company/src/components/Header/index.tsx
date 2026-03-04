import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__logo}>
          <Link href="/">Generic Travel Company</Link>
        </h1>
        <h6>- não viaje, explore</h6>
        <nav className={styles.header__nav}>
          <Link href="/">Início</Link>
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