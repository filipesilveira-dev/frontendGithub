import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <img
            className={styles.header__logo}
            src="/tudoDevBlogLogo.png"
            alt="Logo do Tudo Dev Blog"
          />
        </Link>

        <nav className={styles.header__nav}>
          <Link href="/">Início</Link>
          <Link href="/artigos/mais-recentes">Mais recentes</Link>
          <Link href="/artigos/mais-lidos">Mais lidos</Link>
        </nav>
      </div>
    </header>
  );
};

// Exportado para layout.tsx (componente pai)
export default Header;
