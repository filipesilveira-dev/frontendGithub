// Importação da estilização
import styles from "./Title.module.css";

// Tipagem das props
type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};

// Exporta para onde for utilizado
export default Title;
