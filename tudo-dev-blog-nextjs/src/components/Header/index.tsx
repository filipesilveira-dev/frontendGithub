// Importa a ferramenta nativa de next Link
import Link from "next/link";
// Importa a estilização
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <Image
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
