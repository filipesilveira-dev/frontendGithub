import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p className={styles.footer__text}>Tudo Dev - Todos os direitos reservados.</p>
        </footer>
    )
}

// Exportado para layout.tsx (componente pai)
export default Footer;