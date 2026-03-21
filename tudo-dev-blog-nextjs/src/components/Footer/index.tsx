// Importa a estilização
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p className={styles.footer__text}>© 2026. Tudo Dev Blog desenvolvido por 
      <a href="https://github.com/filipesilveira-dev" target="_blank"> Filipe P. Silveira</a>.</p>
        </footer>
    )
}

// Exportado para layout.tsx (componente pai)
export default Footer;