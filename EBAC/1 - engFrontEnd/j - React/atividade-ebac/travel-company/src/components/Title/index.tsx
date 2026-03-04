import styles from "@/components/Title/Title.module.css"
type Props = {
    title: string;
}

// Componente utilizado na página inicial e nas páginas da rota
const Title = ({title}: Props)=>{
    return(
        <h1 className={styles.title}>{title}</h1>
    )
}

export default Title;